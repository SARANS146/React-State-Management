import React from 'react'
import BmiCalculator from './BmiCalculator';
import weightImage from './assets/weight.png';

function App() {
  return (
    <div className="app-container">

      <h1>Health & Fitness</h1>

      <img 
        src={weightImage} 
        alt="Weight Illustration"
        className="header-image"
      />

    </div>
  )
}

export default App;