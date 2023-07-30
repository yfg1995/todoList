import { useState } from "react"

const AddTask = ({ handleAddNewSubmit }) => {
  const [taskTitle, setTaskTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleAddNewSubmit(taskTitle)
  }

  const onChange = (e) => {
    setTaskTitle(e.target.value)
  }

  return (
    <div style={{width: '100%'}}>
      <h2>Add Task</h2>
    <form className="addTask" onSubmit={submitHandler}>
      <input
        autoFocus
        type="text"
        required
        value={taskTitle}
        onChange={onChange}
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  )
}

export default AddTask