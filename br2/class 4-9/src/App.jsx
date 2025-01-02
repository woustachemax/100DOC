import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
                <button onClick={() => setCount(Math.random())}>
          count is {count}
        </button><br />

       <br /> hi there
      </div>
    

      
  )
}

export default App
