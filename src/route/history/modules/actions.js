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
export const HISTORY_DATA = "HISTORY_DATA"
export const SUCCESS = "SUCCESS"
export const PENDING = "PENDING"
export const ERROR = "ERROR"
export const PIE_CHART_DATA = "PIE_CHART_DATA"
export const BAR_CHART_DATA = "BAR_CHART_DATA"

//``` Define action object
function historyData(data) {
    return {
        type: HISTORY_DATA,
        payload: data
    }
}

function pieChartData(data) {
    return {
        type: PIE_CHART_DATA,
        payload: data
    }
}

function barChartData(data) {
    return {
        type: BAR_CHART_DATA,
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

export function getAllHistoryData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.history(edgeAPIs.server())).then(res => {
            dispatch(historyData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function getPieChartData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.pieChart(edgeAPIs.server())).then(res => {
            dispatch(pieChartData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function getBarChartData() {
    return dispatch => {
        dispatch(pending(true))
        get(edgeAPIs.barChart(edgeAPIs.server())).then(res => {
            dispatch(barChartData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function updateMainData(historyDto) {
    return dispatch => {
        dispatch(pending(true))
        put(edgeAPIs.server(), historyDto).then(res => {
            dispatch(historyData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function deleteMainData(id) {
    return dispatch => {
        dispatch(pending(true))
        deleted(edgeAPIs.server(), id).then(res => {
            dispatch(historyData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}

export function addNewData(historyDto) {
    return dispatch => {
        dispatch(pending(true))
        post(edgeAPIs.server(), historyDto).then(res => {
            dispatch(historyData(res))
        }).catch(err => {
            dispatch(error(err))
        }).finally(() => dispatch(pending(false)))
    }

}