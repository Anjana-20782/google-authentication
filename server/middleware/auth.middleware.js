import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateJWT = (req, res, next) => {
  // 1️ Read token from headers
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  // Token format: "Bearer <token>"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  // 2️ Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired" });
    }

    // 3️ If valid, attach user to request
    req.user = user;
    next(); // allow request to continue
  });
};
