/**
 * Each component has it own reducer. It is rquired to define a function to combine all the reducers as one
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import { combineReducers } from "redux"
import liveReducer from "../route/live/modules"
import historyReducer from "../route/history/modules"
import mainReducer from "../route/main/modules"

//``` Combine all the reducers as one reducer
export default function makeRootReducer() {
    return combineReducers({
        liveData: liveReducer,
        historyData: historyReducer,
        mainData: mainReducer,
    })
}