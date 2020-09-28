/**
 * Defining methods for updating state based on the payload within action object
 *
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

//``` Importing action type which is declared in actions.js file
import {
    LIVE_DATA,
    SUCCESS,
    PENDING,
    ERROR,
    LIVING_ROOM,
    KITCHEN,
    BED_ROOM
} from "./actions"

import update from "immutability-helper"

//``` Defining methods for updating state based on action type  
export const actionHandlers = {};
actionHandlers[LIVE_DATA] = handleLiveData;
actionHandlers[SUCCESS] = handleSuccess;
actionHandlers[PENDING] = handlePending;
actionHandlers[ERROR] = handleError;
actionHandlers[BED_ROOM] = handleBedRoom;
actionHandlers[KITCHEN] = handleKitchen;
actionHandlers[LIVING_ROOM] = handleLivingRoom;

//''' Definging function for updating state. Each function receive a previous state and an 
//action object as parameter then return a new state by updating the previous state based on
// action's payload
function handleLiveData(state, action) {
    return update(state, {
        liveDatas: { $set: action.payload }
    })
}

function handleBedRoom(state, action) {
    return update(state, {
        bedRoomData: { $set: action.payload }
    })
}

function handleKitchen(state, action) {
    return update(state, {
        kitchenData: { $set: action.payload }
    })
}

function handleLivingRoom(state, action) {
    return update(state, {
        livingRoomData: { $set: action.payload }
    })
}

function handleSuccess(state, action) {
    return update(state, {
        success: { $set: action.payload }
    })
}

function handlePending(state, action) {
    return update(state, {
        pending: { $set: action.payload }
    })
}

function handleError(state, action) {
    return update(state, {
        error: { $set: action.payload }
    })
}