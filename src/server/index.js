// Libraries and enviromental configs
require('../../paths');
require('dotenv/config');
const chalk = require('chalk');
const express = require('express');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const generateArgs = require('../../configs/webpack/shared/yargs');
const generateWebpackConfig = require('../../configs/webpack/web');
const webpackMiddlewares = {
  dev: require('webpack-dev-middleware'),
  hot: require('webpack-hot-middleware')
};
const {projectPaths: PATHS} = process;

// Helpers
const connectToMongoDB = require('./helpers/connection'); 
const ServerError = require('./helpers/errors');

// Constants
const DEFAULT_PATH = '/';

// Express Router
class Router {
  constructor() {
    const app = express();

    if (!(app instanceof Object)) {
      throw new ServerError(1000);
    }

    const isProduction = generateArgs('p');
    const {devServer, ...config} = generateWebpackConfig({isProduction});
    const compiler = webpack(config);

    if (process.env.NODE_ENV === undefined) {
      process.env.NODE_ENV = isProduction ? 'production' : 'development';
    }

    this.app = app;
    this.initialized = new Promise(resolve => {
      // Initiate middlewaress
      app.use(express.urlencoded({extended: true}));
      app.use(express.json());

      if (isProduction) {
        app.use(express.static(PATHS.BUILD));
        app.get('/', (_, res) => res.sendFile(PATHS.STATIC_WEB));
      }
      else {
        this.devServerInstance = webpackMiddlewares.dev(compiler, devServer);
        this.HRMinstance = webpackMiddlewares.hot(compiler);
        app.use(this.devServerInstance);
        app.use(this.HRMinstance);
      }

      const logs = [];

      // Initiate routes
      fs.readdirSync(PATHS.ROUTES).map(file => {
        const fileName = `/${file.replace(/\.js$/, '')}`;
        const router = express.Router();
        const routes = require(path.resolve(PATHS.ROUTES, file));

        routes.forEach(({handler, method, path = DEFAULT_PATH}, i) => {
          const count = i + 1;
          const symbol = (i === 0 ? '\n' : '') + chalk.hex('#1e90ff')(count % 2 ? '└┬┴┬┘' : '┌┴┬┴┐');
          const httpMethod = chalk.hex('#ffd36c')(method.toUpperCase());

          router[method](path, handler);
          logs.push({count, fileName, httpMethod, path, symbol});
        });

        app.use(fileName, router);
      });

      this.devServerInstance.waitUntilValid(() => {
        logs.forEach(({count, fileName, httpMethod, path, symbol}) => {
          console.log(`${symbol} ${chalk(`[${count}]`)} -> ${httpMethod} ${chalk.hex('#6cfff9')(`${fileName}${path}`)}`);
        });

        resolve(true);
      });
    });
  }
}

// Application
class App extends Router {
  port = 8080;

  constructor(port) {
    super();

    this.dbConnect = connectToMongoDB;
    this.port = port || this.port;
  }

  log = () => console.log(chalk`{blue \nListening to {green.bold http://localholst:${this.port}}}`)
  start = async () => {
    if (isNaN(this.port)) {
      throw new ServerError(2000);
    }

    if (!await this.initialized) {
      return;
    }
    
    this.isConnected = await this.dbConnect(process.env);

    if (!this.isConnected) {
      throw new ServerError(3000);
    }
    else {
      console.log(chalk`<-- {inverse ${process.env.DB_CONNECTED_MSG || 'Connected to DB!'}} -->`);
    }

    this.app.listen(this.port, this.log);
  }
}

// Start here
new App().start();
