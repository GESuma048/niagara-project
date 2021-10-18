import React,{Component} from 'react'
import {connect} from 'react-redux';
import {setAlarms} from '../action'


class Alarms extends Component{
    search() {
        const url=`https://niagara-app.herokuapp.com/getAlarmConsole`
        fetch(url,{method:'GET'})
        .then(response => response.json())
        .then(json => {this.props.setAlarms(json.alarmConsole)});
        }
    render(){
        return(
            <div>
                {this.search()}
            </div>
        )
    }
    componentDidMount() {
        // any your code ....
        this.timer = setInterval(() => {
         this.search()},30000)
     }
     
      componentWillUnmount() {
         clearInterval(this.timer);
     }
}


export default connect(null,{setAlarms})(Alarms);