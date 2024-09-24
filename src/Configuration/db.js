import mongoose from "mongoose";
import dotenv from "dotenv";
import posts from "../Models/post.js";
dotenv.config();

let conn = null;

const dbConnection = async() => {
    if(conn == null){
        console.log("creating new connection");
        conn =  mongoose.connect(process.env.DB_URL, {
            serverSelectionTimeoutMS: 5000,
        }).then(() => mongoose);
        await conn;

        // const postdata = await posts.find();
        // console.log('connection established');

        // await mongoose.disconnect();
        // return postdata;
        return conn;
    }

    console.log('connection already established');
    return conn;
}

export default dbConnection;