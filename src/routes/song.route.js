import express from "express";
import upload from "../config/multer.config.js";
import { createSong } from "../controllers/song.controller.js";

const songRouter = express.Router()

songRouter.post("/create",upload.single("song"),createSong)

export default songRouter