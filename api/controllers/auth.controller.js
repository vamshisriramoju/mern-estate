import User from "../models/user.model.js"; // Import the User model
import argon2 from "argon2";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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

// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, "User not found "));

//     const validPassword = await argon2.verify(validUser.password, password);
//     if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const {password: pass, ...rest} = validUser._doc;
//     res
//       .status(200)
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log("Signin attempt for:", email); // Log the email for debug

    const validUser = await User.findOne({ email });
    if (!validUser) {
      console.log("User not found");
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = await argon2.verify(validUser.password, password);
    if (!validPassword) {
      console.log("Wrong password");
      return next(errorHandler(401, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    console.log("Generated Token:", token); // Log the generated token

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true }) // This sets the cookie in the response
      .json({ ...rest, accessToken: token }); // Include the token in the JSON response
  } catch (error) {
    console.error("Error during signin:", error);
    next(error);
  }
};
