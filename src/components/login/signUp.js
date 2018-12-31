import React from 'react'
import { Row, Form, Button } from 'react-bootstrap'

const SignUp = () => {
    return (
        <Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label size='sm'>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" size='sm'/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label size='sm'>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" size='sm'/>
                </Form.Group><Form.Group controlId="formBasicEmail">
                    <Form.Label size='sm'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" size='sm'/>
                </Form.Group><Form.Group controlId="formBasicEmail">
                    <Form.Label size='sm'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" size='sm'/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label size='sm'>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Retype Password" size='sm'/>
                </Form.Group> 
                <Button variant="primary" type="submit" size='sm'>
                    Submit
                </Button>
            </Form>
        </Row>
    )
}

export default SignUp