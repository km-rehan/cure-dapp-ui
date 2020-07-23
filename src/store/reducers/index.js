import { combineReducers } from "redux";
import { loginReducer } from "../ducks/login-duck";
import { profileReducer } from "../ducks/profile-duck";
import { alerReducer } from "../ducks/alert-duck";


export const rootReducer = () => combineReducers({
        login: loginReducer,
        profile: profileReducer,
        alert: alerReducer
    });