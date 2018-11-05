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
import store from './redux/store.js';
import {fetchProductsIfNeeded} from "./redux/actions";
import {fetchCategoriesIfNeeded} from "./redux/actions/categoryActions";


store.dispatch(fetchProductsIfNeeded());
store.dispatch(fetchCategoriesIfNeeded());
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
