import React, { useEffect } from "react";

import { View, ScrollView, Image, StyleSheet } from "react-native";
import { Text, Button, Paragraph, Title } from "react-native-paper";
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

  useEffect(() => {
    console.log("[ProductDetailsScreen] - use effect");
    navigation.setParams({
      product: product
    });
  }, [product]);

  console.log("[ProductDetailsScreen]: render ", product);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.actionsContainer}>
          <Button mode="contained">Add to cart</Button>
        </View>

        <Title style={{textAlign: "center", marginVertical: 16}}>{"$" + product.price.toFixed(2)}</Title>
        <Paragraph style={{textAlign: "center", marginHorizontal: 16}}>{product.description}</Paragraph>
      </ScrollView>
    </View>
  );
};

ProductDetailsScreen.navigationOptions = navigationData => {
  const product = navigationData.navigation.getParam("product");
  return {
    title: product && product.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "stretch",
    justifyContent: "center"
  },
  actionsContainer: {
    marginVertical: 8,
    alignItems: "center"
  },
  image: {
    height: 300,
    width: "100%"
  }
});
export default ProductDetailsScreen;
