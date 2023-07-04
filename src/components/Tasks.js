import { useState } from "react";

// const tasks = [
//     {
//         id: 1,
//         text: 'Reminder 1',
//         day: 'Day 1',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Reminder 2',
//         day: 'Day 2',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Reminder 3',
//         day: 'Day 3',
//         reminder: false
//     },
// ]



// This Task (arrow) function ...

// const Tasks = () => {
//   return (
//     <>
//       {tasks.map((task) => (<h3>{task.text}</h3>))}
//     </>
//   )
// }

// ... is similar to below (arrow func expanded) fuction 

const Tasks = () => {
    const[tasks, setTasks] = useState( [
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
    ])
  return (
  <>
      {tasks.map(function renderTask(task) {
        return <h3 key={task.id}>{task.text}</h3>;
        }
      )}
  </>
  )
}




export default Tasks
