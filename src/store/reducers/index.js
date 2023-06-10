import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import CounterReducer from "./CounterReducer";

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    CounterReducer
});

export default createRootReducer;