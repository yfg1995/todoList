import TaskItem from './TaskItem'

const ListOfTasks = ({ tasks, handleDelete, handleEditSubmit }) => {
  return (
    <div className="listOfTasks">
    <h2>List of Tasks</h2>
    {tasks.length ? (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleDelete={handleDelete}
          handleEditSubmit={handleEditSubmit}
        />
      ))}
    </ul>
    ) : (
      <p>nema nista, slabo</p>
    )}
    </div>
  )
}

export default ListOfTasks