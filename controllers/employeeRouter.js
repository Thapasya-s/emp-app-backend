const express=require("express")
const router=express.Router()
const employeeModel=require("../models/employeeModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let employee=new employeeModel(data)
    let result=await employee.save()
    res.json({
        status:"success"
    })
    })
    
    router.get("/viewall",async(req,res)=>{
        let data=await employeeModel.find()
        res.json(data)
    })
    
    



module.exports=router
