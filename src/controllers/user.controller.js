import userModel from "../models/user.model.js"
import errorHandler from "../utils/error.utils.js"

const register = errorHandler(async (req, res) => {

    const { username, email, role, password } = req.body;

    const user = await userModel.create({
        username,
        email,
        role,
        password
    })

    const token = await user.generateToken({ username, userType: role })
    res.cookie("token", token)
    res.send(user)
})

const login = errorHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send("username or password is not correct.")
    }
    const user = await userModel.findOne({ username })
    if (!user) return res.send(400).send("user not found")
    const token = await user.generateToken({ username, userType: user.role })
    res.cookie("token", token)
    res.status(200).send("Logged In Successfully.")
})

export { register, login }