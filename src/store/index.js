import {createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import defaultState from "./state";


const store = createStore(reducer, defaultState, applyMiddleware(thunk));

export default store;