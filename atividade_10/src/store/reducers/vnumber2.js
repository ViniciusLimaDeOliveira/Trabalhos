import {New_Number2} from '../actions/type'
const initialState ={
    number2:0
}



export default function (state=initialState, action) {

    if(action.type===New_Number2) {
        return {
            number2: action.payload
        }
    }
    else return {...state}
}