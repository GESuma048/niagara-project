import React,{Component} from 'react'
import Alarms from './Alarms'
import AlarmList from './AlarmList'
import '../styles/index.css'

class AlarmConsole extends Component{
   
   
    render(){
        return(
            <div>
            <Alarms/>
            <AlarmList/>

            </div>
        )
    }
}

export default AlarmConsole;
