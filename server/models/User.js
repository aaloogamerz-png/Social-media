const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
{
  username: String,
  email: String,
  password: String,
  profilePic: String,

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{ timestamps: true }
);

module.exports = mongoose.model(
"User",
UserSchema
);
