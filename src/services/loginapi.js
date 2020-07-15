import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:4200"

export const loginapi = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers :{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export const reflect = p => p.then(v => ({ v, status: "fulfilled" }), e => ({ v: e.message, status: "rejected" }))