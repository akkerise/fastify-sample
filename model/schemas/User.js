const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  roles: { type: [String], default: [] },
  updated: { type: Boolean, default: false }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', schema)