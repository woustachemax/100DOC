import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cartItem, setCartItem] = useState([{
    name: apple,
    itemquantity: '1',
  },
{
  name: banana,
  itemquantity: '2',
},
{
  name: mosambi,
  itemquantity: '1'
}])




}

 function AddToQuantity(props){
  return <div>
    props.carti
  </div>
}


export default App
