import {actions as c } from '../lib/actions'

export const now = () =>{
    const d = new Date()
    return `${d.getMonth() + 1}/${d.getDate()}, ${d.getHours}:${d.getMinutes}`
}

export const cr_setError = error =>({
    type: c.setError,
    error,
    time: now()
})