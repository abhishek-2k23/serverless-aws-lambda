import { Router } from "express";
import { UserController } from "../Controllers/UserContoller.js";
import { getUser } from "../Controllers/UserContoller.js";

const UserRouter = Router();

UserRouter.get("/getUser", UserController);
UserRouter.post("/getUser/:id", getUser);

export {UserRouter};
