import axios from 'axios'
import _ from 'lodash';
import {AUTH_ENDPOINT} from "../../helpers/endpoints";
import store from '../store.js'
import { REQUEST_DATA, RECEIVE_DATA } from './actions_types';


function setToken(data){
    return{
        type: REQUEST_DATA,
        data
    }
}

function receiveToken(responseData){
    return{
        type: RECEIVE_DATA,
        responseData
    }
}

export function fetchLogin(){
    return dispatch => {
        dispatch(setToken());
        return axios.post(AUTH_ENDPOINT, {
            username:'admin',
            password: 'adminadm'
        })
        .then(function(response){
            dispatch(receiveToken(response))
        })
        .catch(function(error){
            if (_.get(error, 'response.status')===400){
                throw new InvalidCredentialsException
            }
            throw error
        })
    }
}

export const apiClient = function() {
    const token = store.getState().token;
    const params ={
        baseURL: AUTH_ENDPOINT,
        headers: {'Authorization': 'Token '+ token}
    }
    return axios.create(params);
}

export function loggedIn(){
    return store.getState().token !== null;
}

export function InvalidCredentialsException(message) {
    this.message = message;
    this.name = 'InvalidCredentialsException'
}

export function auth_login() {
    return (dispatch) => {
        return dispatch(fetchLogin())  
    }
}




