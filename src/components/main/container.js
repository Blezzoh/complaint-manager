import React, {Component} from 'react'
import {Tab, Row, Nav,Col} from 'react-bootstrap'
import { ic_person_pin } from 'react-icons-kit/md/ic_person_pin'
import {Icon} from 'react-icons-kit'
import MeView from './me';

export default class Main extends Component{
    render(){
        return(
            <Tab.Container id="left-tabs-example" defaultActiveKey="me">
                <Row>
                    <Col lg={2} md={3} sm={12} xs={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="me">
                                    <Icon icon={ic_person_pin} size={20}/>
                                    Me
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="organization">Organization</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="master">Master</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="admin">Administration</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="help">Help</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="logout">
                                    <button>
                                        logout
                                    </button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="me">
                                <MeView />
                            </Tab.Pane>
                            <Tab.Pane eventKey="organization">
                            </Tab.Pane>
                            <Tab.Pane eventKey="master">
                            </Tab.Pane>
                            <Tab.Pane eventKey="admin">
                            </Tab.Pane>
                            <Tab.Pane eventKey="help">
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}