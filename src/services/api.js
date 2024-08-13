import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.accbankbrasil.com.br'});

export default api;

