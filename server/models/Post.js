const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  caption: String,

  mediaUrl: String,

  mediaType: String,

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{ timestamps: true }
);

module.exports = mongoose.model(
"Post",
PostSchema
);
