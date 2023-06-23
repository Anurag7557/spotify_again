const express = require("express");
const { dbConn } = require("./config/db");
const userRoutes = require("./routes/user");
const playRoutes = require("./routes/playlist");
const Auth  = require("./middleware/Auth");
const cors = require("cors");
const app = express();
const port = 1000;
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use(Auth);
app.use("/playlist", playRoutes);
dbConn();
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
