const express = require("express");
const bcrypt = require("bcryptjs");
const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/add", async (req, res) => {
  let { name, email, password, gender } = req.body;
  try {
    const findUser = await User.find({ email });
    if (findUser.length === 0) {
      bcrypt.hash(password, 3, async (err, hashed) => {
        if (err) {
          res.send({ msg: "error occured" });
        } else {
          let user = new User({
            name,
            email,
            password: hashed,
            gender,
            playlist: [],
          });
          await user.save();
          res.send({ msg: "User Registered Successfully", user: user });
        }
      });
    } else {
      res.json({ msg: "User is already Registered" });
    }
  } catch (err) {
    res.send({ msg: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const verifyUser = await bcrypt.compare(password, user.password);
      if (verifyUser) {
        const token = jwt.sign({ id: user._id }, "spotifyclone");
        res.send({
          message: "Logged in",
          token,
        });
      } else {
        res.send({
          message: "Wrong Username/Password",
        });
      }
    } else {
      res.send({
        message: "Not registered",
      });
    }
  } catch (err) {
    return res.send({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

module.exports = router;
