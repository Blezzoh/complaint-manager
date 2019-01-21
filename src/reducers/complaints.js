import {actions as c} from '../lib/actions'

export const complaints =(state ={}, action) =>{
    switch(action.type){
        case c.setComplaint:
            return {...state, [action.complaintId]: action.data}
        default:
            return state
    }
}

