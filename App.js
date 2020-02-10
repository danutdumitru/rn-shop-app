import React, { useState } from "react";
import { Provider as ThemeProvider } from "react-native-paper";
import MainApp from "./src";
import theme from "./src/core/theme";
import { AppLoading } from "expo";
import * as Font from "expo-font";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const loadFonts = () => {
    return Font.loadAsync({
      "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
  };

  return dataLoaded === true ? (
    <ThemeProvider theme={theme}>
      <MainApp />
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => {
        setDataLoaded(true);
      }}
    />
  );
}
