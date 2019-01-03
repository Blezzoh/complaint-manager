import React, {Component} from 'react'
import {Row, Col,Button, InputGroup, FormControl} from 'react-bootstrap'
import { generateData } from '../../lib/data';
import ComplaintView from './complaintView';
import {Icon} from 'react-icons-kit'
import { ic_search } from 'react-icons-kit/md/ic_search'
import { plus } from 'react-icons-kit/icomoon/plus'
import NewComplaint from './newComplaint';
import '../../stylesheets/self.scss'

class MeView extends Component{
    constructor(props){
        super(props)
        this.state ={
            hideNewComplaint :true,
            visibleComplaint: -1
        }
    }
    viewComplaint(index){
        if(this.state.visibleComplaint === index){
            this.setState({visibleComplaint: -1})
        }
        else this.setState({visibleComplaint: index})
    }
    render() {
        const {hideNewComplaint, visibleComplaint} = this.state
        return (
            <Row id='user-view'> 
                <Row>
                    <Col lg={6} md={6}>
                        <Button variant='outline-primary' size='sm' onClick={()=>this.setState({hideNewComplaint : false})}>
                            <Icon id='new-compalint-icon' icon={plus} size={14} /> New Complaint
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
                <Row style={{ width: '100%', display: (hideNewComplaint) ? 'none' : 'block'}} >
                    <div><Button onClick={()=>this.setState({hideNewComplaint: true})}>-</Button></div>
                    <NewComplaint />
                </Row>
                <Row style={{ display: (!hideNewComplaint) ? 'none' : 'block'}} id='assigned-complaints-view'>
                    <h6> Assigned To Me</h6>
                    {
                        generateData(10).map(
                            (d, i) => {
                                return (
                                    <ComplaintView key={i} brand={d.brand} lastUpdatedDate={d.lastUpdatedDate}
                                        complaint={d.complaint} createdBy={d.createdBy} createdOn={d.createdOn}
                                        model={d.model} status={d.status} showComplaint={visibleComplaint === i}
                                        click={()=> this.viewComplaint(i)}
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