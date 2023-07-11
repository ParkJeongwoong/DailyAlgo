import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.get("authorization");
  if (token) {
    token = token.slice(7);
    jwt.verify(token, "DA_jwt", (err, decoded) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Invalid Token"
        });
      } else {
        req["decoded"] = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: 0,
      message: "Access Denied! Unauthorized User"
    });
  }
};