import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    {/* <div style={{display: 'flex', justifyContent: 'center'}}>
       <div style={{backgroundColor: 'red'}}>hey</div>
      <div style={{backgroundColor: 'blue'}}>hey</div>
      <div style={{backgroundColor: 'green'}}>hey</div>
      <div style={{backgroundColor: 'yellow'}}>Pappu ke paas hai paisa</div>
    </div> */}

{/* 
    <div className='flex justify-center '>
    <div style={{backgroundColor: 'red'}}>hey</div>
      <div style={{backgroundColor: 'blue'}}>hey</div>
      <div style={{backgroundColor: 'green'}}>hey</div>
      <div style={{backgroundColor: 'yellow'}}>Pappu ke paas hai paisa</div>
    </div> */}


{/* <div className='grid grid-cols-10 '>
    <div className='bg-red-500 col-span-4'>hey</div>
      <div className='bg-green-500 col-span-2'>hey</div>
      <div className='bg-yellow-500 col-span-2'>hey</div>
      <div className='bg-blue-500 col-span-2'>Pappu ke paas hai paisa</div>
    </div> */}

<div className='grid grid-cols-1 md:grid-cols-3'>
    <div className='bg-red-500'>hey</div>
    <div className='bg-yellow-500'>hey</div>
    <div className='bg-green-500'>hey</div>
    </div> 


    </>
  )
}

export default App
