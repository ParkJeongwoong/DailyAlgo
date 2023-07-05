import express, { Request, Response, Router } from "express";

const indexRouter: Router = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default indexRouter;
