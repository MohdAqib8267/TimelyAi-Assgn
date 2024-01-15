
import pkg from 'pg';

const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

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

export default pool;