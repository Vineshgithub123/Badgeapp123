// const { request, response } = require("express");
const express=require("express");
const app=express();
const cors = require("cors")

app.use(cors());
const PORT = process.env.PORT || 3000;

const Testimony = require("./src/model/model");

app.get("/" , (req,res)=>{

    Testimony.find()
    .then(data=>{
        res.send(data)})
})


app.listen(PORT , (req,res)=>{
    console.log(`Server running on PORT ${PORT}`);
})