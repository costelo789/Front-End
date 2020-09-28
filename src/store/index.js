/**
 * Defining Redux store for the application
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */


import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import makeRootReducer from "./reducer"

const log = createLogger({ diff: true, collapsed: true })

export default function createReducerStore(initialState = {}) {
    const middlewares = [thunk, log]
    const enhancers = []

    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(applyMiddleware(...middlewares), ...enhancers)
    )
    return store
}