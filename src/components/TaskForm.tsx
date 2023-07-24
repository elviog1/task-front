import React, { ChangeEvent, FormEvent, useState } from "react";
import { createTaskRequest } from "../api/task";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSumbit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task)
    const res = await createTaskRequest(task)
    const data = await res.json()
    console.log(data)
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="title"
          className="border-2 p-2 rounded-lg block w-full my-2 bg-slate-500"
          placeholder="Escribe un titulo"
          onChange={handleChange}
        />
        <textarea
          className="border-2 p-2 rounded-lg block w-full my-2 bg-slate-500"
          placeholder="Escribe una descripcion"
          name="description"
          rows={3}
          onChange={handleChange}
        ></textarea>
        <label className="flex gap-2">
          <input type="checkbox" className="w-5 h-5 bg-indigo-500" onChange={(e) => setTask({...task, done: !task.done})} />
          <span>Done</span>
        </label>
        <button className="block bg-indigo-500 w-full py-2 rounded my-2">
          Save
        </button>
      </form>
    </div>
  );
}
