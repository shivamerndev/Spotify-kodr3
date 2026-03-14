import app  from "./src/app.js";
import connetToDB from "./src/config/db.js";
import config from "./src/config/env.config.js"

const port = config.PORT || 3000

connetToDB()
app.listen(port,()=>console.log(`port ${port}`))