// Libraries and enviromental configs
require('dotenv/config');
const chalk = require('chalk');
const express = require('express');
const fs = require('fs');
const path = require('path');

// Constants
const DEFAULT_PATH = '/';
const ERRORS = {
  1000: 'Express failed to initialize!',
  2000: 'Given `port` argument is not a number!'
};
const PUBLIC_DIR = path.resolve('./build');
const PUBLIC_WEB = path.resolve(PUBLIC_DIR, 'index.html');
const ROUTES_DIR = path.resolve(__dirname, './routes');

// Custom Error
class ServerError extends Error {
  constructor(message) {
    super(message);

    this.stack = this.stack.replace(/^Error/, this.constructor.name);
  }
}

// Express Router
class Router {
  constructor() {
    const app = express();

    if (!(app instanceof Object)) {
      throw new ServerError(ERRORS[1000]);
    }

    // Initiate middlewaress
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.get('/', (_, res) => res.sendFile(PUBLIC_WEB));
    app.use(express.static(PUBLIC_DIR));

    // Initiate routes
    fs.readdirSync(ROUTES_DIR).map(file => {
      const fileName = `/${file.replace(/\.js$/, '')}`;
      const router = express.Router();
      const routes = require(`${ROUTES_DIR}${fileName}`);
      
      routes.forEach(({handler, method, path = DEFAULT_PATH}, i) => {
        const count = i + 1;
        const symbol = (i === 0 ? '\n' : '') + chalk.hex('#1e90ff')(count % 2 ? '└┬┴┬┘' : '┌┴┬┴┐');
        const httpMethod = chalk.hex('#ffd36c')(method.toUpperCase());
        const fullPath = chalk.hex('#6cfff9')(`${fileName}${path}`);

        router[method](path, handler);
        console.log(`${symbol} ${chalk(`[${count}]`)} -> ${httpMethod} ${fullPath}`);
      });

      app.use(fileName, router);
    });

    this.app = app;
  }
}

// Application
class App extends Router {
  port = 8080

  constructor(port) {
    super();

    this.port = port || this.port;
  }

  start = () => {
    if (isNaN(this.port)) {
      throw new ServerError(ERRORS[2000]);
    }

    this.app.listen(
      this.port,
      () => console.log(chalk`{blue \nListening to {green.bold http://localholst:${this.port}}}`)
    );
  };
}

// Start here
new App().start();