import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// let state ={ 
//   count:0
// }

function App() {
  const [count, setCount] = useState(0);



  // function onClickHandler(){
  //   setCount(count+1);
  // }

  return (
   <div>
    <CustomButton count={count} setCount={setCount}></CustomButton><br /><br />
    <CustomButton count={count+1} setCount={setCount}></CustomButton><br /><br />
    <CustomButton count={count-1} setCount={setCount}></CustomButton><br /><br />
    <CustomButton count={count%100} setCount={setCount}></CustomButton><br /><br />
    <CustomButton count={count/5} setCount={setCount}></CustomButton><br />
   </div>
  )
}

function CustomButton (props){

  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>

}

export default App
