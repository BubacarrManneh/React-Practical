import React,{useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
     // The same as above
     setCounter((prev) => prev + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
    // The same as above
    setCounter((prev) => prev - 1)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>Increse Count</button>
      <button onClick={decrement}>Decrease Count</button>
    </div>
  );
}

export default App;
