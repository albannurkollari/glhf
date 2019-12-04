const {model, Schema} = require('mongoose');

// Schema
module.exports = model('URL', Schema({
  value: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  requested: {
    type: Number,
    default: 0
  }
}));