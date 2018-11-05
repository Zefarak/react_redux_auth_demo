import {createStore, applyMiddleware, compose} from 'redux';
import thunk  from 'redux-thunk';
import { persistStore } from 'redux-persist';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
};


