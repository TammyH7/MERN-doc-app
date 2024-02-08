const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
mongoose.set("strictQuery", false);
require("dotenv").config();


const client = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;