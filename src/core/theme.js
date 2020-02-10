import { DefaultTheme, configureFonts } from "react-native-paper";
import { COLORS } from "./colors";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "open-sans-regular",
      fontWeight: "normal"
    },
    medium: {
      fontFamily: "open-sans-regular",
      fontWeight: "normal"
    },
    light: {
      fontFamily: "open-sans-light",
      fontWeight: "normal"
    },
    thin: {
      fontFamily: "open-sans-light",
      fontWeight: "normal"
    }
  }
};

export default theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    error: COLORS.error
  },
  fonts: configureFonts(fontConfig)
};
