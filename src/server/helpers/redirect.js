// MongooDB models
const ShortenURL = require('../../db/models/url');

module.exports = async (path, res) => {
  const existing = await ShortenURL.findOne({value: path});

  if (existing && existing.url) {
    existing.requested++;
    existing.save();
    res.status(301).redirect(existing.url);
  }
};