import ListOfTasks from './ListOfTasks'

const Content = ({ tasks, handleDelete, handleEdit, setEditTitle, setEditBody, editTitle, editBody }) => {
  return (
    <main>
      <h2>List of Tasks</h2>
        <ListOfTasks
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setEditTitle={setEditTitle}
        setEditBody={setEditBody}
        editTitle={editTitle}
        editBody={editBody}
      />
    </main>
  )
}

export default Content