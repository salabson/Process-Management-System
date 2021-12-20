import {combineReducers  } from "redux";

import guarantors from "./guarantors";
import guarantees from "./guarantees";


export default combineReducers({guarantors, guarantees});