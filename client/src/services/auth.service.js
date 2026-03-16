import axios from '../utils/axios.utils.js'

const register = async (data) => await axios.post("/auth/register", data);
const login = async (data) => await axios.post("/auth/login", data)
export { register, login } 