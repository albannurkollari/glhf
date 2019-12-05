// Helpers
const {hashURL} = require('../helpers/encryption');

// Constants
const METHODS = require('../constants/methods');

// MongooDB models
const ShortenURL = require('../../db/models/url');

// Routes
module.exports = [{
  handler: async ({body: {url}}, res) => {
    if (!url || typeof url !== 'string') {
      return res.json({shortenURL: url});
    }

    const value = hashURL(url);
    const existing = await ShortenURL.findOne({value});

    if (existing) {
      return res.json({value: existing.value});
    }

    await new ShortenURL({value, url}).save();

    res.json({value});
  },
  method: METHODS.POST
}, {
  handler: async ({query}, res) => res.json({im_here: true, ...query}),
  method: METHODS.GET
}];
