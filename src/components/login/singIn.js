import React from 'react'
import {Row, Form, Button} from 'react-bootstrap'

const SignIn = () =>{
    return( 
        <Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address or Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email or username" size='sm'/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" size='sm'/>
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="remember me" size='sm'/>
                </Form.Group>
                <Button variant="primary" type="submit" size='sm'>
                    Submit
                </Button>
            </Form>     
        </Row>
    )
}

export default SignIn