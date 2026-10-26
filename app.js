import express from "express";

const app = express();

app.use(express.json());

app.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !email.includes("@") || !password) {
    return res.status(400).json({ message: "Invalid details" });
  }

  res.status(201).json({ message: "Registration successful" });
});

export default app;