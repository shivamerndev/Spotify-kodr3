import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import mongoose from "mongoose";
import envConfig from "../config/env.config.js";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["user", "artist"],
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

userModel.methods.generateToken = async (data) => {
    return await sign(data, envConfig.JWT_SECRET)
}

export default mongoose.model("user", userModel)