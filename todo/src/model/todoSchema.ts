import mongoose from 'mongoose'

const todoSchema=new mongoose.Schema(
    {   
        
        task:{
            type:String ,
            required:true
        },
        description:String,
        
        
    }
)
const todomodel = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default todomodel