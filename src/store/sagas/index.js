import { all } from "redux-saga/effects";
import { loginActionSaga } from "../ducks/login-duck";
import { getImageSaga } from "../ducks/profile-duck";
import { saveUserProfileSaga } from "../ducks/profile-duck";

export function* rootSaga() {
    yield all([
        loginActionSaga(),
        getImageSaga(),
        saveUserProfileSaga()
    ]);
}