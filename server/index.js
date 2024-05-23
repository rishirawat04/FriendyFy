import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB  from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import { app,server } from "./socket/socket.js";
dotenv.config({})



const PORT = process.env.PORT || 5000

// middleware
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.json())
const corsParser ={
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsParser));


//routes 
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message',messageRoute )


//listen app
server.listen(PORT, () => {
    connectDB()
    console.log(`server is running on ${PORT}`);
})
