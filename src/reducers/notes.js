import {actions as c} from '../lib/actions'


export const notes = (state={}, action)=>{
    switch(action.type){
        case c.setNote:
            return {...state, [action.noteId]: action.data}
        default:    
            return state
    }
}