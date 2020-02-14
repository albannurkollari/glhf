const path = require('path');

process.paths = Object.entries({
  APP: '../src/web/app.js',
  BUILD: '../build',
  DEV_WEB: '../src/web/index.html',
  ENTRY_CSS: '../src/web/css/reset.css',
  MODULES: '../node_modules',
  ROUTES: '../src/server/routes',
  SRC: '../src',
  SERVER_ROUTES_DIR: '../src/server/routes',
  STATIC_WEB: '../build/index.html',
  WEBPACK_CONFIG: '../configs/webpack',
}).reduce((acc, [k, v]) => ({...acc, [k]: path.resolve(__dirname, v)}), {});
