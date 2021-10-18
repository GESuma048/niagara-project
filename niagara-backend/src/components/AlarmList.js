import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class AlarmList extends Component{
    render(){
        console.log('this.props',this.props);
        return(
            <div>
            <div class="nav">
            <h3 className="h2">Device Alarm Status</h3>
            <Button className="button1"><Link className="link" to='/'>Home</Link></Button>
            </div>
            <Table className="table1" bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td width="20%"><b>AlarmTimeStamp</b></td>
                                    <td width="10%"><b>Alarm Value</b></td>
                                    <td width="10%"><b>Alarm SourceState</b></td>
                                    <td width="10%"><b>Ack State</b></td>
                                    <td width="30%"><b>Alarm Source</b></td>
                                    <td width="20%"><b>Alarm Class</b></td>
                                </tr>
                            </tbody>
            </Table>
            {
                this.props.alarms.reverse().map(alarm =>{
                    return(
                        
                        <div key={alarm.alarmConsoleId}>
                        <Table className="table1" bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td width="20%">{alarm.alarmTimestamp}</td>
                                    <td width="10%">{alarm.alarmValue}</td>
                                    <td width="10%">{alarm.alarmSourceState}</td>
                                    <td width="10%">{alarm.acKState}</td>
                                    <td width="30%">{alarm.alarmSource}</td>
                                    <td width="20%">{alarm.alarmClass}</td>
                                </tr>
                            </tbody>
                           </Table>
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
export default connect(mapStateToProps,null)(AlarmList);