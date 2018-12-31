import React, {Component} from 'react'
import {Row, Col,Button, InputGroup, FormControl} from 'react-bootstrap'
import { generateData } from '../../lib/data';
import ComplaintView from './complaintView';
import {Icon} from 'react-icons-kit'
import { ic_search } from 'react-icons-kit/md/ic_search'
import { plus } from 'react-icons-kit/icomoon/plus'
class MeView extends Component{
    render() {
        return (
            <Row>
                <Row>
                    <Col lg={6} md={6}>
                        <Button variant='outline-primary' size='sm'>
                            <Icon icon={plus} size={20} /> New Complaint
                    </Button>
                    </Col>
                    <Col lg={6} md={6}>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl
                                placeholder="search ..."
                                aria-label="search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">
                                    <Icon icon={ic_search} size={13} />
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>

                </Row>
                <Row>
                    <h6>- Assigned To Me</h6>
                    {
                        generateData(10).map(
                            (d, i) => {
                                console.log(d)
                                return (
                                    <ComplaintView key={i} brand={d.brand} lastUpdatedDate={d.lastUpdatedDate}
                                        complaint={d.complaint} createdBy={d.createdBy} createdOn={d.createdOn}
                                        model={d.model} status={d.status}
                                    />
                                )
                            }
                        )
                    }
                </Row>
            </Row>
        )
    }
}

export default MeView