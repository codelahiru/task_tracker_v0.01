const tasks = [
    {
        id: 1,
        text: 'Reminder 1',
        day: 'Day 1',
        reminder: true
    },
    {
        id: 2,
        text: 'Reminder 2',
        day: 'Day 2',
        reminder: true
    },
    {
        id: 3,
        text: 'Reminder 3',
        day: 'Day 3',
        reminder: false
    },
]

// This Task function ...

// const Tasks = () => {
//   return (
//     <>
//       {tasks.map((task) => (<h3>{task.text}</h3>))}
//     </>
//   )
// }

// ... is similar to below fuction (arrow func expanded)

const Tasks = () => {
  return (
  <>
      {tasks.map(function renderTask(task) {
        return <h3>{task.text}</h3>;
        }
      )}
  </>
  )
}




export default Tasks
