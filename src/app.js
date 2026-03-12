import express from "express"
import morgan from "morgan"
import userRouter from "./routes/user.route.js"
import songRouter from "./routes/song.route.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/auth", userRouter)
app.use("/api/song", songRouter)

//  error handler fallback by next
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).json({ message: err.message });
});

export default app;