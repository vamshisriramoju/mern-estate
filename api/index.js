import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  userRouter from "./routes/user.routes.js"
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("error connecting", err);
  });

const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});


app.use("/api/user" , userRouter);