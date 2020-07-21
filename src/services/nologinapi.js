import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4200";


export const nologinapi = (token) => axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
})

const nologinforfiles = (token) => axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    responseType: 'arraybuffer',
    headers: {
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
})

export const nologinApiFormUpload = (token) => axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`    
    },
    withCredentials: true
})

export {
    nologinforfiles
}