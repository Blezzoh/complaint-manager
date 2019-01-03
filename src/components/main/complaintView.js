import React from 'react'
import {Row, Col, Form, Button, ListGroup} from 'react-bootstrap'
import {Icon} from 'react-icons-kit'
import { ic_delete } from 'react-icons-kit/md/ic_delete'
import '../../stylesheets/complaintView.scss'

const ComplaintView = ({ brand, model, complaint, createdBy, createdOn, lastUpdatedDate,status, showComplaint, click}) =>{
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
                    <ListGroup.Item>Remarks: be careful!</ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>
    )
}

export default ComplaintView