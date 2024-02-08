const express=require("express")
const cors=require ("cors")
const mongoose=require("mongoose")
const employeeRouter=require("./controllers/employeeRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://thapasya:9846@cluster0.w7irtzy.mongodb.net/empDb?retryWrites=true&w=majority",
{useNewUrlParser:true})


app.use("/api/employee",employeeRouter)

app.listen(3002,()=>{
    console.log("Server Running")
})