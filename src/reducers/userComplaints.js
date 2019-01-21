import {actions as c} from '../lib/actions'

const newComplaintArray =(state={}, action) =>{
    if(state[action.id]){
        return [...state[action.id], action.complaintId]
    }
    return [action.complaintId]
}
export const userComplaints = (state={}, action) =>{
    switch(action.type){
        case c.setUserComplaint:
            return {...state, [action.id]: newComplaintArray(state, action)}
        default:
            return state
    }
}