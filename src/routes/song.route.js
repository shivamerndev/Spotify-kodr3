import express from "express";
import upload from "../config/multer.config.js";
import { createSong } from "../controllers/song.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";

const songRouter = express.Router()

songRouter.post("/create", checkAuth, upload.single("song"), createSong)

export default songRouter