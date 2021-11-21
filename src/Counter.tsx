import React,{useState} from 'react'
import './App.css'

const Counter = () => {
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
        <div>
            <h1 className="counter">Counter: {counter}</h1>
            <button className="button" onClick={increment}>Increse Count</button>
            <button className="button" onClick={decrement}>Decrease Count</button>
        </div>
    )
}

export default Counter
