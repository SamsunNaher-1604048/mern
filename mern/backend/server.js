const express= require('express')
const app= express()
const notes=require('./data/note')
const dotenv=require("dotenv");
const  conncetionBD=require("./config/Db")


dotenv.config();
conncetionBD()

 app.get('/',(req,res)=>{
   res.send('api is running')
 });

 app.get("/api/notes",(req,res)=>{
    res.json(notes)
 })

 app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>n._id===req.params.id)
    res.send(note)
 })


const port=process.env.port||5000
app.listen(port,console.log(`this derver is running at:${port}`))