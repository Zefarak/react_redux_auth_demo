import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS,INVALIDATED } from "./actions";
import categoryReducer from './reducers/categoryReducer.js';
import token from './reducers/tokenReducer.js';
import {initialState} from "../helpers/endpoints";


function products(state=initialState, action) {
  switch (action.type) {
    case INVALIDATED:
      return Object.assign({}, state, {
        didInvalidaded: true
      });
      case REQUEST_PRODUCTS:
          return Object.assign({}, state, {
              isFetching: true,
              didInvalidated: false
          });
      case RECEIVE_PRODUCTS:
          console.log('receive data reducer!', action);
          return Object.assign({}, state, {
              items: action.responseData,
              isFetching: false,
              didInvalidated: false
          });
      default:
          return state
  }
}

function productsReducer(state=initialState, action) {
    switch (action.type){
        case INVALIDATED:
        case RECEIVE_PRODUCTS:
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                items: action.responseData
            })
    }
}

const rootReducer = combineReducers({
    products,
    categoryReducer,
    token
});



export default rootReducer;