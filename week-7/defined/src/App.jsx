import { lazy } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
const Dashboard = React.lazy(()=> import('./components/Dashboard')) 
const  Landing = React.lazy(()=> import('./components/Landing'))

function App() {

  return (
    <>
    {/* <div style={{backgroundColor: 'beige', color: 'brown', padding: 10}}> */}
      {/* hi this is the top bar and it will remain constant, like it or not b*tch */}
      {/* <button style={{padding: 10, backgroundColor: 'brown', color: 'beige', margin: 2}} onClick={()=>{
        window.location.href="/"
      }}>Landing</button>
      <button style={{padding: 10, backgroundColor: 'brown', color: 'beige', margin: 2}} onClick={()=>{
        window.location.href="/dashboard"
      }}>Dashboard</button>
    </div> */}

  
    <div>
    <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

function AppBar(){
  const navigate = useNavigate();

  return <div > 
  <div style={{backgroundColor: 'brown', color: 'beige', padding: 10}}>
    <button style={{backgroundColor: 'beige', color: 'brown', padding: 10, margin:2}} onClick={()=>{
      navigate("/");
    }}>Landing Page</button>
    <button style={{backgroundColor: 'beige', color: 'brown', padding: 10, margin: 2}} onClick={()=>{
      navigate("/dashboard");
    }}>Dashboard</button>
  </div>
</div>
}

export default App
