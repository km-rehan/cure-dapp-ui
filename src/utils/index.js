const USER_SESSION_ID_PATH = process.env.REACT_APP_USER_SESSION_ID_PATH || "/api/auth/getUserSessionId";
const VERIFY_MESSAGE_PATH =  process.env.REACT_APP_VERIFY_MESSAGE_PATH || "/api/auth/verifyMessage";
const WALLET_ADDRESS_LOGIN_PATH =  process.env.REACT_APP_WALLET_ADDRESS_LOGIN_PATH || "/api/auth/walletAddressLogin";
const SAVE_USER_PROFILE_PATH = process.env.REACT_APP_SAVE_USER_PROFILE_PATH || "/api/profile/saveUserProfile";
const GET_IMAGE_URL = process.env.REACT_APP_URL_IMAGE_PATH || "/api/profile/img/"
const GET_USER_PROFILE_PATH =  process.env.REACT_APP_GET_USER_PROFILE_PATH || "/api/profile/getUserProfile"

export const Constants = Object.freeze({
    USER_SESSION_ID_PATH: USER_SESSION_ID_PATH,
    VERIFY_MESSAGE_PATH: VERIFY_MESSAGE_PATH,
    WALLET_ADDRESS_LOGIN_PATH: WALLET_ADDRESS_LOGIN_PATH,
    SAVE_USER_PROFILE_PATH: SAVE_USER_PROFILE_PATH,
    GET_IMAGE_URL: GET_IMAGE_URL,
    GET_USER_PROFILE_PATH: GET_USER_PROFILE_PATH
})