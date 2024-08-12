import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-100-26-107-150.compute-1.amazonaws.com:8080'});

export default api;

