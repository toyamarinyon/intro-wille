import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  fonts: {
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    heading:
      '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'ml, "Roboto Mono", Menlo, monospace',
  },
  color: {
    link: "#5c7cfa",
    linkVisited: "#5c7cfa",
    text: '#222',
    textLight: '#666',
    primary: "#37474f",
    primaryLightVariant: "#62727b",
    primaryDarkVariant: "#102027",
    onPrimary: "#ffffff",
  },
});
