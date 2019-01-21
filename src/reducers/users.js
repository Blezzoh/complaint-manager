import {actions as c} from '../lib/actions'

export const users = (state={}, action) =>{
    switch(action.type){
        case c.setUser:
            return {...state, [action.id]: action.data}
        default:
            return state
    }   
}
