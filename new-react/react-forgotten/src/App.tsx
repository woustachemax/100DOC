import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  const updateCount = (newCount: number) => {
    setCount(newCount);
    setHistory([...history, newCount]); 
  };

  return (
    <>
      <h1>Counter: {count}</h1>

      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.valueAsNumber || 0)} 
      /> 
      
      <br /> <button onClick={() => updateCount(count + inputValue)}>Increase</button> 
      <br /> <button onClick={() => updateCount(count - inputValue)}>Decrease</button> 
      <br /> <button onClick={() => updateCount(0)}>Reset</button> 

      <Checker count={count} />
      <CountRenderer history={history} />
    </>
  );
}

interface CheckerProps {
  count: number;
}

const Checker: React.FC<CheckerProps> = ({ count }) => {
  return (
    <h3 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>
      {count > 0 
        ? "The number is positive" 
        : count < 0 
          ? "The number is negative" 
          : "The number is neither positive nor negative"}
    </h3>
  );
};

interface CountRendererProps {
  history: number[];
}

const CountRenderer: React.FC<CountRendererProps> = ({ history }) => {
  return (
    <div>
      <h3>Count History:</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
