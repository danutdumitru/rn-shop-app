import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Title } from "react-native-paper";
import { productsReducer } from "./store/reducers/products";
import { View } from "react-native";

const rootReducer = combineReducers({ products: productsReducer });
const store = createStore(rootReducer, composeWithDevTools());

const MainApp = props => {
  return (
    <Provider store={store}>
      <View>
        <Title>To be added....</Title>
      </View>
    </Provider>
  );
};

export default MainApp;
