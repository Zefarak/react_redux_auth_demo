import { RECEIVE_DATA, REQUEST_DATA } from "../actions/actions_types";


const tokenInitialState = {
    token: null
};

function token(state=tokenInitialState, action) {
    switch(action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state);
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                token: action.responseData
            })
        default:
            return state
    }
}

export default token;