import './App.css';
import taxAndNetIncome from './taxCalculator.js'
import React, {useState} from 'react'

function App() {
  const [salary, setSalary] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <p aria-label='rendered-message'>the tax you paid on your salary of £{salary} is £{taxAndNetIncome(salary).tax}, putting your net salary to £{taxAndNetIncome(salary).netSalary} </p>
      <input aria-label='input-box' type="number" min="0" onChange={(event) => setSalary(event.target.value)}></input>
      </header>
    </div>
  );
}

export default App;
