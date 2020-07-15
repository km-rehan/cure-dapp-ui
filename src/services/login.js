import { loginapi } from "./loginapi";
import { Constants } from "../utils";

export async function getUserSessionId() {
    try {
        const response = await loginapi.get(Constants.USER_SESSION_ID_PATH);
        const result = response.data;
        return result;
    } catch (exception) {
        throw exception;
    }
}

export async function verifyMessage(body) {
    try {
        const response = await loginapi.post(Constants.VERIFY_MESSAGE_PATH, body);
        const result = response.data;
        return result;
    } catch (exception) {
        throw exception;
    }
}