import React, {useState} from 'react'
import GarageSelect from './GarageSelect'


export default function GarageSection() {
  const [garageSelectionState, setGarageSelectionState] = useState([< GarageSelect/>])
  function nextCar(){
      setGarageSelectionState(prevState => ([...prevState,< GarageSelect/>]))
  }
  console.log(garageSelectionState.length);
  return (
    <div>
      <h1 className="garage-heading">Welcome To Your Garage</h1>
          {garageSelectionState.map(((key,index)=>
            garageSelectionState[index]
        ))}

        {garageSelectionState.length<5 ?<button class="plus-grid" onClick={nextCar}>More</button>: <p className="paragraph-grid"> You can not add more than 5 cars</p>}
    </div>
  )
}
