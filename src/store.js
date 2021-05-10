import { applyMiddleware, createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import thunk from 'redux-thunk'



const reducers = combineReducers({ cartReducer });


const store = createStore(reducers, applyMiddleware(thunk))


export default store;