import { Router } from "express";
import { GitData, PostController } from "../Controllers/PostController.js";

const PostRouter = Router();

PostRouter.get("/", (req, res) => {
    res.send("This is the post route")
})
PostRouter.get("/getPost", PostController);
PostRouter.get("/gitdata", GitData);

export {PostRouter};