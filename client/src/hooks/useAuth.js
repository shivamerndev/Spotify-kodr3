import { register, login } from '../services/auth.service'
import hanleError from '../utils/error.utils'

const useAuth = () => {

    const handleLogin = (data) => hanleError(login(data))

    const handleRegister = (data) => hanleError(register(data))

    return { handleLogin, handleRegister }
}

export default useAuth 