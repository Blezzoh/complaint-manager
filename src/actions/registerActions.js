import {baseUrl} from '../lib/data'
import axios from 'axios'
import { cr_setError } from './errorsAction';

export const cr_postRegister = (params)=>{
    return dispatch =>{
        axios.post(`${baseUrl}/register/`,params)
            .then(success =>{
                const status = success.status 
                if(status>= 200 && status <300){
                    console.log('registered')
                }
            })
            .catch(err => dispatch(cr_setError(err)))
    }
}