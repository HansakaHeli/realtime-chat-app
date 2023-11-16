const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.MDB_CONNECT;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Api is running");
})

app.get("/api/chat",(req,res)=>{
    
})

// connect to mongodb
mongoose.connect(uri)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => console.log("DB error", err));


app.listen(port,()=>{
    console.log(`Server started on port: ${port} `)
})
