"use server"

import todomodel from "@/model/todoSchema"
import { dbConnect } from "./util/DBConnect"

export default async function AddTodo(formData:FormData){
    try{
        await dbConnect()
        const task=formData.get("task")
        const description=formData.get("description")
        if(!task){
            return{message:"Please enter the task",status:400}
        }
        const todo=await todomodel.create(
            {
                task:task,
                description:description
            }
        )
        if(todo ){
            return {
                message:"Created to do successfully"
            }
        }
        else{
            return {
                message:"Failed "
            }
        }
    }
    catch(e){
        return{
        message:"Error"
        }
    }
}