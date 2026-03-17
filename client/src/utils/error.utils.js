const hanleError = (cb) => async (...arg) => {
    try {
        let res = await cb(...arg)
        return res
    } catch (error) {
        return { error: error.message }
    }
}
export default hanleError