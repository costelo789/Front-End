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
    HISTORY_DATA,
    SUCCESS,
    PENDING,
    ERROR,
    PIE_CHART_DATA,
    BAR_CHART_DATA
} from "./actions"

import update from "immutability-helper"

//``` Defining methods for updating state based on action type  
export const actionHandlers = {};
actionHandlers[HISTORY_DATA] = handleHistoryData;
actionHandlers[SUCCESS] = handleSuccess;
actionHandlers[PENDING] = handlePending;
actionHandlers[ERROR] = handleError;
actionHandlers[PIE_CHART_DATA] = handlepPieChart
actionHandlers[BAR_CHART_DATA] = handlepBarChart


//''' Definging function for updating state. Each function receive a previous state and an 
//action object as parameter then return a new state by updating the previous state based on
// action's payload
function handleHistoryData(state, action) {
    return update(state, {
        historyDatas: { $set: action.payload }
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

function handlepPieChart(state, action) {
    return update(state, {
        pieChartData: { $set: action.payload }
    })
}

function handlepBarChart(state, action) {
    return update(state, {
        barChartData: { $set: action.payload }
    })
}