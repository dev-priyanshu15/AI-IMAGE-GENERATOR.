import mongoose from "mongoose";

/**
 * Establishes a connection to MongoDB using the provided URL.
 * @param {string} url - The MongoDB connection URL.
 * @returns {Promise<void>} A promise that resolves when the connection is established successfully, or rejects with an error if the connection fails.
 */
const connectDB= (url)=>{
    mongoose.set("strictQuery" , true)

    mongoose.connect(url)
    .then(()=> console.log("MONGODB CONNECTED"))
    .catch((err)=> console.log(err))
}

export default connectDB