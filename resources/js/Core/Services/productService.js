import apiClient, { BASE_URL } from '../Api/ApiClient';

const endpoints = {
    getAll: `${BASE_URL}api/products`,
    create: `${BASE_URL}api/products`,
    update: (productId) => `${BASE_URL}api/products/${productId}`,
    delete: (productId) => `${BASE_URL}api/products/${productId}`,
    show: (productId) => `${BASE_URL}api/products/${productId}`,
};

export function getAllProducts() {
    return apiClient.get(endpoints.getAll);
}

export function createProduct(productData) {
    return apiClient.post(endpoints.create, productData);
}

export function readProduct(productId) {
    return apiClient.get(endpoints.show(productId));
}

export function updateProduct(productId, productData) {
    return apiClient.put(endpoints.update(productId), productData);
}

export function deleteProduct(productId) {
    return apiClient.delete(endpoints.delete(productId));
}
