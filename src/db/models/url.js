const {model, Schema} = require('mongoose');

// Schema
module.exports = model('URL', new Schema({
  value: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
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