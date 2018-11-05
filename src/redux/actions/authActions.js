import {SET_TOKEN} from "../../helpers/endpoints";

function setToken(data){
    return{
        type:SET_TOKEN,
        data
    }
}

