import { nologinapi, nologinApiFormUpload } from "./nologinapi";
import { Constants } from "../utils";
import * as base64encoder from "base64-stream";

export async function saveUserProfile(body) {
    try {
        const response = await nologinApiFormUpload.post(Constants.SAVE_USER_PROFILE_PATH, body);
        return response;
    } catch (exception) {
        throw exception;
    }
}

export async function getProfileImageUrl(image) {
    try {
        const response = await nologinapi.get(`${Constants.GET_IMAGE_URL}${image}`, {
            responseType: "stream"
        });
        if (response.status !== 200) {
            throw new Error("Image no available")
        }
        return response.pipe(new base64encoder.Base64Encode()).pipe(process.stdout);
    } catch (exception) {
        throw exception;
    }
}