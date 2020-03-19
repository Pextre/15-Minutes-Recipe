import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: {
    "accept": "*/*",
    "Content-Type": "application/json"
  }
});

export default api;
//module.exports = api;