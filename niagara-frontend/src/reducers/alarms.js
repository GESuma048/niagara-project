import {SET_ALARMS} from '../action';


function alarms(state=[],action){
    switch(action.type){
        case SET_ALARMS:
            console.log('action.alarms',action.alarms);
            return action.alarms;
        default:
            return state;
    }
}

export default alarms;