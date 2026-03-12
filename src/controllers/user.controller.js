import userModel from "../models/user.model.js"
import errorHandler from "../utils/error.utils.js"

const register = errorHandler((req, res) => {

    const { username, email, role, password } = req.body;

    userModel.create({
        username,
        email,
        role,
        password
    }).then(resp => res.send(resp))
})

const login = errorHandler((req, res) => {

})

export { register, login }