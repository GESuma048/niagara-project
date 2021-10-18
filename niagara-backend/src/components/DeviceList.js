import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import "../styles/index.css";

class DeviceList extends Component{
    render(){
        console.log('this.props',this.props);
        return(
            <div>
            <h3 className="h3">Device Value</h3>
            {
                this.props.devices.reverse().map(device =>{
                    return(
                        <div key={device.totalEntityId}>
                        <h5 className="h5"><b>ParentName</b> :{device.parentname}{' '}<b>TimeStamp</b> :{device.timestamp}</h5>
                        <Table className="table" bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td width="50%"><b>SlotPath</b></td>
                                    <td width="25%"><b>Value</b></td>
                                    <td width="25%"><b>Name</b></td>
                                </tr>
                            </tbody>
                        </Table>

                        <div>{device.points.map((point => {return(
                            <div key={point.pointId}>
                            <Table className="table" bordered hover size="sm">
                                <tbody>
                                <tr>
                                    <td width="50%">{point.slotPath}</td>
                                    <td width="25%">{point.value}</td>
                                    <td width="25%">{point.name}</td>
                                    </tr>
                                </tbody>
                            </Table>
                                </div>)}))}</div>

                        </div>
                        
                    )
                })
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(DeviceList);