import mongoose from "mongoose";


export const connectDB = async () => {
 await mongoose.connect(<string>process.env.MONGODB_URL)
}