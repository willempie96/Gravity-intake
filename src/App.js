import { useState, useEffect } from 'react';
import './App.css';
import Cars from './components/Cars';
import Button from './components/Button';

const App = () => {
  const [vehicles, setVehicles] = useState([])
  const [manufacturedAtButtonState, setManufacturedAtButtonState] = useState(
    {
      active: true,
      asc: true
    }
  );
  const [priceButtonState, setPriceButtonState] = useState(
    {
      active: false,
      asc: false
    }
  );

  const sortVehiclesByManufacturingDate = (asc) => {
    if(asc){
      setVehicles(vehicles.sort((a, b) => a.manufactured_at - b.manufactured_at))
    }
    else{
      setVehicles(vehicles.sort((a, b) => b.manufactured_at - a.manufactured_at))
    }  
  }

  const sortVehiclesByPrice = (asc) => {
    if(asc){
      setVehicles(vehicles.sort((a, b) => a.price - b.price))
    }
    else{
      setVehicles(vehicles.sort((a, b) => b.price - a.price))
    }  
  }


  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars()
      setVehicles(carsFromServer.vehicles.sort((a, b) => a.manufactured_at - b.manufactured_at))
      console.log(carsFromServer.vehicles)
    }
    getCars()
  }, [])

  // fetch cars from gravity API
  const fetchCars = async () => {
    const res = await fetch('https://gravity.nl/intake/api.php')
    const data = await res.json()

    return data
  }

  const manufacturedAtButtonClicked = () => {
    if(!manufacturedAtButtonState.active){
      setPriceButtonState({...priceButtonState, active: false})
      setManufacturedAtButtonState({...manufacturedAtButtonState, active: true})
      sortVehiclesByManufacturingDate(manufacturedAtButtonState.asc)
    }
    else{
      sortVehiclesByManufacturingDate(!manufacturedAtButtonState.asc)
      setManufacturedAtButtonState({...manufacturedAtButtonState, asc: !manufacturedAtButtonState.asc})
    }
  }

  const priceButtonClicked = () => {
    if(!priceButtonState.active){
      setManufacturedAtButtonState({...manufacturedAtButtonState, active: false})
      setPriceButtonState({...priceButtonState, active: true})
      sortVehiclesByPrice(priceButtonState.asc)
    }
    else{
      sortVehiclesByPrice(!priceButtonState.asc)
      setPriceButtonState({...priceButtonState, asc: !priceButtonState.asc})
    }
  }



  return (
    <div className="App">
        <h1> Wagenpark </h1>
        <div className="buttonHolder">
          <Button state = {manufacturedAtButtonState} text= "manufactured_at" onClick={manufacturedAtButtonClicked}/>
          <Button state = {priceButtonState} text= "price" onClick={priceButtonClicked}/> </div>
        
        <Cars cars = {vehicles}/>
    </div>
  );
}

export default App;
