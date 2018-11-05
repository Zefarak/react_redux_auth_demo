export const HOST = 'http://127.0.0.1:8000/';
export const PRODUCTS_ENDPOINT = HOST + 'api/product-list/';
export const CATEGORIES_ENDPOINT = HOST + 'api/category-list/';
export const SET_TOKEN = 'SET_TOKEN';


export const lookupOptions = {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'
    }
};

export const initialState = {
    items: [],
    sFetching: false,
    invalidate: false
};