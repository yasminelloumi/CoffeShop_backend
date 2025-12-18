const express = require("express");
const router = express.Router();

let users = [];

/**
 * REGISTER
 */
router.post("/register", (req, res) => {
  const { name, email, password, avatar } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Validate avatar format if exists
  if (
    avatar &&
    typeof avatar === "string" &&
    !avatar.startsWith("data:image/")
  ) {
    return res.status(400).json({
      message: "Invalid avatar format. Must be base64 data URL.",
    });
  }

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // ⚠️ plaintext (OK for learning)
    avatar: avatar || null,
  };

  users.push(newUser);

  res.json({
    message: "Registration successful",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
    },
  });
});

/**
 * LOGIN
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
  });
});

module.exports = router;
