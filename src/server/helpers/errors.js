// Constants
const {ERRORS} = require('../constants'); 

// Custom Error
module.exports = class ServerError extends Error {
  constructor(code) {
    // Any other common error argument, e.g. string or Error object
    if (isNaN(code)) {
      super(code)
    }
    // Custom error code as Number
    else {
      super(ERRORS[code]);
    }

    this.stack = this.stack.replace(/^Error/, this.constructor.name);
  }
}
