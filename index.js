import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors'
import dbConnection from './src/Configuration/db.js';

import { cloudinaryConnect } from './src/Configuration/cloudinary.js';

import { PostRouter } from './src/Routes/PostRoute.js';
import { UserRouter } from './src/Routes/UserRoute.js';
import { PostController } from './src/Controllers/PostController.js';

const app = express();

cloudinaryConnect();

app.use(express.json());
app.use(cors());
app.get("/", async (req, res) => {
    try{

        // await dbConnection();
        console.log("working")
        return res.send("Hello World!");
    }catch(err){
            console.log("error ", err.message)
    }
})

app.get("/health", (req, res) => {
    res.send("Okay!");
})

app.get("/getPost",PostController);
app.use('/api/v1/Post', PostRouter);
app.use('/api/v1/User', UserRouter);

app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "An error occurred", error: err.message });
});

export const handler = async(event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    await dbConnection();
    return serverless(app)(event, context, callback);
}
export  {app};