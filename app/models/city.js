const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => new Schema.Types.ObjectId(),
  },
  name: {
    type: String,
    unique: true,
    required: [true, 'City name is required'],
    validate: {
      validator(name) {
        return name[0] === name[0].toUpperCase();
      },
      message: 'Name should be capital',
    },
  },
  country: {
    type: String,
    required: [true, 'Country name is required'],
    validate: {
      validator(name) {
        return name[0] === name[0].toUpperCase();
      },
      message: 'Name should be capital',
    }
  },
  capital: { type: Boolean },
  location: {
    lat: {
      type: String,
      default: '',
    },
    long: {
      type: String,
      default: '',
    },
  },
  lastModifiedDate: {
    type: Date,
  },
}, { collection: 'cities' });

module.exports = mongoose.model('City', citySchema);
