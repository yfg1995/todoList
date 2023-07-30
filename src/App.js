import { useState } from "react";
import ListOfTasks from "./ListOfTasks";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1'
    },
    {
      id: 2,
      title: 'Task 2'
    }
  ])

  // const handleEditSubmit = (id, title) => {
  //   const editedTask = [...tasks].filter(task => task.id === id)
  //   const remainigTasks = tasks.filter(task => task.id !== id)
  //   editedTask.title = title;
  //   setTasks([...remainigTasks, ...editedTask])
  // } ***********************dobar nacin ali ima problem kad se edituje, onda ga pozicionira na bottom

  const handleEditSubmit = (id, title) => {
    const taskIndex = tasks.findIndex(task => task.id === id)

    if (taskIndex !== -1) {
      const updatedTasks = [...tasks]
      updatedTasks[taskIndex].title = title
      setTasks(updatedTasks)
    }
  }

  const handleAddNewSubmit = (title) => {
    const id = Date.now().toString()
    const newTask = { id, title }
    const allTasks = [...tasks, newTask]
    setTasks(allTasks)
  }

  const handleDelete = (id) => {
    const tasksList = tasks.filter(task => task.id !== id)
    setTasks(tasksList)
  }

  return (
    <div className="App">
      <AddTask
        handleAddNewSubmit={handleAddNewSubmit}
      />
      <ListOfTasks
        tasks={tasks}
        handleDelete={handleDelete}
        handleEditSubmit={handleEditSubmit}
      />
    </div>
  );
}

export default App;