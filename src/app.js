const express=require("express")
const app=express();
const path=require('path');
const hbs=require('hbs');

const port=8000;



const staticpath=path.join(__dirname,"../public")
const viewspath=path.join(__dirname,'../template/views')
app.set("views",viewspath)
app.set("view engine","hbs")
app.use(express.static(staticpath))
app.get("/",(req,res)=>{
    res.render("index.hbs");
    // console.log("thid is home")
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
});

app.get("*",(req,res)=>{
    res.render("404error.hbs");
});
app.listen(port,()=>{
    console.log("listening is successfully on 8000 port");

});
