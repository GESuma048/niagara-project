import {combineReducers} from 'redux';
import devices from './devices';
import alarms from './alarms';


const rootReducer=combineReducers({devices,alarms});

export default rootReducer;
