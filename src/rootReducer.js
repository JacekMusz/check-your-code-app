import { combineReducers } from "redux";
import settings from "./reducers/settings";
import codeFile from "./reducers/codeFile";

const rootReducer = combineReducers({ settings, codeFile });

export default rootReducer;

//zamiast ->  const rootReducer = combineReducers({ store });

// należy to -> const rootReducer = combineReducers({ state: store.state });
