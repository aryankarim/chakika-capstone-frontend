const discountReducer = (state = [], action) => {
    switch (action.type) {

        case 'FETCH_DISCOUNT_SUCCESSFUL':
            state = action.payload
            return state;

        case 'LOADING_FOR_DISCOUNT_ITEMS':
            state = []
            return state;

        default:
            return state;
    }
}

export default discountReducer;