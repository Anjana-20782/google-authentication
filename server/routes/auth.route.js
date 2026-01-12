import express from "express";
import passport from "passport";

const router = express.Router();

// 1️⃣ Start Google OAuth login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 2️⃣ Google callback URL
// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false, failureRedirect: "/" }),
//   (req, res) => {
//     res.send(`
//       <h2>Login Successful</h2>
//       <p>Name: ${req.user.name}</p>
//       <p>Email: ${req.user.email}</p>
//       <p>Token: ${req.user.token}</p>
//     `);
//   }
// );


router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    // Redirect to React frontend AuthSuccess page
    res.redirect(`http://localhost:5173/auth-success?token=${req.user.token}`);
  }
);

export default router;
