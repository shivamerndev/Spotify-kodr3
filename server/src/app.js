import express from "express"
import morgan from "morgan"
import userRouter from "./routes/user.route.js"
import songRouter from "./routes/song.route.js";
// import cookieParser from "cookie-parser";
// import cors from "cors"
import http from "http"
import connetSocket from "./config/socket.io.js";
import passport from 'passport';
import googleRouter from "../auth/google.route.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(passport.initialize());
// app.use(cors({ origin: "http://localhost:5173", credentials: true }))
// app.use(cookieParser())

app.use("/api/auth", userRouter)
app.use("/api/song", songRouter)
app.use("/api/auth/google",googleRouter)

//  error handler fallback by next
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).json({ message: err.message });
});


const httpServer = http.createServer(app);
connetSocket(httpServer)

export default httpServer;