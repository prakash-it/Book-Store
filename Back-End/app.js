const express = require("express");
const app = express();

const user = require('./routes/user')
const book = require('./routes/book')

require("dotenv").config();
require('./conn/conn')

app.use(express.json())
 
//Routers
app.use("/user",user)
app.use("/auth",book)

app.use("/", (req, res) => {
    res.send("Welcome to Back-End Connection");
});
app.listen(process.env.PORT,()=>{
    console.log(`Server Start in ${process.env.PORT}`);
    
})
