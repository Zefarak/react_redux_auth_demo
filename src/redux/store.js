import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

const store = function configureStore() {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(thunkMiddleware, createLogger()),
            autoRehydrate()
        )
    )
};
persistStore(store());
export default store;
