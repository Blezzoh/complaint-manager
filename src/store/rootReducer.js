import { combineReducers } from "redux";
import {complaints} from '../reducers/complaints'
import { users } from "../reducers/users";
import { userComplaints } from "../reducers/userComplaints";
import { complaintsNotes } from "../reducers/complaintsNotes";
import { notes } from "../reducers/notes";
import { errors } from "../reducers/errors";
import { communication} from '../reducers/communication'

export const rootReducer =combineReducers({
    complaints,
    complaintsNotes,
    users,
    userComplaints,
    notes,
    errors,
    communication
})