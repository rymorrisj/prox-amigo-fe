import axios from "axios";
// https://axios-http.com/docs/req_config

// Errors are returned by axios as data: response {
// code: 400
// message: "password must be at least 8 characters"
// stack: stackTrace
// }

export default axios.create({
    baseURL: 'http://localhost:3001/v1'
});