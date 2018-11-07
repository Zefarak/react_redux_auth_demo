import { RECEIVE_DATA, REQUEST_DATA } from "../actions/actions_types";


const tokenInitialState = '';

function token(state=tokenInitialState, action) {
    switch(action.type) {
        case RECEIVE_DATA:
            return action.responseData;
        default:
            return state
    }
}

export default token;