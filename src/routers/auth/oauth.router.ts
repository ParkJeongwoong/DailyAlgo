import express, { Router } from "express";
import { getToken } from "./oauth.service";

const GOOGLE_OAUTH_URI = 'accounts.google.com/o/oauth2/v2/auth';
const OAUTH_URL = `https://${GOOGLE_OAUTH_URI}?client_id=${process.env.CLIENT_ID}&response_type=${process.env.RESPONSE_TYPE}&redirect_uri=${process.env.REDIRECT_URL}&scope=${process.env.SCOPE}&access_type=${process.env.ACCESS_TYPE}`;
const oauthRouter: Router = express.Router();

oauthRouter.get("/google", (req, res) => {
  res.redirect(OAUTH_URL);
});

oauthRouter.get("/google/callback", (req, res) => {
  const query = req.query;
  if (query && query.code) {
    getToken(query.code);
  }
  res.send("OK");
});

export default oauthRouter;