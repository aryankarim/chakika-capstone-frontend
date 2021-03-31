import React from 'react';

function SearchSection() {
  return (
    <div className="contact">
      <h3>Search For Your Need</h3>
      <div className="contact-input">
        <input type="text" placeholder="Search Here ..." name="search" />
        <button onClick={() => { }} >Search</button>
        {/* <a href="#">Search</a> */}
      </div>
    </div>
  );
}

export default SearchSection;
