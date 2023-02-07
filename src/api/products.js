import axios from 'axios';

// Set up products API instance
const productsAPI = axios.create({
    baseURL: 'https://efuktshirts.com/products.json',
    timeout: 1000
});

export const getProducts = (data = '', params, payload) => {
    return productsAPI.get(data, { params: params }, payload)
}