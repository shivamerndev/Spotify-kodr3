import express from "express";
import upload from "../config/multer.config.js";
import { createSong, getSong, getSongs } from "../controllers/song.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";

const songRouter = express.Router()

songRouter.post("/", checkAuth, upload.single("song"), createSong)
songRouter.get("/", getSongs)
songRouter.get("/:songId", getSong)

export default songRouter