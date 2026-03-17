import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    song: {
        type: String,
        required: true,
        unique: true
    },
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    poster: {
        type: String
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

export default mongoose.model("song", songSchema)