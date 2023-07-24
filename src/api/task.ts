import { Task } from "../interfaces/task.interface"

const API = 'http://localhost:3000/api'


export const createTaskRequest = (task:Task) =>
    fetch(`${API}/task`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
