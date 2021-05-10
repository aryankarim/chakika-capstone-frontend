export const addToCartAction = (productObj) => ({ type: "ADD_TO_CART", payload: productObj })

export const removeFromCart = (productObj) => ({ type: "REMOVE_FROM_CART", payload: productObj })

export const increment = (id) => ({ type: "INCREMENT", payload: id })

export const decrement = (id) => ({ type: "DECREMENT", payload: id })

export const deleteCart = () => ({ type: "DELETE_CART" })

export const fetchCartSuccessful = (retrivedData) => ({ type: "FETCH_CART_SUCCESSFUL", payload: retrivedData })

export const loadingForCartItems = () => ({ type: "LOADING_FOR_CART_ITEMS" })

