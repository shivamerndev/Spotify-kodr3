import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    song: {
        type: String,
        required: true,
        unique: true
    },
    artist: String,
})

export default mongoose.model("song",songSchema)