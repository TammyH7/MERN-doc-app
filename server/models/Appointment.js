const mongoose = require("mongoose");
const {Schema} = mongoose;


const apptSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  inPerson: {
    type: Boolean,
    time: String,
    required: true,
  },
  virtual: {
    type: Boolean,
    time: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  hospital: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true,
    }
  ],
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctors',
      required: true,
    }
  ]},

  {
    timestamps: true,
  });

const Appointment = model("Appointment", apptSchema);

module.exports = Appointment;
