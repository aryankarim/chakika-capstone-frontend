import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GarageSelect from './GarageSelect'




export default function GarageSection() {

  const [brandState, setbrandState] = useState([])
  const [modelState, setmodelState] = useState([])
  const [yearState, setyearState] = useState([])
  const [garageCarsState, setgarageCarsState] = useState([])
  // const [garageSelectionState, setGarageSelectionState] = useState([])

  function nextCar(items) {
    //setGarageSelectionState(prevState => ([...prevState, < GarageSelect brand={brandState} model={modelState} year={yearState} saved={garageCarsState[counter]} />]))
    return (< GarageSelect brand={brandState} model={modelState} year={yearState} saved={items} />)
  }


  useEffect(() => {
    function getDatas() {

      axios
        .get('http://localhost:8000/category/categories', {
          headers: {
            authorization: "Bearer " + localStorage.getItem("Chakika_token"),
          }
        }).then(response => {
          setbrandState(prevState => response.data.message.brands)
          setmodelState(prevState => response.data.message.models)
          setyearState(prevState => response.data.message.years)
        })
        .catch(error => {
          console.log("err occured");
        })

      axios
        .get('http://localhost:8000/category/garagecars', {
          headers: {
            authorization: "Bearer " + localStorage.getItem("Chakika_token"),
          }
        }).then(response => {
          setgarageCarsState(prevState => response.data.message)
        })
        .catch(error => {
          console.log("err occured in useeffect garagesection function");
        })

    }
    getDatas();

  }, [])
  //console.log(garageCarsState);
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
