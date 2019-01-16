import React from "react";
import { Row, Form, Button } from "react-bootstrap";
import {NavLink} from 'react-router-dom'

const SignIn = () => {
  return (
    <Row>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>

        <Button variant="primary">
          <NavLink to='/complaints'>
            Submit
          </NavLink>
        </Button>
      </Form>
    </Row>
  );
};

export default SignIn;
