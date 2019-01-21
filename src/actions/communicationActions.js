import {actions as c} from '../lib/actions'

export const cr_setUserComplaintFetched = (id, bool) =>{
    return {
        type: c.setUserComplaintFetched,
        id,
        bool
    }
}

export const cr_setComplaintNoteFetched = (complaintId, bool)=>({
    type: c.setComplaintNoteFetched,
    complaintId,
    bool
})

export const cr_setUserRegistered = (id, bool)=>({
    type: c.setUserRegistered,
    id,
    bool
})

export const cr_setCurrentUserId = id =>({
    type: c.setCurrentUserId,
    id
})