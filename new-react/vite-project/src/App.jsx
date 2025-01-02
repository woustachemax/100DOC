import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

// function 
function App() {
  return <div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <Todo id={2}/>
  </div>

  function Todo(id) {
    const [todo, setTodo] = useState({});

    useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(response => {
          setTodo(response.data.todo)
        })
    }, [])

    return <div>
      <h1>
        {todo.title}
      </h1>
      <h4>
        {todo.description}
      </h4>
    </div>
  }

}

function OnButtonPress({}){

}

export default App
