import { combineReducers } from "redux";
import list from "./list";
import cart from "./cart";
import { listActions } from './list'
import { cartActions } from "./cart";

const rootReducer = combineReducers({ list, cart });

export {
    rootReducer,
    listActions,
    cartActions
}