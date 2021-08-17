import React, { useState } from 'react';
import axios from 'axios'
import SearchFun from './SearchFun'
import makeToast from '../../Toaster';

function SearchSection() {

  const [searchState, setSearchState] = useState({ search: '' })
  const [resultState, setResultState] = useState([])


  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    setSearchState(prevSearchState => {
      return ({
        ...prevSearchState,
        [name]: value
      })
    });
    console.log(searchState);
  }

  function searchDb(e) {
    e.preventDefault();

    if (searchState.search === '') {
      makeToast("error", "fields cannot be empty!")
      return
    }
    axios
      .get('http://localhost:8000/search', {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Chakika_token"),
        },
        params: searchState
      })
      .then(response => {
        setResultState(prevstate => response.data)
        console.log(response.data);
        document.getElementById('search-result').innerHTML = " &nbsp; showing the result of: " + searchState.search;

      })
      .catch(error => {
        setResultState(prevstate => [])
        document.getElementById('search-result').innerHTML = " &nbsp; no item was found for: " + searchState.search;

      })

  }
  return (
    <div>
      <div className="search-header">
        <h3>Search For Your Need</h3>
        <div className="search-input">
          <input type="text" placeholder="Search Here ..." name="search" value={searchState.search} onChange={handleChange} />
          <button onClick={searchDb} >Search</button>
        </div>
      </div>
      <p id="search-result"> </p>
      <SearchFun searchResult={resultState} />
    </div>
  );
}

export default SearchSection;
