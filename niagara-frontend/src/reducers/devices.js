import {SET_DEVICES} from '../action';

function devices(state=[],action){
    switch(action.type){
        case SET_DEVICES:
            console.log('action.devices',action.devices);
            return action.devices;
        default:
            return state;
    }
}

export default devices;