import {actions as c} from '../lib/actions'

const newNoteArray =(state={}, action) =>{
    if(state[action.complaintId]){
        return [...state[action.complaintId], action.noteId]
    }
    return [action.noteId]
}
export const complaintsNotes = (state={},action)=>{
    switch(action.type){
        case c.setComplaintNote:
            return {...state,[action.complaintId]: newNoteArray(state,action) }
        default:
            return state
    }
}