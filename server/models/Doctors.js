const mongoose = require("mongoose");
const {Schema} = mongoose;

const {docSchema} =new Schema({
  firstname: {
    type: String,
    required: true,
    trim:true,
    minlength: 3
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  gender: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  hospital: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hospital'
    }
  ]},

{
  timestamps: true,
});


const Doctors = model("Doctors", docSchema);

module.exports = Doctors;
