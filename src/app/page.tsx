import Image from "next/image";
import Form from './form'
import AddTask from "@/components/AddTask";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto ">
      <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Todo List App</h1>
      
      <Form/>
      

      
      
      </div>
    </main>
  );
}
