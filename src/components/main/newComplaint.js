import React, {Component} from 'react'
import LabelledInput from '../useful/labelledInput';

const labels = ['Complaint #', 'Full Name', 'Address', 'Tel #', 'Email', 'Product', 'Brand', 'Model',
                'Model', 'Serial #', 'Assigned To', 'Closed Details', 'Closed Remarks']
const NewComplaint = ()=>{
    return (
        <div>
        {
            labels.map(
                (label, i)=>{
                    if (label === 'Closed Details' || label === 'Closed Remarks'){
                        return <LabelledInput label={label} placeholder={label} as={'textarea'} />
                    }
                    return <LabelledInput label={label} />
                }
            )
        }
        </div>
    )
}
export default NewComplaint