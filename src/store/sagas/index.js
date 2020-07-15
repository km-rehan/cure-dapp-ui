import { all } from "redux-saga/effects";
import { loginActionSaga } from "../ducks/login-duck";

export function* rootSaga() {
    yield all([
        loginActionSaga(),
    ]);
}