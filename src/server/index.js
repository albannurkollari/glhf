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

// Helpers
const connectToMongoDB = require('./helpers/connection');
const ServerError = require('./helpers/errors');
const doRedirect = require('./helpers/redirect');

// Constants
const DEFAULT_PATH = '/';

// Express Router
class Router {
  constructor() {
    const app = express();

    if (!(app instanceof Object)) {
      throw new ServerError(1000);
    }

    const {devServer, isProduction, ...config} = generateWebpackConfig();
    const compiler = webpack(config);

    if (process.env.NODE_ENV === undefined) {
      process.env.NODE_ENV = config.mode;
    }

    this.app = app;
    this.initialized = new Promise(resolve => {
      // Initiate middlewaress
      app.use(express.urlencoded({extended: true}));
      app.use(express.json());

      if (isProduction) {
        app.use(express.static(process.paths.BUILD));
        app.get('/', (_, res) => res.sendFile(process.paths.STATIC_WEB));
      }
      else {
        this.devServerInstance = webpackMiddlewares.dev(compiler, devServer);
        this.HRMinstance = webpackMiddlewares.hot(compiler);

        app.use(this.devServerInstance);
        app.use(this.HRMinstance);
      }

      const allRoutes = fs.readdirSync(process.paths.ROUTES);
      const logs = [];

      app.get('/:hashedURL', ({path}, res, next) => {
        const _path = path.slice(1);

        allRoutes.some(route => route.includes(_path))
          ? next()
          : doRedirect(_path, res);
      });

      // Initiate routes
      allRoutes
        .filter(file => /\.js$/.test(file))
        .map(file => {
          const fileName = `/${file.replace(/\.js$/, '')}`;
          const router = express.Router();
          const routes = require(path.resolve(process.paths.ROUTES, file));

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
