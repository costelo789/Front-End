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
    MAIN_DATA,
    SUCCESS,
    PENDING,
    ERROR,
    PERCENTAGE_DATA,
    LIVING_ROOM,
    KITCHEN,
    BED_ROOM,
    PERCENTAGE_BED_ROOM_DATA,
    PERCENTAGE_KITCHEN_DATA,
    PERCENTAGE_LIVING_ROOM_DATA

} from "./actions"

import update from "immutability-helper"

//``` Defining methods for updating state based on action type  
export const actionHandlers = {};
actionHandlers[MAIN_DATA] = handleMainData;
actionHandlers[SUCCESS] = handleSuccess;
actionHandlers[PENDING] = handlePending;
actionHandlers[ERROR] = handleError
actionHandlers[PERCENTAGE_DATA] = handlePercentage
actionHandlers[BED_ROOM] = handleBedRoom;
actionHandlers[KITCHEN] = handleKitchen;
actionHandlers[LIVING_ROOM] = handleLivingRoom;
actionHandlers[PERCENTAGE_BED_ROOM_DATA] = handlePercentageBedRoom;
actionHandlers[PERCENTAGE_KITCHEN_DATA] = handlePercentageKitchen;
actionHandlers[PERCENTAGE_LIVING_ROOM_DATA] = handlePercentageLivingRoom;

//''' Definging function for updating state. Each function receive a previous state and an 
//action object as parameter then return a new state by updating the previous state based on
// action's payload
function handleMainData(state, action) {
    return update(state, {
        mainDatas: { $set: action.payload }
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

function handlePercentage(state, action) {
    return update(state, {
        percentageData: { $set: action.payload }
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

function handlePercentageBedRoom(state, action) {
    return update(state, {
        percentageBedRoomData: { $set: action.payload }
    })
}

function handlePercentageKitchen(state, action) {
    return update(state, {
        percentageKitchenData: { $set: action.payload }
    })
}

function handlePercentageLivingRoom(state, action) {
    return update(state, {
        percentageLivingRoomData: { $set: action.payload }
    })
}


