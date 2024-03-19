import mongoose from "mongoose";

export const  dbConnect = async () => {
  try {
    // check if the connection is already open
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    const conn = await mongoose.connect("mongodb://localhost:27017/todo"!);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}; 