import { call, put, takeEvery } from "redux-saga/effects";
import { saveUserProfile, getProfileImageUrl } from "../../services/nologin";
//action
const GET_PROFILE_IMAGE = "cure-dapp/profile-duck/GET_PROFILE_IMAGE";
const GET_PROFILE_IMAGE_SUCCESS = "cure-dapp/profile-duck/GET_PROFILE_IMAGE_SUCCESSFUL";
const GET_PROFILE_IMAGE_FAILURE = "cure-dapp/profile-duck/GET_PROFILE_IMAGE_FAILURE";

const SAVE_USER_PROFILE_REQUEST = "cure-dapp/profile-duck/SAVE_USER_PROFILE_REQUEST";
const SAVE_USER_PROFILE = "cure-dapp/profile-duck/SAVE_USER_PROFILE";
const SAVE_USER_PROFILE_SUCCESS = "cure-dapp/profile-duck/SAVE_USER_PROFILE_SUCESS";
const SAVE_USER_PROFILE_FAILURE = "cure-dapp/profile-duck/SAVE_USER_PROFILE_FAILURE";


// state
const intialState = {
    image: null,
    error: null,
    profileError: null,
    message: "",
}

//reducer
export function profileReducer(state={...intialState}, action) {
    switch(action.type) {
        case GET_PROFILE_IMAGE_SUCCESS:
            return {
                ...state,
                image: action.base64encodedImage
            }
        case GET_PROFILE_IMAGE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case SAVE_USER_PROFILE_REQUEST:
            return {
                ...state,
                ...intialState
            }
        case SAVE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                message: action.message
            }
        case SAVE_USER_PROFILE_FAILURE:
            return {
                ...state,
                profileError: action.profileError
            }
        default:
            return state;
    }
}

// action creators
export function getImage(image){
    return {
        type: GET_PROFILE_IMAGE,
        image: image
    }
}

export function saveProfileAction(body) {
    return {
        type: SAVE_USER_PROFILE,
        body: body
    }
}

function* handleSaveUserProfile({ body }) {
    try {
        yield put ({
            type: SAVE_USER_PROFILE_REQUEST
        });
        const data = yield call(saveUserProfile, body);
        yield put({
            type: SAVE_USER_PROFILE_SUCCESS,
            message: data.message
        })
    } catch (exception) {
        yield put({
            type: SAVE_USER_PROFILE_FAILURE,
            profileError: exception.message
        })
    }
}

function* handleGetImage({ image }) {
    try {
        const data = yield call(getProfileImageUrl, image);
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
    yield takeEvery(GET_PROFILE_IMAGE, handleGetImage);
}

export function* saveUserProfileSaga() {
    yield takeEvery(SAVE_USER_PROFILE, handleSaveUserProfile);
}