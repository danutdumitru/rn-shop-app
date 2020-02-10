import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { STACK_DEFAULT_NAVIGATION_OPTIONS } from "./commons.const";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";

const ShopNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen
  },
  {
    mode: "card",
    defaultNavigationOptions: STACK_DEFAULT_NAVIGATION_OPTIONS
  }
);

export default createAppContainer(ShopNavigator);
