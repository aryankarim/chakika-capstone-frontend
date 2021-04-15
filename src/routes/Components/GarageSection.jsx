import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GarageSelect from './GarageSelect'




export default function GarageSection() {

  const [brandState, setbrandState] = useState([])
  const [modelState, setmodelState] = useState([])
  const [yearState, setyearState] = useState([])
  const [garageSelectionState, setGarageSelectionState] = useState([])

  function nextCar() {
    setGarageSelectionState(prevState => ([...prevState, < GarageSelect brand={brandState} model={modelState} year={yearState} />]))
  }


  useEffect(() => {
    axios
      .get('http://localhost:8000/category/categories', {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Chakika_token"),
        }
      })
      .then(response => {
        setbrandState(prevState => response.data.message.brands)
        setmodelState(prevState => response.data.message.models)
        setyearState(prevState => response.data.message.years)
      })
      .catch(error => {
        console.log("err occured");
      })
  }, [])


  return (
    <div>
      <h1 className="garage-heading">Welcome To Your Garage</h1>
      < GarageSelect brand={brandState} model={modelState} year={yearState} />
      {garageSelectionState.map(((key, index) =>
        garageSelectionState[index]
      ))}

      {garageSelectionState.length < 4 ? <button class="plus-grid" onClick={nextCar}>More</button> : <p className="paragraph-grid"> You can not add more than 5 cars</p>}
    </div>
  )
}
