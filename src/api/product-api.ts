import axios, { AxiosResponse } from 'axios';

import { API_PATHS } from '@/constants/api-paths';
import { Product } from '@/models/product';

import productList from './productList.json';

const fetchAvailableProducts = async (): Promise<AxiosResponse> => {
	return axios
		.get(`${API_PATHS.product}/products/`)
		.then(res => res.data)
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return productList;
		});
};

const fetchProducts = async (): Promise<any> => {
	return axios
		.get(`${API_PATHS.product}/products`)
		.then(res => res.data)
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return productList;
		});
};

const fetchProductById = async (id: string) => {
	console.info(`GET fetchProductById: ${id}`);

	return axios.get(`${API_PATHS.product}/products/${id}`).then(res => res.data);
};

const deleteProductById = (id: string) => {
	console.info(`DELETE deleteProductById: ${id}`);

	return axios.delete(`${API_PATHS.bff}/product/${id}`);
};

const saveProduct = (productToSave: Product) => {
	console.info(`PUT saveProduct: ${JSON.stringify(productToSave)}`);
	const obj = {
		...productToSave,
		count: undefined,
	};
	return axios.post(`${API_PATHS.product}/products/`, obj);
};

const saveStock = (productToSave: any) => {
	console.info(`PUT saveProduct: ${JSON.stringify(productToSave)}`);
	return axios.post(`${API_PATHS.product}/stock`, productToSave);
};

export const productApi = {
	fetchAvailableProducts,
	deleteProductById,
	fetchProducts,
	fetchProductById,
	saveProduct,
	saveStock,
};
