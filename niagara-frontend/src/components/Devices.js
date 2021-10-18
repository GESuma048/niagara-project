import React,{Component} from 'react'
import {connect} from 'react-redux';
import {setDevices} from '../action';

class Devices extends Component{
    search() {
        const url=`https://niagara-app.herokuapp.com/getAllDeviceValues`
        fetch(url,{method:'GET'})
        .then(response => response.json())
        .then(json => {this.props.setDevices(json.totalEntities)}).catch((e) => console.log(e.message));
        }

        render(){
            return(
                <div>
                    {this.search()}
                </div>
            )
        }
        componentDidMount() {
            //auto refresh
            this.timer = setInterval(() => {
             this.search()},30000)
         }
         
          componentWillUnmount() {
             clearInterval(this.timer);
         }
        
}

export default connect(null,{setDevices})(Devices);
