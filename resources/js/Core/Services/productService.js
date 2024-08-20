import apiClient, { BASE_URL } from '../Api/ApiClient';

const getApi= () => {
    return BASE_URL + 'api/product';
}

const CRUD_PRODUCT = BASE_URL+'/products';

export function getAllProducts() {
    return apiClient.get(getApi());
}

export function createProduct(productData) {
    return apiClient.post(CRUD_PRODUCT, productData);
}

export function readProduct(productData) {
    // ¿Existe una función para Read?
}

export function updateProduct(productId, productData) {
    return apiClient.put(`${CRUD_PRODUCT}/${productId}`, productData);
}

export function deleteProduct(productId) {
    return apiClient.delete(`${CRUD_PRODUCT}/${productId}`);
}

export const API_PRODUCT = getApi();


