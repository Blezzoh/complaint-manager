export const initialState ={
    users:{},
    complaints:{},
    notes:{},
    userComplaints:{},
    complaintNotes:{},
    /**communication */
    communication:{
        currentUserId: -1,
        userComplaintsFetched:{},
        complaintNotesFetched:{},
        userRegistered:{}
    },
    errors: {}
}