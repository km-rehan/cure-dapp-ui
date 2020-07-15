import { combineReducers } from "redux";
import { loginReducer } from "../ducks/login-duck";

export function rootReducer() {
    return combineReducers({
        login: loginReducer
    });
}