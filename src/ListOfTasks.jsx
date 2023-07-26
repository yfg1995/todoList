import TaskItem from './TaskItem'

const ListOfTasks = ({ tasks, handleDelete, handleEdit, setEditTitle, setEditBody, editTitle, editBody }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem 
          task={task}
          key={task.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setEditTitle={setEditTitle}
          setEditBody={setEditBody}
          editTitle={editTitle}
          editBody={editBody}
        />
      ))}
    </ul>
  )
}

export default ListOfTasks