import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
const LabelledInput =(props) =>{
    return(
        <InputGroup  size='sm'>
            <InputGroup.Prepend>
                <InputGroup.Text style={{width: '100px'}}>{props.label}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl size='sm' as={props.as? props.as:'input'}
                placeholder={props.placeholder ? props.placeholder : ''}
            />
        </InputGroup>
    )
}

export default LabelledInput