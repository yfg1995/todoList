import { useState } from "react";
import Content from "./Content";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat perspiciatis, ullam excepturi aperiam aut?'
    },
    {
      id: 2,
      title: 'Task 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis est fuga alias non quisquam.'
    }
  ])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskBody, setTaskBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
    const newTask = { id, title: taskTitle, body: taskBody }
    const allTasks = [...tasks, newTask]
    setTasks(allTasks)
    setTaskTitle('')
    setTaskBody('')
  }

  const handleDelete = (id) => {
    const tasksList = tasks.filter(task => task.id !== id)
    setTasks(tasksList)
  }

  const handleEdit = (id) => {
    const updatedTask = { id, title: editTitle, body: editBody }
    setTasks(tasks.map(task => task.id === id ? updatedTask : task))
  }

  return (
    <div className="App">
      <AddTask
        handleSubmit={handleSubmit}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskBody={taskBody}
        setTaskBody={setTaskBody}
      />
      <Content
        tasks={tasks}
        handleDelete={handleDelete}
        setEditTitle={setEditTitle}
        setEditBody={setEditBody}
        handleEdit={handleEdit}
        editTitle={editTitle}
        editBody={editBody}
      />
    </div>
  );
}

export default App;