import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import {Icon} from 'react-icons-kit'
import { ic_delete } from 'react-icons-kit/md/ic_delete'

const ComplaintView = ({brand, model, complaint, createdBy, createdOn, lastUpdatedDate,status}) =>{
    return (
        <Row>
            <Col lg={1} md={1} className='complaint-view-check'>
                <Form.Check />
            </Col>
            <Col lg={2} md={3}>
                {brand ? brand: null} - {model? model: null}
            </Col>
            <Col lg={7} md={6} className='complaint-view-middle'>
                <Row className='complaint-view-complaint'>{complaint}</Row>
                <Row>
                    <Col lg={3} md={3} className={`complaint-${status? status: 'none'}`}>status: {status? status: null}</Col>
                    <Col lg={3} md={3} className='complaint-view-by'>created by: {createdBy? createdBy: null}</Col>
                    <Col lg={3} md={3} className='complaint-view-on'>created on: {createdOn? createdOn : null}</Col>
                    <Col lg={3} md={3} className='complaint-view-update'>last Updated date: {lastUpdatedDate ? lastUpdatedDate : null}</Col>
                </Row>
            </Col>
            <Col lg={2} md={3} className='complaint-view-end'>
                <Row className='complaint-view-delete'><Icon icon={ic_delete} size={20} /></Row>
                <Row className='complaint-view-btn-view'><Button> view </Button></Row>
            </Col>
        </Row>
    )
}

export default ComplaintView