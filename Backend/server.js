require("dotenv").config();
const app = require("./src/app");

const connectedDB = require("./config/db");


connectedDB();
const port = process.env.PORT || 4000

app.listen(port, ()=>{
     console.log(`Server is running at localhost ${port}`);
})