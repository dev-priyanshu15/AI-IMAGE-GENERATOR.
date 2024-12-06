import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

dotenv.config()

const app= express()
app.use(cors())
app.use(express.json({limit : "50mb"}))

app.use("/api/v1/post" , postRoutes)
app.use("/api/v1/dalle" , dalleRoutes)

app.get("/",  async(req,res)=>{
    res.send("Hello from DALL-E!")
})

/**
 * Starts the server and connects to the database.
 * @async
 * @returns {Promise<void>} A promise that resolves when the server has started successfully.
 * @throws {Error} If there's an error connecting to the database or starting the server.
 */
const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, ()=>{
            console.log("Server has started on port http://localhost:8080")
        })
    }
    catch(error){
        console.log(error)
    }


    
}
startServer()