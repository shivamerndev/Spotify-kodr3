const handleForm = (e, callback) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  let obj = Object.fromEntries(formData)
  if (callback) callback(obj)
}
export default handleForm;