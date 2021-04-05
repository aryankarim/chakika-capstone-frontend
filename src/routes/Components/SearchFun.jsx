import React from 'react'

const SearchFun = (props) => {

    const listItems = props.searchResult.map((item, index) =>
        <div className="card" key={index}>
            <div className="card_img">
                <img src="http://pngimg.com/uploads/car_wheel/car_wheel_PNG23321.png" alt='' />
            </div>

            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.brand_name}</p>
                <p>{item.model_name}</p>
                {/* <p>available in {item.storeCount}</p> */}
                {/* <p className="price">30<span>$</span></p> */}
                <button className="btn">Add to Cart</button>
            </div>
        </div>
    );

    console.log(props.searchResult);

    return (
        <div className="main_content">
            {listItems}
        </div>
    )
}

export default SearchFun;