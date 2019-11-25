// Libraries and enviromental configs
require("dotenv/config");
const chalk = require("chalk");
const express = require("express");
const fs = require("fs");
const webpack = require("webpack");
const generateArgs = require('../../configs/webpack/shared/yargs');
const generateWebpackConfig = require("../../configs/webpack");
const webpackMiddlewares = {
  dev: require("webpack-dev-middleware"),
  hot: require("webpack-hot-middleware")
};
const PATHS = require("../../configs/webpack/shared");

// Constants
const DEFAULT_PATH = "/";
const ERRORS = {
  1000: "Express failed to initialize!",
  2000: "Given `port` argument is not a number!"
};

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

    debugger;

    const isProduction = generateArgs('p');
    const {devServer, ...config} = generateWebpackConfig({ isProduction });
    const compiler = webpack(config);

    // Initiate middlewaress
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    if (isProduction) {
      app.use(express.static(PATHS.BUILD));
      app.get("/", (_, res) => res.sendFile(PATHS.STATIC_WEB));
    }
    else {
      app.use(webpackMiddlewares.dev(compiler, devServer));
      app.use(webpackMiddlewares.hot(compiler));
    }

    // Initiate routes
    fs.readdirSync(ROUTES_DIR).map(file => {
      const fileName = `/${file.replace(/\.js$/, "")}`;
      const router = express.Router();
      const routes = require(`${ROUTES_DIR}${fileName}`);

      routes.forEach(({ handler, method, path = DEFAULT_PATH }, i) => {
        const count = i + 1;
        const symbol = (i === 0 ? "\n" : "") + chalk.hex("#1e90ff")(count % 2 ? "└┬┴┬┘" : "┌┴┬┴┐");
        const httpMethod = chalk.hex("#ffd36c")(method.toUpperCase());
        const fullPath = chalk.hex("#6cfff9")(`${fileName}${path}`);

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
  port = 8080;

  constructor(port) {
    super();

    this.port = port || this.port;
  }

  log = () => console.log(chalk`{blue \nListening to {green.bold http://localholst:${this.port}}}`)
  start = () => {
    if (isNaN(this.port)) {
      throw new ServerError(ERRORS[2000]);
    }

    this.app.listen(this.port, this.log);
  }
}

// Start here
new App().start();
