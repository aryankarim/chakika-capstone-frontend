import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SearchFun from './SearchFun'
import makeToast from "../../Toaster"

export default function GarageSelect(props) {

  const [categorySearchState, setcategorySearchState] = useState({})
  const [resultState, setResultState] = useState([])
  const [savedCarState, setsavedCarState] = useState(false)

  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    if (name === "brand") {
      if (value !== categorySearchState.brand) {
        removeCar();
      }
    }
    if (name === "model" || name === "year") {
      if (value !== categorySearchState.model) {
        removeCar();
      }
    }
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
    axios
      .get('https://blooming-citadel-16531.herokuapp.com/category/results', {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Chakika_token"),
        },
        params: categorySearchState
      })
      .then(response => {
        setResultState(prevState => response.data.message)
      })
      .catch(error => {
        if(error && error.response && error.response.data && error.response.data.message){
          makeToast("error", error.response.data.message)
        }
      })
  }

  const saveCar = () => {
    axios
      .put('https://blooming-citadel-16531.herokuapp.com/category/save', { brand: categorySearchState.brand, model: categorySearchState.model }
        , {
          headers: {
            authorization: "Bearer " + localStorage.getItem("Chakika_token"),
          },
        })
      .then(response => {
        setsavedCarState(prevState => true)
      })
      .catch(error => {
      })
  }
  const removeCar = () => {
    if (savedCarState) {
      axios
        .delete('https://blooming-citadel-16531.herokuapp.com/category/delete',
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("Chakika_token"),
            },
            data: { brand: categorySearchState.brand, model: categorySearchState.model }

          }
        )
        .then(response => {
          setsavedCarState(prevState => false)
        })
        .catch(error => {

        })
    }
  }
  useEffect(() => {
    if (props.saved) {
      setcategorySearchState(prevState => {
        return ({
          brand: props.saved.brand_id + "@#" + props.saved.brand_name,
          model: props.saved.model_id + '@#' + props.saved.model_name,
          year: props.saved.model_year + ''
        })
      })
    }
  }, [props.saved])

  useEffect(() => {
    if (props.saved.brand_id !== null) {
      setsavedCarState(prev => !prev)
    }
  }, [props.saved.brand_id])

  //console.log(categorySearchState);
  return (
    <div>
      <div className="grid-container">
        <div className="option-grid">
          {savedCarState ? <button className="grid-row-btn" onClick={removeCar}>remove</button> : <button className="grid-row-btn" onClick={saveCar}>Save</button>}
        </div>
        <div className="option-grid">
          <select className="select-grid" name="brand" onChange={handleChange}>
            <option selected disabled>BRAND</option>
            {props.brand.map((items, index) => {
              if (props.saved && props.saved.brand_id === items.brand_id) {
                return (<option value={items.brand_id + "@#" + items.brand_name} key={items.brand_id} selected>{items.brand_name}</option>)
              } else
                return (<option value={items.brand_id + "@#" + items.brand_name} key={items.brand_id}>{items.brand_name}</option>)
            })}
          </select>
        </div>
        <div className="option-grid">
          <select className="select-grid" name="model" onChange={handleChange}>
            <option selected disabled>MODEL</option>
            {props.model.map((items, index) => {
              if (props.saved && props.saved.model_id === items.model_id) {
                return (<option value={items.model_id + "@#" + items.model_name} key={items.model_id} selected>{items.model_name}</option>)
              } else
                return (<option value={items.model_id + "@#" + items.model_name} key={items.model_id}>{items.model_name}</option>)
            })}
          </select>
        </div>
        <div className="option-grid">
          <select className="select-grid" name="year" onChange={handleChange}>
            <option selected disabled>YEAR</option>
            {props.year.map((items, index) => {
              if (props.saved && props.saved.model_year === items.model_year) {
                return (<option value={items.model_year} key={index} selected>{items.model_year}</option>)
              } else
                return (<option value={items.model_year} key={index}>{items.model_year}</option>)
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
