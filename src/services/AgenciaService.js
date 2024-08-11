import api from './api';

export const fetchAgencias = () => api.get('/agencias');
export const createAgencia = (data) => api.post('/agencias', data);
export const updateAgencia = (id, data) => api.put(`/agencias/${id}`, data);
export const deleteAgencia = (id) => api.delete(`/agencias/${id}`);
