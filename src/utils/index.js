const USER_SESSION_ID_PATH = process.env.REACT_APP_USER_SESSION_ID_PATH || "/api/auth/getUserSessionId";
const VERIFY_MESSAGE_PATH =  process.env.REACT_APP_VERIFY_MESSAGE_PATH || "/api/auth/verifyMessage";
const WALLET_ADDRESS_LOGIN_PATH =  process.env.REACT_APP_WALLET_ADDRESS_LOGIN_PATH || "/api/auth/walletAddressLogin";

export const Constants = Object.freeze({
    USER_SESSION_ID_PATH: USER_SESSION_ID_PATH,
    VERIFY_MESSAGE_PATH: VERIFY_MESSAGE_PATH,
    WALLET_ADDRESS_LOGIN_PATH: WALLET_ADDRESS_LOGIN_PATH
})