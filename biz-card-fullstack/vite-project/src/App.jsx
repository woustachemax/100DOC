import { useState } from 'react';
import './App.css';

function App() {
const [list, SetList]=useState([{
  name: 'Mushrooms',
  quantity: 1
},{
  name: 'milk',
  quantity: 1
}])
const [newList, SetNewList]=useState();



  return(
    <div>
    <input type="text" placeholder='item-name' />
    <input type="int" placeholder='item-quantity' />
    <button onClick={AddItem}>Add the Item</button></div>
  )

}

function DisplayItems(list){
  <div>
    <h3>list.[name]</h3>
    <h3>list.[quantity]</h3>
  </div>

}
export default App;
