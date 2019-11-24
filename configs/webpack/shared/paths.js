const path = require("path");

const PATHS = Object.entries({
  APP: "../../../src/web/app.js",
  BUILD: "../../../build",
  MODULES: "../../../node_modules",
  SRC: "../../../src",
  SERVER_ROUTES_DIR: "../../../src/server/routes",
  STATIC_WEB: "../../../build/index.html",
  DEV_WEB: "../../../src/web/index.html"
}).reduce((acc, [k, v]) => ({ ...acc, [k]: path.resolve(__dirname, v) }), {});

module.exports = {
  ...PATHS,
  PUBLIC: process.env.PUBLIC_PATH || ""
};
