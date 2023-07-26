const TaskItem = ({ task, handleDelete, handleEdit, setEditTitle, setEditBody, editTitle, editBody }) => {
  return (
    <li>
      <h4
        onClick={() => setEditTitle(task.id)}
      >{task.title}</h4>
      <p>{
        (task.body).length <= 60
          ? task.body
          : `${task.body.slice(0, 60)}...`
      }</p>

      <button
        onClick={() => handleEdit(task.id)}
      >Edit Task</button>
      <button
        onClick={() => handleDelete(task.id)}
      >Delete Task</button>
    </li>
  )
}

export default TaskItem