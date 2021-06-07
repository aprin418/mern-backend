const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const unserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
  },
  timesLoggedIn: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
