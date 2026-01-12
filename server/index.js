import express from "express";
import dotenv from "dotenv";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.route.js";
import profileRoutes from "./routes/profile.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(passport.initialize());

// Public routes
app.use("/auth", authRoutes);

// Protected route
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => res.send("Backend is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
