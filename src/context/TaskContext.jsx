import { createContext, useState, useEffect } from "react"
import { tasks as data} from "../data/task"

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function crearTarea(taskTitle, taskDescription){
        setTasks([...tasks, {
          title: taskTitle,
          id: tasks.length,
          description: taskDescription
        }])
    }
    
    function eliminarTarea(id){
        setTasks(tasks.filter((task) => task.id !== id))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

  return (
    <TaskContext.Provider value = {
        {   tasks,
            crearTarea,
            eliminarTarea
        }
    }>
        {props.children}
    </TaskContext.Provider>
  )
}