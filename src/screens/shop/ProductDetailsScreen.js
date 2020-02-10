import React from "react";

import { View } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";

const ProductDetailsScreen = ({ navigation }) => {
  const productId = navigation.getParam("productId");
  const product =
    productId &&
    useSelector(
      state =>
        state.products.availableProducts &&
        state.products.availableProducts.find(
          product => product.id === productId
        )
    );

  return (
    <View>
      <Text>{product && product.title}</Text>
    </View>
  );
};
export default ProductDetailsScreen;
