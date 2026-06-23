import mongoose from "mongoose";
import { getEnv } from "../utils/env.js";

const connectDB = async () => {
  try {
    const env = getEnv();
    const conn = await mongoose.connect(env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.name} and ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
