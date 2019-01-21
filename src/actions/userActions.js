import {actions as c} from '../lib/actions'
import {baseUrl} from '../lib/data'
import axios from 'axios'
import { cr_setError } from './errorsAction';


export const cr_getUser = id =>{
    return dispatch =>{
        axios.get(`${baseUrl}/user/${id}`)
            .then(
                success => 
                    dispatch(cr_setUser(id, succedd.data))
            )
            .catch(
                err => dispatch(cr_setError(err))
            )
    }
}


export const cr_setUser = (id, data) =>({
    type:c.setUser,
    id,
    data
})

export const cr_setUserComplaint = (id, complaintId) =>({
    type:c.setUserComplaint,
    id,
    complaintId
})

