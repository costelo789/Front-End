/**
 * Defining action objects and function for handling API calls
 *
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import { post, deleted, get, put } from "../../../ultis/index"
import { edgeAPIs } from "../../../config"

//''' Define action type
export const LIVE_DATA = "LIVE_DATA"
export const SUCCESS = "SUCCESS"
export const PENDING = "PENDING"
export const ERROR = "ERROR"
export const BED_ROOM = "BED_ROOM"
export const LIVING_ROOM = "LIVING_ROOM"
export const KITCHEN = "KITCHEN"

//``` Define action object
function liveData(data) {
    return {
        type: LIVE_DATA,
        payload: data
    }
}

function bedRoomData(data) {
    return {
        type: BED_ROOM,
        payload: data
    }
}

function livingRoomData(data) {
    return {
        type: LIVING_ROOM,
        payload: data
    }
}

function kitchenData(data) {
    return {
        type: KITCHEN,
        payload: data
    }
}

function success(isSuccess) {
    return {
        type: SUCCESS,
        payload: isSuccess
    }
}

function pending(isPending) {
    return {
        type: PENDING,
        payload: isPending
    }
}

function error(isError) {
    return {
        type: ERROR,
        payload: isError
    }
}

//''' Define function to handle calling API process by dispatching actions
export function getAllLiveData() {
    return dispatch => {
        dispatch(pending(true))
        get(`http://192.168.1.110:5000/sensors/gas`).then(res => {
            dispatch(liveData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }
}

export function getBedRoomData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.bedroom(edgeAPIs.server())).then(res => {
            dispatch(bedRoomData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function getLivingRoomData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.living(edgeAPIs.server())).then(res => {
            dispatch(livingRoomData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function getKitchenData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.kitchen(edgeAPIs.server())).then(res => {
            dispatch(kitchenData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function feedbackServer(data) {
    return dispatch => {
        dispatch(pending(true))
        post(edgeAPIs.feedback(edgeAPIs.server()), data).then(res => {
            dispatch(liveData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }
}




export function updateMainData(liveDto) {
    return dispatch => {
        dispatch(pending(true))
        put(edgeAPIs.server(), liveDto).then(res => {
            dispatch(liveData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function deleteMainData(id) {
    return dispatch => {
        dispatch(pending(true))
        deleted(edgeAPIs.server(), id).then(res => {
            dispatch(liveData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function addNewData(liveDto) {
    return dispatch => {
        dispatch(pending(true))
        post(edgeAPIs.server(), liveDto).then(res => {
            dispatch(liveData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}