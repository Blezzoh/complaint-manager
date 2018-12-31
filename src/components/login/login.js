import React from 'react'
import {Nav, Tab} from 'react-bootstrap'
import SignIn from './singIn';
import SignUp from './signUp';

const Login = () =>{
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="signIn">
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link eventKey="signIn">Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="signUp">Sign Up</Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab.Content>
                <Tab.Pane eventKey="signIn">
                    <SignIn />
                </Tab.Pane>
                <Tab.Pane eventKey="signUp">
                    <SignUp />
                </Tab.Pane>
            </Tab.Content>
    </Tab.Container>
    )
}
export default Login
