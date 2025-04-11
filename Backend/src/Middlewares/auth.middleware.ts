import express from "express";
import passport from "passport";

const router = express.Router();

// Mulai proses login Google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback setelah login
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/login"); // Redirect ke halaman setelah login sukses
  }
);

export default router;