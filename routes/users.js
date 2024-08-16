const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestClone2");

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  profileImage: String,
  name: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

UserSchema.plugin(plm);
// Create the User model
const user = mongoose.model("user", UserSchema);

module.exports = user;
