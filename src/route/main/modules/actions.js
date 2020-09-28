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
export const MAIN_DATA = "MAIN_DATA"
export const SUCCESS = "SUCCESS"
export const PENDING = "PENDING"
export const ERROR = "ERROR"
export const PERCENTAGE_DATA = "PERCENTAGE_DATA"
export const BED_ROOM = "BED_ROOM"
export const LIVING_ROOM = "LIVING_ROOM"
export const KITCHEN = "KITCHEN"
export const PERCENTAGE_BED_ROOM_DATA = "PERCENTAGE_BED_ROOM_DATA"
export const PERCENTAGE_KITCHEN_DATA = "PERCENTAGE_KITCHEN_DATA"
export const PERCENTAGE_LIVING_ROOM_DATA = "PERCENTAGE_LIVING_ROOM_DATA"

//``` Define action object
function mainData(data) {
    return {
        type: MAIN_DATA,
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

function percentageData(data) {
    return {
        type: PERCENTAGE_DATA,
        payload: data
    }
}

function percentageBedRoomData(data) {
    return {
        type: PERCENTAGE_BED_ROOM_DATA,
        payload: data
    }
}

function percentageKitchenData(data) {
    return {
        type: PERCENTAGE_KITCHEN_DATA,
        payload: data
    }
}

function percentageLivingRoomData(data) {
    return {
        type: PERCENTAGE_LIVING_ROOM_DATA,
        payload: data
    }
}

//''' Define function to handle calling API process by dispatching actions
export function getAllMainData() {
    return dispatch => {
        dispatch(pending(true))
        get('http://127.0.0.1:5000/metrics').then(res => {
            dispatch(mainData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}


export function getPercentageData() {
    return dispatch => {
        dispatch(pending(true))
        // 'http://172.16.65.29:5000/prediction'
        get(edgeAPIs.prediction(edgeAPIs.server())).then(res => {
            dispatch(percentageData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}
export function getPercentageBedRoomData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.predictionBedRoom(edgeAPIs.server())).then(res => {
            dispatch(percentageData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}
export function getPercentageKitchenData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.predictionKitchen(edgeAPIs.server())).then(res => {
            dispatch(percentageData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}
export function getPercentageLivingRoomData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.predictionLivingRoom(edgeAPIs.server())).then(res => {
            dispatch(percentageData(res))
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
            dispatch(mainData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }
}

export function updateMainData(mainDto) {
    return dispatch => {
        dispatch(pending(true))
        put(edgeAPIs.server(), mainDto).then(res => {
            dispatch(mainData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function deleteMainData(id) {
    return dispatch => {
        dispatch(pending(true))
        deleted(edgeAPIs.server(), id).then(res => {
            dispatch(mainData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function addNewData(mainDto) {
    return dispatch => {
        dispatch(pending(true))
        post(edgeAPIs.server(), mainDto).then(res => {
            dispatch(mainData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}