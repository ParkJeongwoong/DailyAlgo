import userQuery from "./user.query";
import db from "../../db.js";
import { Request, Response } from "express";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      const params = [req.body.id, req.body.password];
      conn.query(userQuery.getUser, params, (error, rows) => {
        if (error) throw error;
        if (!rows || rows.length === 0) return res.status(404).send("User does not exist.");
        const user = rows[0];
        const result = compareSync(req.body.password, user.password)
        if (result) {
          user.password = undefined;
          const jsonToken = sign({ result: user }, "DA_jwt", { expiresIn: "1h" });
          res.status(200).json({
            success: true,
            message: "login succeed",
            token: jsonToken
          })
        } else {
          res.status(401).json({
            success: false,
            message: "login failed"
          })
        }
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      const params = [req.params.id];
      conn.query(userQuery.getUser, params, (error, rows) => {
        if (!rows) return res.status(404).send("Query is not valid.");
        const user = rows[0];
        if (error) throw error;
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).send("User does not exist.");
        }
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const salt = genSaltSync(10);
  req.body.password = hashSync(req.body.password, salt);
  try {
    await db.getConnection(conn => {
      const params = [req.body.id, req.body.password, req.body.name];
      conn.query(userQuery.insertUser, params, (error, rows) => {
        if (error) throw error;
        res.status(200).json(rows.insertId);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};