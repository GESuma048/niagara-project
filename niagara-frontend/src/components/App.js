import React,{Component} from 'react'
import Devices from '../components/Devices'
import DeviceList from '../components/DeviceList'
import '../styles/index.css'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

class App extends Component{
   
   
    render(){
        return(
            <div>
            <div className="nav">
            <h2 className="h2">Welcome to Niagara App!</h2>
            <Button className="button"><Link className="link" to='/alarms'>Alarms Console</Link></Button>
            </div>
            <Devices/>
            <DeviceList/>

            </div>
        )
    }
}

export default App;
