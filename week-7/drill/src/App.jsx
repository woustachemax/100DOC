import { useState } from "react";
import { contexter } from "./context"; 
import { useContext } from "react";
import { countAtom } from "./store/atoms/count";

function App() {

  return (
    <div>
      
    </div>
  );
}

function Count( ) {
  console.log("count re-rendered")
  return (
    <div>
      <CountRenderer />
      <Buttons  />
    </div>
  );
}

function CountRenderer() {
  const count = 0
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = 0

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1); 
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1); 
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
