import { combineReducers } from "redux";
import settings from "./reducers/settings";
import code from "./reducers/code";

const rootReducer = combineReducers({ settings, code });

export default rootReducer;

//zamiast ->  const rootReducer = combineReducers({ store });

// należy to -> const rootReducer = combineReducers({ state: store.state });
