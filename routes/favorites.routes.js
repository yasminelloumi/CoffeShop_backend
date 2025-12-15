const express = require("express");
const router = express.Router();
let favorites = require("../data/favorites");

// Get favorites
router.get("/", (req, res) => {
  res.json(favorites);
});

// Add to favorites
router.post("/", (req, res) => {
  favorites.push(req.body);
  res.json({ message: "Added to favorites" });
});

// Remove favorite
router.delete("/:id", (req, res) => {
  favorites = favorites.filter(f => f.id != req.params.id);
  res.json({ message: "Removed from favorites" });
});

module.exports = router;
