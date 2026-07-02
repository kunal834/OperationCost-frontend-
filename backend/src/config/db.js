import { MONGO_URI } from "../utils/env.js";
import mongoose from "mongoose";

export const connectDb = async (req, res) => {
  try {
    const url = await mongoose.connect(MONGO_URI);
    console.log("database connected successfully");
  } catch (error) {
    console.error("Database Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};
