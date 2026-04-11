import express from "express";
import jwt from 'jsonwebtoken';
import { callback, initiate } from "./google.auth.js";
import envConfig from "../src/config/env.config.js";

const googleRouter = express.Router()
console.log(initiate)
// Route to initiate Google OAuth flow
googleRouter.get("/", initiate)

// Callback route that Google will redirect to after authentication
googleRouter.get("/callback", callback , (req, res) => {
    console.log(req.user, "Call back function chal raha hai.")
    const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName },envConfig.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
})

export default googleRouter