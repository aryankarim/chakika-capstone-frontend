import React from 'react'
import car_part from "./car_parts.js";

const SearchFun = () => {
    console.log(car_part);
    const listItems = car_part.map((item)=>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src="http://pngimg.com/uploads/car_wheel/car_wheel_PNG23321.png" />
            </div>

            <div className="card_header">
                <h2>{item.product_n}</h2>
                <p>{item.desc}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to Cart</div>
            </div>
        </div>
    );
    return(
        <div className="main_content">
            {listItems}
        </div>
    )
}

export default SearchFun;