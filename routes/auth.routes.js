const express = require("express");
const router = express.Router();
let users = require("../data/users");

/**
 * REGISTER
 */
router.post("/register", (req, res) => {
  const { name, email, password, avatar } = req.body;

  console.log('📝 Registration attempt:', { name, email, hasAvatar: !!avatar });

  // Check if user exists
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    console.log('❌ User already exists:', email);
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // ⚠️ plain text (OK for learning)
    avatar: avatar || null
  };

  users.push(newUser);

  console.log('✅ User registered successfully:', newUser.email);
  console.log('👥 Total users:', users.length);

  res.json({
    message: "Registration successful",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar
    }
  });
});

/**
 * LOGIN
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log('🔐 Login attempt:', email);
  console.log('👥 Available users:', users.length);

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    console.log('❌ Login failed: Invalid credentials');
    return res.status(401).json({ message: "Invalid email or password" });
  }

  console.log('✅ Login successful:', user.name);

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    }
  });
});

/**
 * GET ALL USERS (Debug route)
 */
router.get("/users", (req, res) => {
  console.log('📋 Listing all users:', users.length);
  res.json({
    count: users.length,
    users: users.map(u => ({ id: u.id, name: u.name, email: u.email }))
  });
});

module.exports = router;
