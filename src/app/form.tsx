import { Input } from "postcss"
import AddTodo from "@/app/action"

export default function Form(){
    return(
    <main>

        <form action={
            AddTodo

        }
        >
        <label htmlFor="name">
        Task<br></br>
        </label>
        <input id="name" placeholder="Enter the task" name="task"/>
        <label htmlFor="description">
        Description<br></br>
        <input id="description" placeholder="Enter the task" name="description"/>

        </label>
        
        <button type="submit" className="btn btn-primary w-full hover:scale-110 duration-300 ease-in-out"> AddTaks
    Add
        </button>
        </form>
    </main>
    )   
    
}