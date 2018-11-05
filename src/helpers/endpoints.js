export const HOST = 'http://127.0.0.1:8000/';
export const PRODUCTS_ENDPOINT = HOST + 'api/product-list/';
export const CATEGORIES_ENDPOINT = HOST + 'api/category-list/';
export const AUTH_ENDPOINT = HOST + 'auth/';


export function lookupOptionsInclude(token){
    return {
    method: 'GET',
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ token
    },
    credentials: 'include'
}
}


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