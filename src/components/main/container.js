import React, {Component} from 'react'
import {Tab, Row, Nav,Col} from 'react-bootstrap'
import { ic_person_pin } from 'react-icons-kit/md/ic_person_pin'
import {Icon} from 'react-icons-kit'
import MeView from './me';
import '../../stylesheets/main.scss'
import Departments from './departments';

export default class Main extends Component{
    render(){
        return(
            <Tab.Container id="tabs" defaultActiveKey="me">
                <Row className='main-row'>
                    <Col lg={2} md={3} sm={12} xs={12} className='side-bar-container'>
                        <h6 className='side-bar-title'>MENU</h6>
                        <hr/>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="me">
                                    <Icon icon={ic_person_pin} size={20}/>
                                    Me
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="department">Departments</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Dashboard">Dashboard</Nav.Link>
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
                    <Col lg={10} md={9} sm={12} xs={12} id='any-view'>
                        <Tab.Content>
                            <Tab.Pane eventKey="me">
                                <MeView />
                            </Tab.Pane>
                            <Tab.Pane eventKey="department">
                                <Departments />
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