import { combineReducers } from "redux";
import app from "./app";
import { appActions} from "./app";

const rootReducer = combineReducers({app});

export {
    rootReducer,
    appActions,
}