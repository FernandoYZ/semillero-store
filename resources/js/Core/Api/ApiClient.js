import axios from 'axios';

const getApiBaseUrl = () => {
    const BASE_URL='http://localhost/semillero-store/public/';
    return BASE_URL;
};

const apiClient = axios.create({
    baseURL: getApiBaseUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error: ', error);
        return Promise.reject(error);
    }
);

export const BASE_URL = getApiBaseUrl();
export default apiClient;


