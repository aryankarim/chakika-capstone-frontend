import { applyMiddleware, createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import discountReducer from './reducers/discountReducer'
import garageReducer from './reducers/garageReducer'
import thunk from 'redux-thunk'




const reducers = combineReducers({ cartReducer, discountReducer, garageReducer });


const store = createStore(reducers, applyMiddleware(thunk))


export default store;