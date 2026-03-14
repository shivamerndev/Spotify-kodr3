import mongoose from "mongoose";
import config from "./env.config.js"

async function connetToDB() {
    await mongoose.connect(config.MONGO_URI)
    console.log('connect successfully.')
}
export default connetToDB;