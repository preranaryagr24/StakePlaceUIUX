import mongoose from "mongoose"

const ideaSchema= mongoose.Schema({
    title:{
        type:String,
        required : [true , "Please provide title"]
    },
    description:{
        type:String,
        required : [true , "Please provide title"]
    },
    phone:{
        type:String,
        required : [true , "Please provide title"]
    },
    email :{
        type:String,
        required : [true , "Please provide title"]
    }
})

const ideamodle = mongoose.model("idea" , ideaSchema)

export default ideamodle