import React from 'react'
import makeToast from "../../Toaster";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartAction } from '../../actions'

const SearchFun = (props) => {

    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cartReducer);

    const listItems = props.searchResult.map((item, index) =>
        <div className="search-result" key={index}>
            <div className="search-result-img">
                <img src="http://pngimg.com/uploads/car_wheel/car_wheel_PNG23321.png" alt='' />
            </div>

            <div className="search-result-header">
                <h2>{item.product_name}</h2>
                <p>{item.brand_name + " " + item.model_name + " " + item.model_year}</p>
                <p>available in {item.store_name}</p>
                <p className="price">{item.unit_price}<span>$</span>{item.discount_rate !== 0 ? <span className="discount-rate">&nbsp;-%{Math.round(item.discount_rate * 10000) / 100}&nbsp;</span> : ''}</p>
                {item.stock_quantity === 0 ? <button className="slider-btn-out">Out of Stock</button> : <button className="search-result-btn" onClick={() => addToCart(item.product_id, (1 - item.discount_rate) * item.unit_price, item.product_name)}>Add to Cart</button>}

            </div>
        </div>
    );

    function addToCart(product_id, price, product_name) {
        price = Math.round(price * 100) / 100;
        if (cartItem.map(function (item) { return item.product_id; }).indexOf(product_id) > -1) {
            makeToast("error", "item already in the cart")
            return
        }
        const config = {
            headers: {
                authorization: "Bearer " + localStorage.getItem("Chakika_token"),
            }
        };
        axios
            .post('https://blooming-citadel-16531.herokuapp.com/cart/add', { productId: product_id, productPrice: price }, config)
            .then(response => {
                if(response && response.data && response.data.message){
                    makeToast("success", response.data.message)
                    dispatch(addToCartAction({ product_id, product_name, price, quantity: 1, total: price }))
                }
            })
            .catch(error => {
                if(error && error.response && error.response.data && error.response.data.message){
                    makeToast("error", error.response.data.message)
                }
                console.log(error)
            })
    }

    return (
        <div className="search-display">
            {listItems}
        </div>
    )
}

export default SearchFun;