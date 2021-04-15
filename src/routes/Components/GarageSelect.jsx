import axios from 'axios'
import React, { useState } from 'react'
import SearchFun from './SearchFun'
import makeToast from "../../Toaster"

export default function GarageSelect(props) {

  const [categorySearchState, setcategorySearchState] = useState({})
  const [resultState, setResultState] = useState([])

  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    if (value === "") {
      value = null;
    }
    setcategorySearchState(prevState => {
      return ({
        ...prevState,
        [name]: value
      })
    });

  }

  const submitCategory = () => {
    console.log("sending");
    axios
      .get('http://localhost:8000/category/results', {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Chakika_token"),
        },
        params: categorySearchState
      })
      .then(response => {
        setResultState(prevState => response.data.message)
      })
      .catch(error => {
        makeToast("error", error.response.data.message)
        console.log(error, "err occured in garageselect");
      })
  }

  console.log(resultState);
  return (
    <div>
      <div className="grid-container">
        <div className="option-grid">
          <button className="grid-row-btn">Save Car</button>
        </div>
        <div className="option-grid">
          <select className="select-grid" name="brand" onChange={handleChange}>
            <option selected disabled>BRAND</option>
            {props.brand.map((items) => {
              return (<option value={items.brand_name}>{items.brand_name}</option>)
            })}
          </select>
        </div>
        <div className="option-grid">
          <select className="select-grid" name="model" onChange={handleChange}>
            <option selected disabled>MODEL</option>
            {props.model.map((items) => {
              return (<option value={items.model_name}>{items.model_name}</option>)
            })}
          </select>
        </div>
        <div className="option-grid">
          <select className="select-grid" name="year" onChange={handleChange}>
            <option selected disabled>YEAR</option>
            {props.year.map((items) => {
              return (<option value={items.model_year}>{items.model_year}</option>)
            })}
          </select>
        </div>
        <div className="option-grid">
          <select className="select-grid" name="category" onChange={handleChange}>
            <option selected disabled>Search By Category</option>
            <option value="interior">interior</option>
            <option value="exterior">exterior</option>
            <option value="wheels">wheels</option>
          </select>
        </div>
        <div className="option-grid">
          <button className="grid-row-btn" onClick={submitCategory}>Search</button>
        </div>
      </div>
      <SearchFun searchResult={resultState} />
    </div>
  )
}
