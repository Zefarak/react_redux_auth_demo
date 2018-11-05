import {RECEIVE_DATA, REQUEST_DATA} from "../actions/actions_types";
import {initialState} from "../../helpers/endpoints";


function categoryReducer(state=initialState, action) {
    switch (action.type){
        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.responseData
            });
        default:
            return state
    }
}

export default categoryReducer;