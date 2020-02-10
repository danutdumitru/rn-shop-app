import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { productsReducer } from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigation";

const rootReducer = combineReducers({ products: productsReducer });
const store = createStore(rootReducer, composeWithDevTools());

const MainApp = props => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default MainApp;
