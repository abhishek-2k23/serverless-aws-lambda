import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let conn = null;

export const connectDatabase = async() => {
    if(conn == null){
        console.log("creating new connection");
        conn = await mongoose.connect(process.env.DB_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        return conn;
    }

    console.log('connection already established');
    return conn;
}