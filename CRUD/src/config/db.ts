import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1/training";

export const dbConfig = async () => {
  try {
    const connectStream = await mongoose.connect(DB_URL);

    console.log(`connected to port ${connectStream.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
