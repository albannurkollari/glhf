// Helpers
const {decrypt, encrypt} = require('../helpers/encryption');

// Constants
const METHODS = require('../constants/methods');

// Routes
module.exports = [{
  handler: async ({body}, res) => {
    debugger;
    const encrypted = encrypt(body.url);
    res.json({encrypted});
  },
  method: METHODS.POST
}, {
  handler: async ({query}, res) => res.json({im_here: true, ...query}),
  method: METHODS.GET
}];
