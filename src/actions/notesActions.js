import {actions as c} from '../lib/actions'
import {baseUrl} from '../lib/data'
import axios from 'axios'
import { cr_setError } from './errorsAction';
import { cr_setComplaintNote } from './complaintsAction';

export const cr_getComplaintNotes = (complaintId) =>{
    return dispatch =>{
        axios.get(`${baseUrl}/complaints/${complaintId}/notes`)
            .then(
                success =>{
                    const data = success.data
                    for (const note of data) {
                        dispatch(cr_setNote(note.noteId), note)
                        dispatch(cr_setComplaintNote(complaintId, note.noteId))
                    }
                }
            )
            .catch(
                err => dispatch(cr_setError(err))
            )
    }
}

export const getNote = noteId => axios.get(`${baseUrl}/note/${noteId}`)

export const cr_postComplaintNote = (complaintId, params) =>{
    return dispatch =>{
        axios.post(`${baseUrl}/complaints/${complaintId}/notes`, params)
            .then(
                success =>{
                    const status = success.status
                    if(status>= 200 && status <300){
                        const noteId = success.data.noteId
                        getNote(noteId).then(
                            response => {
                                dispatch(cr_setNote(noteId,response.data ))
                                dispatch(cr_setComplaintNote(complaintId, noteId))
                            }
                        )
                    }
                }
            )
            .catch(
                err => dispatch(cr_setError(err))
            )
    }
}

export const cr_setNote = (noteId, data) =>({
    type: c.setNote,
    noteId,
    data
})

