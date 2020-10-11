import {New_Number1} from '../actions/type'
const initialState ={
    number1:0
}

export default function(state = initialState, action) {
    console.log('acionado1')
    if(action.type===New_Number1) {
        return {
            number1: action.payload
        }
    }
    else return {...state}
}