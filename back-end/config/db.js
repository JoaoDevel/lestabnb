import dotenv from "dotenv";
import mongoose from "mongoose";

const URL = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

