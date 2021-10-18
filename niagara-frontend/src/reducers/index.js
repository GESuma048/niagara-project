import {combineReducers} from 'redux';
import devices from './devices';
import alarms from './alarms';

//combining both the reducers
const rootReducer=combineReducers({devices,alarms});

export default rootReducer;
