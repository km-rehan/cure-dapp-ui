import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4200";


export const nologinapi = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("AuthToken", "")}`
    },
    withCredentials: true
})

export const nologinApiFormUpload = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${sessionStorage.getItem("AuthToken", "")}`    
    },
    withCredentials: true
})