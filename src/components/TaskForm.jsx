import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {crearTarea} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        crearTarea(title, description)
        setTitle('')
        setDescription('')
    }

  return (
    <div className = 'max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className="bg-neutral-800 p-10 mb-4">
        <h1 className="text-white text-2xl font-bold mb-4">Nueva tarea</h1>
        <input placeholder= "Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-neutral-700 p-2 rounded-md mb-4 w-full"
        autoFocus
        />
        <textarea placeholder="Escribe la descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className = "bg-neutral-700 p-2 rounded-md mb-4 w-full h-32"
        ></textarea>
        <button className = "bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm