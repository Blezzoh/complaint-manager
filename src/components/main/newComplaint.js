import React from 'react'
import LabelledInput from '../useful/labelledInput';
import {Button} from 'react-bootstrap'
const labels = ['Complaint #', 'Full Name', 'Address', 'Tel #', 'Email', 'Product', 'Brand', 'Model',
                'Model', 'Serial #', 'Assigned To', 'Details', 'Note']
const NewComplaint = ()=>{
    return (
        <div>
        {
            labels.map(
                (label, i)=>{
                    if (label === 'Details' || label === 'Note'){
                        return <LabelledInput label={label} placeholder={label} as={'textarea'} key={i}/>
                    }
                    return <LabelledInput label={label} key={i}/>
                }
            )
        }
        <Button style={{marginTop: '15px', width: '80px', textAlign: 'center'}} >ADD</Button>
        </div>
    )
}
export default NewComplaint