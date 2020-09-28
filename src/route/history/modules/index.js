/**
 * Defining initial data for states and reducer for update state based on action object. 
 * Reducer function has to rely on handle action methods declared in handler.js file
 * for handling the action and return a new state
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import { actionHandlers } from "./handler"

//```Defining initial data for each state in Redux 
const initialState = {
    historyData: [],
    
}

//```Creating a reducer for updating state
export default function reducer(state = initialState, action) {
    const handle = actionHandlers[action.type];
    return handle ? handle(state, action) : state;
}