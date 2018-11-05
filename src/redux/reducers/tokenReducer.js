import {SET_TOKEN} from "../../helpers/endpoints";

const tokenInitialState = null;

function token(state=tokenInitialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return action.data;
        default:
            return state
    }
}

export default token;