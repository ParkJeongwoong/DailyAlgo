import express, { Router } from "express";
import { createUser, getUserById, login } from "./user.service";
import { checkToken } from "../auth/jwt.validation";

const userRouter: Router = express.Router();

userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.get("/test/:id", checkToken, getUserById);

export default userRouter;