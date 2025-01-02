import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//Counter App
//   const [count, SetCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} SetCount={SetCount}></CustomButton>
//       {/* <CustomButton count={count*10} SetCount={SetCount}></CustomButton>
//       <CustomButton count={count*100} SetCount={SetCount}></CustomButton> */}

//     </div>
//   )
// }

// function CustomButton(props){ 

//   function OnClickHandler(){
//     props.SetCount(props.count + 1) ;
//   }

//   return <button onClick={OnClickHandler}>
//     Counter {props.count}
//   </button>



//to-do application
const [todos, SetTodos]=useState([{
  title: "go to gym",
  description: "go to gym from 6-9",
  completed: false,
},{
  title: "study",
  description: "learn fullstack",
  completed: false,
}])

return(
  <div>
    {todos.map(function (todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
  </div>
)

}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
