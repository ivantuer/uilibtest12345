import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#23A6F0",
      white: "white",
      white2: "#F9F9F9",
    },
    fonts: {
      Montserrat: "'Montserrat', sans-serif",
    },
  },
});
