import React from 'react'

export default function GarageSelect() {
  return (
    <div>
      
      <div className="grid-container">

          <div className="option-grid">
          <select className="select-grid">
            <option  value="Nissan">Brand</option>
            <option  value="Nissan">Nissan</option>
          </select>
          </div>
          <div className="option-grid">
          <select className="select-grid">
            <option  value="Nissan">Model</option>
          </select>
          </div>
          <div className="option-grid">
          <select className="select-grid">
            <option  value="Nissan">Year</option>
          </select>
          </div>
          <div className="option-grid">
          <select className="select-grid">
            <option  value="Nissan">Search By Category</option>
          </select>
          </div>
      </div>

    </div>
  )
}
