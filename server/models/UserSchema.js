const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  isHost: {
    type: Boolean,
  },
  isPending: {
    type: Boolean,
  },
  idProof:{
    type:String,
  },
  isIDProof:{
    type:Boolean
  },
  profilePic: {
    type: String,
  },
  hostType: {
    type: String,
  },
  interest: {
    type: String,
  },
  posts: [
    {
        type: Schema.Types.ObjectId,
        ref: "POST",
    },
  ],
  hostRating: [
    {
        type: Schema.Types.ObjectId,
        ref: "RATING",
    },
  ],
  isAdmin: {
    type: Boolean,
  },
  hostBio: {
    type: String,
  },
  userRequest: [
    {
        type: Schema.Types.ObjectId,
        ref: "REQUEST",
    },
  ],
  location: {
    type: String,
  },
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
