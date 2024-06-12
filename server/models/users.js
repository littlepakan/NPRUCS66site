const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  number: {
    type: Number
  },
  role: {
    type: String
  }
},{ timestamp: true});

module.exports = mongoose.model('users', userSchema);