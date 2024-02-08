const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema(
    {
        employeeid:String,
        employeename:String,
        designation:String,
        salary:String
        
    }
)
module.exports=mongoose.model("employee",employeeSchema)