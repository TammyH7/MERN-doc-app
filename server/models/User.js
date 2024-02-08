const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const {userSchema} = new Schema({
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  gender: {
    type: String,
      default: "neither",
    },
  Apponitment: [
    {
       type: Schema.Types.ObjectId,
       ref: 'Appointment', 
       required: true,
    }
  ]},

  {
    timestamps: true,
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
