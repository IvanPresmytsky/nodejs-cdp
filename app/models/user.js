const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastModifiedDate: {
    type: Date,
  },
});

module.exports = mongoose.model('User', userSchema);
