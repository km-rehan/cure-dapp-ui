import { combineReducers } from "redux";
import { loginReducer } from "../ducks/login-duck";
import { profileReducer } from "../ducks/profile-duck";

export function rootReducer() {
    return combineReducers({
        login: loginReducer,
        profile: profileReducer
    });
}