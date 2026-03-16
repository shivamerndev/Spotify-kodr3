const hanleError = (cb) => async (...arg) => {
    try {
        console.log(arg,"arguments")
        let res = await cb(arg)
        console.log(res)
    } catch (error) {
        return (error.message)
    }
}
export default hanleError