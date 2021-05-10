import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increment, decrement } from '../../actions'
import axios from 'axios'
import makeToast from '../../Toaster';




export default function Cart() {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cartReducer);


    const removeCartItem = (product_id) => {

        axios
            .delete('http://localhost:8000/cart/remove',
                {
                    headers: {
                        authorization: "Bearer " + localStorage.getItem("Chakika_token"),
                    },
                    data: { product_id }
                }
            )
            .then(response => {
                dispatch(removeFromCart(product_id))
                makeToast("success", "Item removed")
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            })
    }
    const listCartItems = cartItem.map((item) =>

        <tbody key={item.product_id}>

            <tr className="cart-item" key={item.product_id}>

                <td className="cart-item-name">
                    <h3> {item.product_name} <button onClick={() => { removeCartItem(item.product_id) }} className="cart-item-remove">(Remove)</button> </h3>
                </td>

                <td>
                    <img alt="" className="cart-item-img" src="http://pngimg.com/uploads/car_wheel/car_wheel_PNG23321.png"></img>
                </td>

                <td className="cart-item-price">
                    <div>${item.price}</div>
                </td>

                <td className="cart-item-quantity">
                    <div>
                        <button className="number-button" onClick={() => { dispatch(decrement(item.product_id)) }}>-</button>
                        <h6 className="cart-item-quantity-input">{item.quantity}</h6>
                        <button className="number-button" onClick={() => { dispatch(increment(item.product_id)) }}>+</button>
                    </div>
                </td>

                <td className="cart-item-total">
                    <h3>${item.price * item.quantity}</h3>
                </td>

            </tr>


        </tbody>

    );


    if (cartItem[0] === 'loading') {
        return (<div className="loader"></div>)
    }
    return (
        <div>
            <h2 className="cart-header">Your Cart</h2>
            <div className="cart-container">
                <table className="cart-table">
                    <thead className="cart-table-head">
                        <th className="cart-table-heading">Product</th>
                        <th className="cart-table-heading">&nbsp;</th>
                        <th className="cart-table-heading">Price</th>
                        <th className="cart-table-heading">Quantity</th>
                        <th className="cart-table-heading">Total</th>
                    </thead>
                    {listCartItems}
                </table>

                <div className="cart-bottom">
                    <button className="cart-bottom-btn">
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}
