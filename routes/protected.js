const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/auth");

// Normal protected route
router.get("/", protect, (req, res) => {
  res.json({
    message: "Access granted to protected route",
    user: req.user,
  });
});

// Admin-only route
router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin!",
    user: req.user,
  });
});

module.exports = router;
