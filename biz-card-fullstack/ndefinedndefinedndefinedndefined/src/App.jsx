import React from 'react';
import { useState } from 'react'
import { Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [title, setTitle] = useState(0);
  const [title, setTitle] = useState("My name is Siddharth");

  function OnClickHandler(){
    setTitle("My name is " + Math.random())
  }
  return (
    
    <div>
      <button onClick={OnClickHandler}>Click me to Change the Name</button>
      <Header title=  {title} />
      <Header title="Me" />
      <Header title="Me" />
      <Header title="Me" />
      <Header title="Me" />
      <Header title="Me" />
      <Header title="Me" />
      <Header title="Me" />
      <Header title="Me" />
    </div>
  )
}



const Header = React.memo(function Header({title}) {
  return <div>
   {title}
  </div>
 })

export default App
