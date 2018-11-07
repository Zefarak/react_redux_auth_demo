import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "routes/index.jsx";
import {Provider} from 'react-redux';
import configureStore from './redux/store.js';
import {fetchProductsIfNeeded} from "./redux/actions";
import {fetchCategoriesIfNeeded} from "./redux/actions/categoryActions";
import { auth_login } from './redux/actions/authActions.js';
import {fetchTablesIfNeeded} from "./redux/actions/tableActions";


const store = configureStore();

store.dispatch(fetchProductsIfNeeded());
store.dispatch(fetchCategoriesIfNeeded());
store.dispatch(auth_login());
if (store.getState().token.data !== undefined){
    console.log('i am here')
    store.dispatch(fetchTablesIfNeeded(store.getState().token.data.token))
}
const hist = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
    </Provider>,
  document.getElementById("root")
);
