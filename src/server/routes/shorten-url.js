// Libraries
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Constants
const METHODS = require('../constants/methods');

// Routes
module.exports = [{
  handler: async ({body}, res) => res.json({im_here: true}),
  method: METHODS.POST
}, {
  handler: async ({query}, res) => res.json({im_here: true, ...query}),
  method: METHODS.GET
}];
