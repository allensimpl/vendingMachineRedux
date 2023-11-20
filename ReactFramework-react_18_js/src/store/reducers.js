import { combineReducers } from "redux";
import  MainReducer  from "../router/redux/reducer";
const rootReducer = combineReducers({
	mainReducer: MainReducer
});

export default rootReducer;