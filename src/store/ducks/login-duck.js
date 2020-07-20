import { put, call, takeEvery } from "redux-saga/effects";
import { getUserSessionId, verifyMessage } from "../../services/login";
import ether from "ethers-wallet";
import * as jwt_decode from "jwt-decode";


//actions
const LOGIN_USER = "cured-app/login-duck/LOGIN_USER";
const LOGIN_REQUESTED = "cure-dapp/login-duck/LOGIN_REQUESTED";
const LOGIN_USER_SUCCESSFUL = "cured-app/login-duck/LOGIN_USER_SUCCESSFUL";
const LOGIN_USER_FAILURE = "cured-app/login-duck/LOGIN_USER_FAILURE";

const LOGOUT_USER = "cured-app/login-duck/LOGOUT";


//state
const initialState = {
    error: null,
    user: {},
    message: "",
    expiryTime: null,
    isLoggedIn: false,
    loading: false,
}

export function loginReducer(state={...initialState}, action) {
    switch(action.type) {
        case LOGIN_USER_SUCCESSFUL:
            return {
                ...state,
                user: action.user,
                expiryTime: action.expiryTime,
                isLoggedIn: true,
                loading: false
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case LOGOUT_USER:
            sessionStorage.removeItem("AuthToken")
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}


//action creator
export function loginAction(walletAddress) {
    return {
        type: LOGIN_USER,
        walletAddress: walletAddress
    }
}

export function logoutAction() {
    return {
        type: LOGOUT_USER
    }
}

function* handleLoginAction({ walletAddress }) {
    try {
        if (walletAddress && walletAddress.substring(0, 2) === "0x") {
            const wallet = new ether.Wallet(walletAddress);
            const sessionResponse = yield call(getUserSessionId);
            if (!sessionResponse.sessionToken) throw new Error("Login failed");
            const { sessionToken } = sessionResponse;
            const signature = wallet.signMessage(sessionToken);
            if (!signature) throw new Error("Login failed");
            const loginBody = {
                signature: signature,
                walletAddress: wallet.address
            }
            const loginResponse = yield call(verifyMessage, loginBody);
            const { message, body, token } = loginResponse;

            const decodedToken = jwt_decode(token);
            sessionStorage.setItem("AuthToken", token);

            console.log("Decoded", JSON.stringify(decodedToken))

            const expireyTime = Date.now();

            yield put({
                type: LOGIN_USER_SUCCESSFUL,
                message: message,
                user: body,
                expiryTime: expireyTime
            })

        } else {
            throw new Error("Invalid wallet address");
        }
    } catch (exception) {
        yield put({
            type: LOGIN_USER_FAILURE,
            error: exception.message
        })
    }
}

export function* loginActionSaga() {
    yield takeEvery(LOGIN_USER, handleLoginAction);
}