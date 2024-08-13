import api from './api';

export const fetchExtratoGeral = (id,) => api.get(`/contas-correntes/${id}/extrato`);
export const fetchExtratoMensal = (id, mesAno) => api.get(`/contas-correntes/${id}/extrato-mensal?mesAno=${mesAno}`);
export const fetchExtratoAnual = (id, ano) => api.get(`/contas-correntes/${id}/extrato-anual?ano=${ano}`);
export const fetchExtratoFiltrado = (id, dataInicio, dataFim) => api.get(`/contas-correntes/${id}/extrato-filtrado?dataInicio=${dataInicio}&dataFim=${dataFim}`);

