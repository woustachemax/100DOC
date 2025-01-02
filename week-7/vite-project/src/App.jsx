import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Notifications from './components/Notifications';
import Landing from './components/Landing';


function App() {

  return (
    <>
    <BrowserRouter>
    <Browser/>
    <Routes>
    <Route path="notifications" element={<Notifications/>}/>
    <Route path="/" element={<Landing/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

function Browser(){
  const navigate = useNavigate();
  return (
  <div style={{backgroundColor: 'beige', color: 'brown', padding: 10}}> 
<button style={{backgroundColor: 'brown', color: 'beige', padding: 10, margin:2}}
 onClick={()=>{
  navigate('/');
}}>Home</button>
<button style={{backgroundColor: 'brown', color: 'beige', padding: 10, margin:2}}
onClick={()=>{
  navigate('/notifications');
}}>Notifications</button>
  </div>
  );
}
export default App
