
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import pkg from 'pg';
import { postRoute } from "./router/postRoute.js";



const { Pool } = pkg;
dotenv.config();

const app=express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

 

//connection with DB
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database:process.env.DATABASE, 
    password:process.env.PASSWORD,
    dialect:process.env.DIALECT,
    port:process.env.PORT,

})

pool.connect()
.then(()=>console.log('connected sucessfully'))
.catch((err)=>console.log("err in connection:",err));

//routes
app.use("/api",postRoute);


export default pool;
app.listen(3000,()=>{
    console.log("server is running at 3000");
})