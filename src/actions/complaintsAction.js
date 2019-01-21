import {actions as c } from '../lib/actions'
import {baseUrl} from '../lib/data'
import axios from 'axios'
import { cr_setError } from './errorsAction';
import { cr_setUserComplaint } from './userActions';

export const cr_getUserComplaint = id =>{
    return dispatch =>{
        axios.get(`${baseUrl}/${id}/complaints`)
            .then(
                success =>{
                    const data = success.data
                    for (const complaint of data) {
                        dispatch(cr_setComplaint(complaint.complaintId, complaint))
                        dispatch(cr_setUserComplaint(id, complaintId))
                    }

                }
            )
            .catch(
                err => dispatch(cr_setError(err))
            )
    }
}

export const cr_getComplaints = (params) =>{
    return dispatch =>{
        axios.get(`${baseUrl}/complaints`, params)
            .then(
                success=>{
                    const data = success.data
                    for (const complaint of data) {
                        dispatch(cr_setComplaint(complaint.complaintId, complaint))
                    }
                }
            )
    }
}
export const cr_setComplaint = (complaintId, data) =>({
    type: c.setComplaint,
    complaintId,
    data
})

export const cr_setComplaintNote = (complaintId, noteId) =>({
    type: c.setComplaintNote,
    noteId,
    complaintId
})

