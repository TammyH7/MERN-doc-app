const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const {hospitalSchema} = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctors'
    }
  ]});

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;