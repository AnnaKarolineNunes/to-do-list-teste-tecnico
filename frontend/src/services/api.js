import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_APP
});

export default api;
