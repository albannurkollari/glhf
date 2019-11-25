const yargs = require("yargs");

module.exports = key => {
  const { argv } = yargs
    .usage("yarn node ./server.js --p")
    .option("prod", {
      describe: "Run server in webpack production mode",
      alias: "p",
      type: "boolean",
      default: false
    });

  return typeof key === 'string' && key.trim().length > 0
    ? argv[key]
    : argv;
};
