const express = require("express");
const router = express.Router();
let cart = require("../data/cart");

// Get cart
router.get("/", (req, res) => {
  res.json(cart);
});

// Add to cart
router.post("/", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart" });
});

// Update quantity
router.put("/:id", (req, res) => {
  const item = cart.find(c => c.id == req.params.id);
  if (item) item.quantity = req.body.quantity;
  res.json({ message: "Updated" });
});

// Remove item
router.delete("/:id", (req, res) => {
  cart = cart.filter(c => c.id != req.params.id);
  res.json({ message: "Removed from cart" });
});

module.exports = router;
