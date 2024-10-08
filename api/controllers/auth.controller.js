import User from "../models/user.model.js"; // Import the User model
import argon2 from "argon2";
// Signup controller
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new User instance
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      email,
      password:hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};
