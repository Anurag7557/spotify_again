const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
exports.dbConn = async () => {
  try {
    const dbURL = process.env.dbURL;
    await mongoose.connect(dbURL);
    console.log(`Database connected`);
  } catch (err) {
    console.log(`Database connection error ${err.message}`);
  }
};
