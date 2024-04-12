const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  name: String,
  images: [String], // Store image URLs or paths
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Poll', pollSchema);