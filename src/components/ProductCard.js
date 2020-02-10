import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { Card, Button } from "react-native-paper";
import Product from "../model/product";

const ProductCard = props => {
  const { product, onProductPress } = props;

  return (
    <View style={styles.cardContainer}>
      <Card elevation={5} onPress={() => onProductPress(product.id)}>
        <Card.Cover
          source={{ uri: product.imageUrl }}
          style={styles.imageContainer}
        />
        <Card.Content>
          <Card.Title
            title={product.title}
            titleStyle={{ alignSelf: "center" }}
            subtitle={"$" + product.price.toFixed(2)}
            subtitleStyle={{ alignSelf: "center" }}
          />
        </Card.Content>
        <Card.Actions>
          <View style={{ flex: 1 }}>
            <Button mode="contained" style={{ alignSelf: "flex-start" }}>
              Details
            </Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button mode="contained" style={{ alignSelf: "flex-end" }}>
              To cart
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 16,
    height: "100%"
  },
  imageContainer: {
    width: "100%"
  }
});

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired,
  onProductPress: PropTypes.func.isRequired
};

export default ProductCard;
