import React, { useState, useEffect } from 'react'
import GarageSelect from './GarageSelect'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function GarageSection() {

  const brandState = useSelector(state => state.garageReducer.brands)
  const modelState = useSelector(state => state.garageReducer.models)
  const yearState = useSelector(state => state.garageReducer.years)
  const [garageCarsState, setgarageCarsState] = useState([])

  function nextCar(items) {
    return (< GarageSelect brand={brandState} model={modelState} year={yearState} saved={items} />)
  }


  useEffect(() => {
    function getDatas() {
      axios
        .get('https://blooming-citadel-16531.herokuapp.com/category/garagecars', {
          headers: {
            authorization: "Bearer " + localStorage.getItem("Chakika_token"),
          }
        }).then(response => {
          setgarageCarsState(prevState => response.data.message)
        })
        .catch(error => {
          console.log("Server error");
        })

    }
    getDatas();

  }, [])

  function addCar() {
    setgarageCarsState(prevState => ([...prevState, {
      brand_id: null,
      brand_name: null,
      model_id: null,
      model_name: null,
      model_year: null,
      user_id: null
    }]))
  }

  return (
    <div>
      <h1 className="garage-heading">Welcome To Your Garage</h1>
      {garageCarsState.map(((items, index) =>
        nextCar(items)
      ))}

      {garageCarsState.length < 5 ? <button className="plus-grid" onClick={addCar}>Add Car</button> : <p className="paragraph-grid"> You can not add more than 5 cars</p>}
    </div>
  )
}
