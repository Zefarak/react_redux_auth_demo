import {RECEIVE_DATA, REQUEST_DATA} from "./actions_types";
import {CATEGORIES_ENDPOINT, lookupOptions} from "../../helpers/endpoints";
import {fetchProducts} from "../actions";


function requestCategories() {
    return{
        type: REQUEST_DATA,
    }
}

function receiveCategories(responseData) {
    return {
        type: RECEIVE_DATA,
        responseData
    }
}

export function fetchCategories() {
    return dispatch =>{
        dispatch(requestCategories());
        return fetch(CATEGORIES_ENDPOINT, lookupOptions)
            .then(response => response.json())
            .then(responseData => dispatch(receiveCategories(responseData)))
    }
}

function shouldFetchCategories(state) {
    const categories = state.items;
    if (!categories){
        return true
    } else if (state.isFetching){
        return false
    } else {
        return state.didInvalidaded
    }
}

export function fetchCategoriesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchCategories(getState())){
            return dispatch(fetchCategories())
        }
    }
}