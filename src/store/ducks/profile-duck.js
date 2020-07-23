import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { saveUserProfile, getProfileImageUrl, getUserProfile } from "../../services/nologin";

//action
const GET_PROFILE_IMAGE = "cure-dapp/profile-duck/GET_PROFILE_IMAGE";
const GET_PROFILE_IMAGE_SUCCESS = "cure-dapp/profile-duck/GET_PROFILE_IMAGE_SUCCESSFUL";
const GET_PROFILE_IMAGE_FAILURE = "cure-dapp/profile-duck/GET_PROFILE_IMAGE_FAILURE";

const SAVE_USER_PROFILE = "cure-dapp/profile-duck/SAVE_USER_PROFILE";
const SAVE_USER_PROFILE_SUCCESS = "cure-dapp/profile-duck/SAVE_USER_PROFILE_SUCESS";
const SAVE_USER_PROFILE_FAILURE = "cure-dapp/profile-duck/SAVE_USER_PROFILE_FAILURE";

const GET_USER_PROFILE = "cure-dapp/profile-duck/GET_USER_PROFILE";
const GET_USER_PROFILE_SUCCESS = "cure-dapp/profile-duck/GET_USER_PROFILE_SUCCESS";
const GET_USER_PROFILE_FAILURE = "cure-dapp/profile-duck/GET_USER_PROFILE_FAILURE";


// state
const intialState = {
    image: "",
    error: "",
    profileData: "",
    profileError: "",
    message: "",
    isLoading: false
}

//reducer
export function profileReducer(state={...intialState}, action) {
    switch(action.type) {
        case GET_PROFILE_IMAGE_SUCCESS:
            return {
                ...state,
                image: action.image
            }
        case GET_PROFILE_IMAGE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profileData: action.profile
            }
        case GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                profileError: action.error
            }
        case SAVE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                message: action.message,
                profileData: action.profile,
                isLoading: false
            }
        case SAVE_USER_PROFILE_FAILURE:
            return {
                ...state,
                profileError: action.profileError,
                isLoading: false
            }
        default:
            return state;
    }
}

// action creators
export function getImage(image, token){
    return {
        type: GET_PROFILE_IMAGE,
        image: image,
        token: token
    }
}

export function saveProfileAction(body, token) {
    return {
        type: SAVE_USER_PROFILE,
        body: body,
        token: token,
        isLoading: true
    }
}

export function getUserProfileAction(token) {
    return {
        type: GET_USER_PROFILE,
        token: token
    }
}

function* handleGetUserProfile({ token }) {
    try {
        const { profile } = yield call(getUserProfile, token)
        yield put({
            type: GET_USER_PROFILE_SUCCESS,
            profile: profile
        })
    } catch (exception) {
        yield put({
            type: GET_USER_PROFILE_FAILURE,
            error: exception.message
        })
    }
}

function* handleSaveUserProfile({ body, token }) {
    try {
        const data = yield call(saveUserProfile, body, token);
        yield put({
            type: SAVE_USER_PROFILE_SUCCESS,
            message: data.message,
            profile: data.profile
        })
    } catch (exception) {
        yield put({
            type: SAVE_USER_PROFILE_FAILURE,
            profileError: exception.message
        })
    }
}

function* handleGetImage({ image, token }) {
    try {
        const data = yield call(getProfileImageUrl, image, token);
        yield put({
            type: GET_PROFILE_IMAGE_SUCCESS,
            image: data
        });
    } catch (exception) {
        yield put({
            type: GET_PROFILE_IMAGE_FAILURE,
            error: exception.message
        })
    }
}

export function* getImageSaga() {
    yield takeLatest(GET_PROFILE_IMAGE, handleGetImage);
}

export function* saveUserProfileSaga() {
    yield takeLatest(SAVE_USER_PROFILE, handleSaveUserProfile);
}

export function* getUserProfileSaga() {
    yield takeLatest(GET_USER_PROFILE, handleGetUserProfile);
}