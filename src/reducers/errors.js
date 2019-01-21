import {actions as c} from '../lib/actions'


export const errors = (state={}, action)=>{
    switch (action.type) {
        case c.setError:
            return {...state, [action.time]: action.error}
        default:
            return state
    }
}