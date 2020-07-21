import { all } from "redux-saga/effects";
import { loginActionSaga } from "../ducks/login-duck";
import { saveUserProfileSaga, getImageSaga, getUserProfileSaga } from "../ducks/profile-duck";

export function* rootSaga() {
    yield all([
        loginActionSaga(),
        getImageSaga(),
        saveUserProfileSaga(),
        getUserProfileSaga()
    ]);
}