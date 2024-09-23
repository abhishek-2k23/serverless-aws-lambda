import express from 'express';
import serverless from 'serverless-http';
const app = express();
import cors from 'cors'
app.use(express.json());
app.use(cors());
import dbConnection from './src/Configuration/db.js';
dbConnection();
// import { cloudinaryConnect } from './src/Configuration/cloudinary.js';

import { PostRouter } from './src/Routes/PostRoute.js';
import { UserRouter } from './src/Routes/UserRoute.js';
import { PostController } from './src/Controllers/PostController.js';

// cloudinaryConnect();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/health", (req, res) => {
    res.send("Okay!");
})

app.get("/getPost", PostController);
app.use('/api/v1/Post', PostRouter);
app.use('/api/v1/User', UserRouter);

app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "An error occurred", error: err.message });
});

export const handler = serverless(app);
export  {app};