import mongoose from "mongoose";
import {MONGODB_URL} from "../config/index.js";

const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URL)
  } catch (err) {
    console.log(err.message)
  }
}

export default connection;