import React, { useState } from 'react';
import axios from 'axios'
import SearchFun from './SearchFun'

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
  function searchDb() {
    axios
      .get('http://localhost:8000/search', {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Chakika_token"),
        },
        params: searchState
      })
      .then(response => {
        console.log(response);
        setResultState(prevstate => response.data)
        console.log("search response success");
      })
      .catch(error => {
        setResultState(prevstate => [])
        console.log("no item found", error)
      })

  }
  return (
    <div>
      <div className="contact">
        <h3>Search For Your Need</h3>
        <div className="contact-input">
          <input type="text" placeholder="Search Here ..." name="search" value={searchState.search} onChange={handleChange} />
          <button onClick={searchDb} >Search</button>
        </div>
      </div>
      <SearchFun searchResult={resultState} />
    </div>
  );
}

export default SearchSection;
