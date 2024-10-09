import User from "../models/user.model.js"; // Import the User model
import argon2 from "argon2";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Basic validation for missing fields
  if (!username?.trim() || !email?.trim() || !password?.trim()) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user in the database
    await newUser.save();

    // Send success response
    return res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    // Handle any errors during user creation
    return next(error);
  }
};
