import {initialState} from "../../helpers/endpoints";
import {RECEIVE_DATA, REQUEST_DATA} from "../actions/actions_types";

function tables(state=initialState, action){
    switch (action.type){
        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_DATA:
            return Object.assign({}, state,{
                items: action.responseData,
                isFetching: false
            });
        default:
            return state
    }
}

export default tables;