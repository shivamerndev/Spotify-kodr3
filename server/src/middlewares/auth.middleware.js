import jwt from "jsonwebtoken"
import envConfig from "../config/env.config.js"
import errorHandler from "../utils/error.utils.js"

const checkAuth = errorHandler(async (req, res, next) => {

    const token = req.rawHeaders.find(e => e.includes("token"))?.split("=")[1]

    if (!token) {
        return res.send("Invalid token. Please login to upload song.")
    }
    const decoded = await jwt.verify(token, envConfig.JWT_SECRET)

    if (decoded.userType !== "artist") {
        return res.send("You Can't upload song. Because you are not authorized")
    }
    req.user = decoded;
    next()
})

export default checkAuth;