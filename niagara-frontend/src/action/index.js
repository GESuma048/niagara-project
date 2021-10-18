export const SET_DEVICES='SET_DEVICES';
export const SET_ALARMS='SET_ALARMS';

//action to add device list to store
export function setDevices(devices){
    return{
        type:SET_DEVICES,
        devices
    }
}

//action to add alarms list to store
export function setAlarms(alarms){
    return{
        type:SET_ALARMS,
        alarms
    }
}