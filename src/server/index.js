// Libraries and enviromental configs
require('dotenv/config');
const chalk = require('chalk');
const express = require('express');
const fs = require('fs');

// Constants
const DEFAULT_PATH = '/';
const ERRORS = {
  1000: 'Express failed to initialize!',
  2000: 'Given `port` argument is not a number!'
};
const ROUTES_DIR = './routes';

// Custom Error
class AppError extends Error {
  constructor(message) {
    super(message);

    this.stack = this.stack.replace(/^Error/, this.constructor.name);
  }
}

// Express Router
class Router {
  constructor() {
    this.app = express();

    if (!(this.app instanceof Object)) {
      throw new AppError(ERRORS[1000]);
    }

    // Initiate middlewares
    this.app.use(ex.urlencoded({extended: true}));
    this.app.use(ex.json());

    // Initiate routes
    fs.readdirSync(ROUTES_DIR).map(file => {
      const fileName = `/${file.replace(/\.js$/, '')}`;
      const router = ex.Router();
      const routes = require(`${ROUTES_DIR}${fileName}`);
      
      routes.forEach(({handler, method, path = DEFAULT_PATH}, i) => {
        const count = i + 1;
        const symbol = chalk.hex('#1e90ff')(count % 2 ? '└┬┴┬┘' : '┌┴┬┴┐');
        const httpMethod = chalk.hex('#ffd36c')(method.toUpperCase());
        const fullPath = chalk.hex('#6cfff9')(`${fileName}${path}`);

        router[method](path, handler);
        console.log(`${symbol} ${chalk.inverse(`[${count}]`)} -> {${httpMethod}} ${fullPath}`);
      });

      this.app.use(_file, router);
    });
  }
}

// Application
class App extends Router {
  port = 8080

  constructor(port) {
    super();

    if (isNaN(port)) {
      throw new AppError(ERRORS[2000]);
    }

    this.start = () => {
      this.app.listen(
        port || this.port,
        () => console.log(chalk`{inverse {blue Listening to {green http://localholst:${this.port}}}}`)
      );
    };
  }
}

// Start here
new App().start();