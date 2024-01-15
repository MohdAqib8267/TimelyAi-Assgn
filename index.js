
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { postRoute } from "./router/postRoute.js";
dotenv.config();

const app=express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

 

//routes
app.use("/api",postRoute);


// export default pool;
app.listen(3000,()=>{
    console.log("server is running at 3000");
})