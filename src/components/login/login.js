import React from "react";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import SignIn from "./singIn";
import SignUp from "./signUp";
import "../../stylesheets/login.scss";

const Login = () => {
  return (
    <Tab.Container id="login-tab-container" defaultActiveKey="signIn">
      <Row id="login-nav">
        <Col lg={4} md={4} sm={2} />
        <Col lg={4} md={4} sm={10} id="login-row-content">
          <Row>
            <h6 className="login-title">Complaint Manager</h6>
          </Row>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="signIn">Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="signUp">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
          <hr />
          <Tab.Content>
            <Tab.Pane eventKey="signIn">
              <SignIn />
            </Tab.Pane>
            <Tab.Pane eventKey="signUp">
              <SignUp />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default Login;
