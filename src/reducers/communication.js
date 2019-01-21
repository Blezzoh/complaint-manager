import {actions as c} from '../lib/actions'
import { combineReducers } from 'redux';


const currentUserId = (state =-1, action) =>{
    switch(action.type){
        case c.setCurrentUserId:
            return action.id
        default:
            return state
    }
}

const userComplaintsFetched = (state ={}, action)=>{
    switch(action.type){
        case c.setUserComplaintFetched:
            return{ ...state, [action.id]: action.bool}  
        default:
            return state      
    }
}

const complaintNotesFetched = (state={}, action)=>{
    switch(action.type){
        case c.setComplaintNoteFetched:
            return {...state, [action.complaintId]: action.bool}
        default:
            return state
    }
}

const userRegistered= (state={},action)=>{
    switch(action.type){
        case c.setUserRegistered:
            return {...state, [action.id]: action.bool}
        default:
            return state        
    }
}

export const communication = combineReducers({currentUserId, userComplaintsFetched, userRegistered, complaintNotesFetched})