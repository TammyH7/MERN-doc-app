const mongoose = require("mongoose");
const { Schema } = mongoose;


const appointmentSchema = new Schema({
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
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctors',
      required: true,
    }
  ]
},

  {
    timestamps: true,
  });

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
