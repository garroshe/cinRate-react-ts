import axios from "axios";
import {API_BASE_URL, AUTH_TOKEN_URL} from "../constants";

export const getBaseApiHeaders = () => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN_URL}`
    };
};

const http = axios.create({
    baseURL: API_BASE_URL,
});

export default http;