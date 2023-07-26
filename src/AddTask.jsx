const AddTask = ({
  taskTitle, setTaskTitle, taskBody, setTaskBody, handleSubmit
}) => {
  return (
    <div style={{width: '100%'}}>
      <h2>Add Task</h2>
    <form className="addTask" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        required
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        rows="10"
        type="text"
        required
        value={taskBody}
        onChange={(e) => setTaskBody(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  )
}

export default AddTask