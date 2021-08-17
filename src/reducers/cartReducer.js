const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => {
                if (item.product_id === action.payload) {
                    return false;
                }
                return true;
            })

        case 'DELETE_CART':
            return [];

        case 'FETCH_CART_SUCCESSFUL':
            state = action.payload
            return state;

        case 'LOADING_FOR_CART_ITEMS':
            state = ['loading']
            return state;

        case 'INCREMENT':
            console.log(state);
            return state.map((item) => {
                if (item.product_id === action.payload) {

                    if (item.quantity === 20) {
                        return { ...item }
                    }
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })

        case 'DECREMENT':
            return state.map((item) => {
                if (item.product_id === action.payload) {
                    if (item.quantity === 1) {
                        return { ...item }
                    }
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            })

        default:
            return state;
    }
}

export default cartReducer;