import axios from 'axios';

const getApiBaseUrl = () => {
    return process.env.API_URL || 'http://localhost/semillero-store/public/';
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
        if (error.response) {
            console.error(`API Error (${error.response.status}): `, error.response.data.message);
        } else if (error.request) {
            console.error('Network Error: ', error.message);
        } else {
            console.error('Error: ', error.message);
        }
        return Promise.reject(error);
    }
);

export const BASE_URL = getApiBaseUrl();
export default apiClient;
