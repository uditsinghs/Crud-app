import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDb connection successfully");
  } catch (error) {
    console.log("database connection failed:" + error.message);
    process.exit(1);
  }
};
export default connectDB;
