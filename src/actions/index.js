export const addToCartAction = (productObj) => ({ type: "ADD_TO_CART", payload: productObj })

export const removeFromCart = (productObj) => ({ type: "REMOVE_FROM_CART", payload: productObj })

export const increment = (id) => ({ type: "INCREMENT", payload: id })

export const decrement = (id) => ({ type: "DECREMENT", payload: id })

export const deleteCart = () => ({ type: "DELETE_CART" })

export const fetchCartSuccessful = (retrivedData) => ({ type: "FETCH_CART_SUCCESSFUL", payload: retrivedData })

export const loadingForCartItems = () => ({ type: "LOADING_FOR_CART_ITEMS" })

export const loadForDiscountFetch = () => ({ type: "LOADING_FOR_DISCOUNT_ITEMS" })

export const fetchDiscountSuccessful = (retrivedData) => ({ type: "FETCH_DISCOUNT_SUCCESSFUL", payload: retrivedData })

export const loadForGarageFetch = () => ({ type: "LOADING_FOR_GARAGE_ITEMS" })

export const fetchGarageSuccessful = (retrivedData) => ({ type: "FETCH_GARAGE_SUCCESSFUL", payload: retrivedData })

