import { combineReducers } from "redux";
import dataApiResponses from "./reducers/dataApiResponses";
import codeFile from "./reducers/codeFile";

const rootReducer = combineReducers({ dataApiResponses, codeFile });

export default rootReducer;

//zamiast ->  const rootReducer = combineReducers({ store });

// należy to -> const rootReducer = combineReducers({ state: store.state });
