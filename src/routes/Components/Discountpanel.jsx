import React from 'react';
import Slider from 'react-slick';
import tire1 from '../images/cp2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux'
import makeToast from "../../Toaster";
import axios from 'axios'
import { addToCartAction } from '../../actions'


export default function Discountpanel() {

    const discountedProducts = useSelector(state => state.discountReducer);
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cartReducer);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        arrow: true
    }

    function addToCart(product_id, price, product_name) {
        price = Math.round(price * 100) / 100;
        if (cartItem.map(function (item) { return item.product_id; }).indexOf(product_id) > -1) {
            makeToast("error", "item already in the cart")
            return
        }

        axios
            .post('https://blooming-citadel-16531.herokuapp.com/cart/add', { productId: product_id, productPrice: price }, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("Chakika_token"),
                }
            })
            .then(response => {
                makeToast("success", response.data.message)
                dispatch(addToCartAction({ product_id, product_name, price, quantity: 1, total: price }))
            })
            .catch(error => {
                makeToast("error", error.response.data.message)
                console.log("request not added", error)
            })
    }
    console.log(discountedProducts);
    return (
        <div>
            <h2 className="contact-header">Weekly discounts</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {discountedProducts.map((item) => {
                        return (
                            <div key={item.product_id}>

                                <div className="slider-text">
                                    <h2 >{item.product_name}</h2>
                                    <p className="home-header-details"><span className="initial-price">$ {item.unit_price}</span> &nbsp; Now just for<span className="newPrice"> ${Math.round((item.unit_price * (1 - item.discount_rate)) * 100) / 100}</span></p>
                                    <p>available in {item.store_name}</p>
                                    {item.stock_quantity === 0 ? <button className="slider-btn-out">Out of Stock</button> : <button className="slider-btn" onClick={() => addToCart(item.product_id, (1 - item.discount_rate) * item.unit_price, item.product_name)}>Add to Cart</button>}
                                </div>

                                <img width="40%" alt="" src={tire1} className="slider-img" />

                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}


