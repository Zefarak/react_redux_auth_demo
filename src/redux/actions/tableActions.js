import {RECEIVE_DATA, REQUEST_DATA} from "./actions_types";
import {lookupGetOptionsAuth, TABLES_ENDPOINT} from "../../helpers/endpoints";


function requestTables(){
    return{
        type: REQUEST_DATA
    }
}

function receiveTables(responseData){
    return {
        type: RECEIVE_DATA,
        responseData
    }
}

function fetchTables(token){
    return dispatch => {
        let my_lookup = lookupGetOptionsAuth(token);
        dispatch(requestTables());
        fetch(TABLES_ENDPOINT, my_lookup)
            .then(resp => resp.json())
            .then(responseData => dispatch(receiveTables(responseData)))
        }
    }


export function fetchTablesIfNeeded(token) {
    return (dispatch, token)=>{
        if(token !== undefined) {
            return dispatch(fetchTables(token))
        }
    }
}

