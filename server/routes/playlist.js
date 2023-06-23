const e = require("express");
// const Auth = require('../middlewares/Auth')
const express = require("express");
const fs = require("fs");
const { User } = require("../models/User");
const router = express.Router();

//SPECIFIC THOUGHT
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user.length == 0) {
      return res.send({
        message: "No users found",
      });
    } else {
      return res.send({
        message: "User retrieved successfully",
        playlist: user.playlists,
      });
    }
  } catch (err) {
    return res.send({
      message: "Sommething went wrong",
      error: err.message,
    });
  }
});

router.get("/:id/:playId", async (req, res) => {
  try {
    const id = req.params.id;
    const playId = req.params.playId;
    const user = await User.findById(id);
    if (user.length == 0) {
      return res.send({
        message: "No users found",
      });
    } else {
      const playObj = user.playlists.filter(function (item) {
        return item._id == playId;
      });
      if (playObj) {
        return res.send({
          message: "User retrieved successfully",
          playlist: user.playObj,
        });
      } else {
        return res.send({
          message: "No such playlist found",
        });
      }
    }
  } catch (err) {
    return res.send({
      message: "Sommething went wrong",
      error: err.message,
    });
  }
});

router.delete("/:id/:playId", async (req, res) => {
  try {
    const id = req.params.id;
    const playId = req.params.playId;
    const user = await User.findById(id);
    if (user.length == 0) {
      return res.send({
        message: "No users found",
      });
    } else {
      const playObj = user.playlists.filter(function (item) {
        return item._id != playId;
      });
      return res.send({
        message: "PLaylist retrieved successfully",
      });
    }
  } catch (err) {
    return res.send({
      message: "Sommething went wrong",
      error: err.message,
    });
  }
});

//ADD THOUGHT
router.put("/:id", async (req, res) => {
  try {
    console.log("Reached the add route");
    let error = "";
    const id = req.params.id;
    const user = await User.findById(id);
    const { name } = req.body;
    if (user.length == 0) {
      return res.send({
        message: "No users found",
      });
    } else {
      const playObj = {
        name: name,
        songs: [],
      };
      user.playlists = [...user.playlists, playObj];
      await user.save();
      return res.send({
        message: "Playlist added successfully",
        playlist: user.playlists,
        play: playObj,
      });
    }
  } catch (err) {
    return res.send({
      message: "Sommething went wrong",
      error: err.message,
    });
  }
});

//ADD COMMENT

router.put("/song/:userId/:playlistId", async (req, res) => {
  try {
    const id1 = req.params.userId;
    const playId = req.params.playlistId;
    const user = await User.findById(id1);
    const { id, name, image, artist, genre, year, song_path } = req.body;
    if (user.length == 0) {
      return res.send({
        message: "No users found",
      });
    } else {
      const playlists = user.playlists;
      const songObj = { id, name, image, artist, genre, year, song_path };
      playlists.forEach((item) => {
        if (item._id.toString() == playId) {
          const temp = item.songs.filter(function (ele1) {
            return ele1.id == id;
          });
          if (temp.length > 0) {
            return res.send({
              message: "Song already exists",
            });
          } else {
            item.songs = [...item.songs, songObj];
          }
        }
      });
      await user.save();
      return res.send({
        message: "Song added successfully",
        playlist: user.playlists,
        song: songObj,
      });
    }
  } catch (err) {
    return res.send({
      message: "Sommething went wrong",
      error: err.message,
    });
  }
});

router.delete("/song/:userId/:playlistId/:songId", async (req, res) => {
  try {
    const id1 = req.params.userId;
    const playId = req.params.playlistId;
    const songId = req.params.songId;
    const user = await User.findById(id1);
    if (user.length == 0) {
      return res.send({
        message: "No users found",
      });
    } else {
      const playlists = user.playlists;
      playlists.forEach((item) => {
        if (item._id.toString() == playId) {
          item.songs = item.songs.filter(function (ele) {
            return ele._id != songId;
          });
        }
      });
      await user.save();
      return res.send({
        message: "Song deleted successfully",
        playlist: user.playlists,
      });
    }
  } catch (err) {
    return res.send({
      message: "Sommething went wrong",
      error: err.message,
    });
  }
});

module.exports = router;
