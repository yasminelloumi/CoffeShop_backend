const express = require("express");
const path = require('path');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// Routes
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/cart", require("./routes/cart.routes"));
app.use("/api/favorites", require("./routes/favorites.routes"));
app.use("/api/orders", require("./routes/orders.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

app.get("/", (req, res) => {
  res.send("Coffee Shop Backend ☕");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
