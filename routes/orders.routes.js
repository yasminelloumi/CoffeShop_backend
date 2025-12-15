const express = require("express");
const router = express.Router();
let orders = require("../data/orders");

// Create order
router.post("/", (req, res) => {
  const newOrder = {
    id: Date.now(),
    items: req.body.items,
    total: req.body.total,
    payment: req.body.payment,
    date: new Date()
  };

  orders.push(newOrder);
  res.json({ message: "Order placed", order: newOrder });
});

// Get orders
router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
