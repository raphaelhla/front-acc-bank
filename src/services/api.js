import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.raphaelagra.com.br'});

export default api;

