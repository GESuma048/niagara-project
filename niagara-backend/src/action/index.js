export const SET_DEVICES='SET_DEVICES';
export const SET_ALARMS='SET_ALARMS';

export function setDevices(devices){
    return{
        type:SET_DEVICES,
        devices
    }
}

export function setAlarms(alarms){
    return{
        type:SET_ALARMS,
        alarms
    }
}