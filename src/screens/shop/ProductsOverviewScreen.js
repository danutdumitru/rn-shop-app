import React from "react";

import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { ROUTES } from "../../core/routes";

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const navigateToProductDetails = (productId) => {
      props.navigation.navigate({
          routeName: ROUTES.shop.ProductDetails,
          params: {
              productId: productId
          }
      });
  }  

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductCard key={itemData.item.id} product={itemData.item} onProductPress={navigateToProductDetails} />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  title: "All Products"
};

export default ProductsOverviewScreen;
