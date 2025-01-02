import { useState } from 'react';
import './App.css';


function App() { 
  return <div>
  <CardWrapper>
    <div>
    hi there
    </div>
  </CardWrapper>
  <CardWrapper>
    <div>
    helolo there
    </div>
  </CardWrapper>
  </div>
}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 20, margin: 20} }>
    {children}
  </div>
}

export default App;
