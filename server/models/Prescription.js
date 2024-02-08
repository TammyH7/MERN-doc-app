const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const {PrescriptionSchema} = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  refill: {
    type: String,
    required: true
  },
 Appointment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ]});

const Prescription = model('Prescription', PrescriptionSchema);