import React, { ChangeEvent, useState } from "react";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setTask({...task,[e.target.name]: e.target.value})
  }
  
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          className="border-2 p-2 rounded-lg block w-full my-2 bg-slate-500"
          placeholder="Escribe un titulo"
        />
        <textarea
          className="border-2 p-2 rounded-lg block w-full my-2 bg-slate-500"
          placeholder="Escribe una descripcion"
          name="description"
          rows={3}
        ></textarea>
        <label className="flex gap-2">
          <input type="checkbox" className="w-5 h-5 bg-indigo-500" />
          <span>Done</span>
        </label>
        <button className="block bg-indigo-500 w-full py-2 rounded my-2">
          Save
        </button>
      </form>
    </div>
  );
}
