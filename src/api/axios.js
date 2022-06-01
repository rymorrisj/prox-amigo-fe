import axios from "axios";
// https://axios-http.com/docs/req_config

// Errors are returned by axios as data: response {
// code: 400
// message: "password must be at least 8 characters"
// stack: stackTrace
// }
const BASE_URL = 'http://localhost:3001/v1';

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});