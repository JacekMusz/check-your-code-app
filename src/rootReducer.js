import { combineReducers } from "redux";
import bundleStore from "./reducers/reducer";

const rootReducer = combineReducers({ bundleStore });

export default rootReducer;
