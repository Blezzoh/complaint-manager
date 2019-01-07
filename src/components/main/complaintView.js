import React, {Component} from 'react'
import {Row, Col, Form, Button, ListGroup} from 'react-bootstrap'
import {Icon} from 'react-icons-kit'
import { ic_delete } from 'react-icons-kit/md/ic_delete'
import '../../stylesheets/complaintView.scss'

class ComplaintView extends Component{
    constructor(props){
        super(props)
        this.state ={
            action: 'choose',
            status: props.status? props.status : '',
            notes:  ['called the customer on the 8th'],
            currentNote: '',
        }
    }
    render(){
        const { brand, model, complaint, createdBy, createdOn, lastUpdatedDate, status, showComplaint, click } = this.props
        return (
            <Row className={`complaint-view  complaint-view-${status? status: 'none'}`}>
                <Col lg={1} md={1} className='complaint-view-check'>
                    <Form.Check />
                </Col>
                <Col lg={2} md={3}>
                    {brand ? brand: null} - {model? model: null}
                </Col>
                <Col lg={7} md={6} className='complaint-view-middle'>
                    <Row className='complaint-view-complaint'>{complaint}</Row>
                    <Row className='compaint-view-complaint-info'>
                        <Col lg={3} md={3} className={` complaint-view-status` }>
                            <span className={`${status? status: 'none'}`}>{status? status: null}</span>
                        </Col>
                        <Col lg={3} md={3} className='complaint-view-by'>created by: {createdBy? createdBy: null}</Col>
                        <Col lg={3} md={3} className='complaint-view-on'>created on: {createdOn? createdOn : null}</Col>
                        <Col lg={3} md={3} className='complaint-view-update'>last Updated date: {lastUpdatedDate ? lastUpdatedDate : null}</Col>
                    </Row>
                </Col>
                <Col lg={2} md={3} className='complaint-view-end'>
                    <Row className='complaint-view-delete'><Icon icon={ic_delete} size={24} /></Row>
                    <Row className='complaint-view-btn-area' ><Button className='complaint-view-btn-view' onClick={click}>{showComplaint? 'hide': 'view' }</Button></Row>
                </Col>
                <Col lg={12} md={12} style={{display: showComplaint? 'block' :'none'}}>
                    <ListGroup>
                        <ListGroup.Item>complaint #: 1234</ListGroup.Item>
                        <ListGroup.Item>Name: Blase Blezzoh Rdk</ListGroup.Item>
                        <ListGroup.Item>Tel #: 1234567890</ListGroup.Item>
                        <ListGroup.Item>Email: brdkBlezzoh@self.fr</ListGroup.Item>
                        <ListGroup.Item>Brand: {brand}</ListGroup.Item>
                        <ListGroup.Item>Model: XS</ListGroup.Item>
                        <ListGroup.Item>Details: {complaint}</ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <div style={{ width: '100%' }}><h6>Previous Notes</h6></div>
                                {
                                    this.state.notes.map(
                                        (note, i) =>
                                            <p className='note-view' key={i}>{note}</p>
                                    )
                                }
                            </Row>
                        </ListGroup.Item>
                        {
                            status !== 'solved' ?
                                <ListGroup.Item>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Notes</Form.Label>
                                                <Form.Control as={'textarea'} value={this.state.currentNote}
                                                    onChange={(evt)=>this.setState({
                                                        currentNote: evt.target.value
                                                    })} />
                                            </Form.Group>
                                                <Button variant="secondary" className='add-note-btn'
                                                    onClick={()=>this.setState({
                                                        notes: [this.state.currentNote, ...this.state.notes],
                                                        currentNote: ''
                                                    })}>
                                                    Add Note
                                                </Button>
                                        </Form.Row>
                                    </Form>
                                </ListGroup.Item>
                                : null
                        }
                        {
                            status !== 'solved' ?
                                <ListGroup.Item>
                                    <Form>
                                        <Row>
                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label>Actions</Form.Label>
                                                    <Form.Control as="select" value={this.state.action}
                                                        onChange={(evt) => this.setState({ action: evt.target.value })}>
                                                        <option value='choose'>Choose...</option>
                                                        <option value='mark'>Mark as solved</option>
                                                        <option value='assign'>Assign To: </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            {
                                                (this.state.action === 'assign') ?
                                                    <Col lg={6} md={6}>
                                                        <Form.Label>Assign To: </Form.Label>
                                                        <Form.Control placeholder='username...' />
                                                    </Col>
                                                    :
                                                    null
                                            }
                                        </Row>
                                    </Form>
                                </ListGroup.Item>
                            : null
                        }
                    </ListGroup>
                </Col>
            </Row>
        )
    }
} 


export default ComplaintView