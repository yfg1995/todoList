import { useState } from "react"

const TaskItem = ({ task, handleDelete, handleEditSubmit }) => {
  const [toggle, setToggle] = useState(true)
  const [title, setTitle] = useState(task.title)
  
  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    handleEditSubmit(task.id, title)
    handleToggle()
  }

  return (
    <li>
      {toggle ? (
      <h4
        onClick={handleToggle}
      >{title}</h4>
      ) : (
      <div>
        <input
          autoFocus
          type="text"
          value={title}
          style={{padding: "8px 6px"}}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          style={{marginLeft: "20px"}}
          onClick={onSubmitHandler}
        >Edit Task</button>
      </div>
      )}

      <button
        onClick={() => handleDelete(task.id)}
      >Delete Task</button>
    </li>
  )
}

export default TaskItem