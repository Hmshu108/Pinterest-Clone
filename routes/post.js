const mongoose = require("mongoose");

// Define the User schema
const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  description: String,
  image:String
});

// Create the User model
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
