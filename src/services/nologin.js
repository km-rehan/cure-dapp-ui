import { nologinapi, nologinApiFormUpload, nologinforfiles } from "./nologinapi";
import { Constants } from "../utils";
import * as base64encoder from "base64-stream";

export async function getUserProfile(token) {
    try {
        const response = await nologinapi(token).get(Constants.GET_USER_PROFILE_PATH);
        return response.data;
    } catch (exception) {
        throw exception;
    }
}

export async function saveUserProfile(body, token) {
    try {
        const response = await nologinApiFormUpload(token).post(Constants.SAVE_USER_PROFILE_PATH, body);
        return response;
    } catch (exception) {
        throw exception;
    }
}

export async function getProfileImageUrl(image, token) {
    try {
        const response = await nologinforfiles(token).get(`${Constants.GET_IMAGE_URL}${image}`, {
            responseType: "arraybuffer"
        });
        if (response.status !== 200) {
            throw new Error("Image no available")
        }
        const base64 = Buffer.from(response.data, 'binary').toString('base64');
        const imageurl = `data:image/jpg;base64,${base64}`;
        return imageurl;
    } catch (exception) {
        throw exception;
    }
}