import './App.css'
import Bike from './Component/Transport/Bike'
import Car from './Component/Transport/Car'
import Truck from './Component/Transport/Truck'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import BmiCalculator from './Component/BmiCalculator/BmiCalculator.jsx'
import NavBar from './Component/Transport/NavBar.jsx'
function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path='/' element={<Car />} />
        <Route path='/car' element={<Car />} />
        <Route path='/truck' element={<Truck />} />
        <Route path='/bike' element={<Bike />} />
      </Routes>

    </Router>

//<div className="App">
  ///    <BmiCalculator />
    //</div>
  );
}

export default App
