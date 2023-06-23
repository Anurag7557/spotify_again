const jwt = require("jsonwebtoken");

const Auth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(401).json({
        message: "Missing auth token",
      });
    }
    if (jwt.verify(token, "spotifyclone")) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (err) {
    return res.send({
      message: "Unauthorized",
    });
  }
};

module.exports = Auth;
