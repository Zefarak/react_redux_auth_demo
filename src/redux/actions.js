
import {lookupOptions, PRODUCTS_ENDPOINT} from "../helpers/endpoints";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const INVALIDATED = 'INVALIDATED';


function requestProducts() {
    return {
        type: REQUEST_PRODUCTS,
    }
}

function receiveProducts(responseData){
    return{
        type: RECEIVE_PRODUCTS,
        responseData
    }
}

export function invalidate(state) {
    return{
        type: INVALIDATED,
        state
    }
}

export function fetchProducts(){
    return dispatch => {
        dispatch(requestProducts());
        return fetch(PRODUCTS_ENDPOINT, lookupOptions).then(
            response => response.json()
        ).then(responseData=> dispatch(receiveProducts(responseData)))
    }
}

function shouldFetchProducts(state) {
    const products = state.items;
    if (!products){
        return true
    } else if (state.isFetching){
        return false
    } else {
        return state.didInvalidaded
    }
}

export function fetchProductsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchProducts(getState())){
            return dispatch(fetchProducts())
        }
    }
}