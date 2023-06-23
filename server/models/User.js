const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const song = new Schema({
  name: String,
  id: Number,
  image: String,
  artist: String,
  genre: String,
  year: String,
  song_path: String,
});

const playlist = new Schema({
  name: String,
  songs: [song],
});
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  playlists: [playlist],
});

exports.User = mongoose.model("user", userSchema);
