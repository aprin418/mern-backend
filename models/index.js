require("dotenv").config();
const e = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

//set up event for db to print connection
db.once("open", () => {
  console.log(`Connected to mongoDB at ${db.host}:${db.port}`);
});

db.on("error", (error) => {
  console.log(`Database error`, error);
});

//import all models here
const User = require("./User");

//export models here
module.exports = {
  User,
};
