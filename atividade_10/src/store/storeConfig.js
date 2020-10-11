import { createStore, combineReducers } from 'redux'
import vnumber1Reducer from './reducers/vnumber1'
import vnumber2Reducer from './reducers/vnumber2'
const reducers = combineReducers(
    {
        vnumber1: vnumber1Reducer,
        vnumber2: vnumber2Reducer
    }//Os Reducers
)//Combine Reducers


function storeConfig() {
    return createStore(reducers)
}

export default storeConfig