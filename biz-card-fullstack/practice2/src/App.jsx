import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish React Assignment",
      description: "Complete the assignment for React basics.",
      category: "Work",
    },
    {
      id: 2,
      title: "Grocery Shopping",
      description: "Buy milk, eggs, and bread for the week.",
      category: "Personal",
    },
    {
      id: 3,
      title: "Morning Run",
      description: "Run 5km at the park to stay healthy.",
      category: "Health",
    },
  ]);
  return(
    <div> 
     {tasks.map(function (tasks){
      return <div>
      <TaskCreative key={tasks.id}>
        <TaskHandler title={tasks.title} description={tasks.description} category={tasks.category}/>
      </TaskCreative>
      </div>
     })}
    </div>
   )

}
function TaskHandler({title, description, category}){
  return <div>
    <ul>
      <li><strong>Title: </strong> <strong>{title}</strong></li>
      <li><strong> Description: </strong>{description}</li>
      <li><strong>ID: </strong>{category} </li>
    </ul>
  </div>
}

function TaskCreative({children}){
  return <div style={{border: "10px solid #523420", color: '#635147', backgroundColor: 'beige', margin: 20, padding: 20}}>
    {children}
  </div>
}
export default App
