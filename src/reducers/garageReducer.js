const garageReducer = (state = { brands: [], models: [], years: [] }, action) => {
    switch (action.type) {

        case 'FETCH_GARAGE_SUCCESSFUL':
            state = action.payload
            return state;

        case 'LOADING_FOR_GARAGE_ITEMS':
            return state;

        default:
            return state;
    }
}

export default garageReducer;