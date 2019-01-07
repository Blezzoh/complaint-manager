import React, {Component} from 'react'
import { InputGroup, FormControl,Row , Button, ButtonGroup} from 'react-bootstrap'
import { generateData, breakArrayInParts } from '../../lib/data';
import ComplaintView from './complaintView';
import '../../stylesheets/departments.scss'

class Departments extends Component{
    constructor(props){
        super(props)
        this.state = {
            all: [generateData(15, 'subaru'), generateData(10, 'cadillac'), generateData(10, 'volvo')],
            brands: ['subaru', 'cadillac', 'volvo'],
            subaru: [generateData(10, 'subaru')],
            volvo: [generateData(10, 'volvo')],
            cadillac: [generateData(10, 'cadillac')],
            option: 'all',
            visibleComplaint: -1,
            page:{
                volvo: 0,
                subaru: 0,
                cadillac: 0,
            }
        }
    }
    displayComplaint(complaints, start, key, brandIndex){
        const {visibleComplaint} = this.state
        const data = breakArrayInParts(complaints, 5)
        const brand = this.state.brands[brandIndex]
        console.log('brand', brand, this.state.page[brand],brandIndex)
        console.log([])
        return this.state.page[brand] !==undefined ?(
            <Row className='assigned-complaints-view' key={key}>
                <h6>{brand.toUpperCase()}</h6>
                <div style={{width :'100%'}}>
                    <ButtonGroup aria-label="pagination" size='sm'>
                        {
                            data.map(
                                (d, key) =>
                                    <Button variant="secondary" onClick={() => this.setState({
                                        page: { ...this.state.page, [brand]: key }
                                    })}>
                                        {key}
                                    </Button>
                            )
                            
                        }
                    </ButtonGroup>
                </div>
                {
                    data[this.state.page[brand]].data.map(
                        (d, i) => {
                            return (
                                <ComplaintView key={i} brand={d.brand} lastUpdatedDate={d.lastUpdatedDate}
                                    complaint={d.complaint} createdBy={d.createdBy} createdOn={d.createdOn}
                                    model={d.model} status={d.status} showComplaint={this.state.visibleComplaint === (start+ i)}
                                    click={() => this.setState({
                                        visibleComplaint: visibleComplaint === (start + i) ? -1 : start + i
                                    })}
                                />
                            )
                        }
                    )
                }
            </Row> 
        ) : null
    }
    render(){
        return(
            <Row id='departments-row'>
                <Row id='view-row'>
                    <InputGroup size='sm'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id='view-text'>View</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl size='sm' as='select' value={this.state.option} id='view-options'
                            onChange={(evt) =>this.setState({option: evt.target.value})} >
                            <option value='all' >All</option>
                            <option value='subaru' >Subaru</option>
                            <option value='volvo' >Volvo</option>
                            <option value='cadillac' >Cadillac</option>
                        </FormControl>
                    </InputGroup>
                </Row>
                {
                    this.state[this.state.option].map(
                        (complaints, i) => this.displayComplaint(complaints, i*10, i*100, i)
                    )
                }
            </Row>
        )
    }
}
export default Departments

