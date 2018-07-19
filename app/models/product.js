const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  title: {
    type: String,
  },
});

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    validate: {
      validator(name) {
        return name.length > 3;
      },
      message: 'Name should contain atleast 3 characters',
    },
  },
  lastModifiedDate: {
    type: Date,
  },
  reviews: [reviewSchema],
});

module.exports = mongoose.model('products', productSchema);
