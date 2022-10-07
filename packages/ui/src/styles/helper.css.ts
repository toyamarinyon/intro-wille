import { StyleRule } from "@vanilla-extract/css";

export const responsiveStyle = ({ desktop }: { desktop: StyleRule }) => ({
  "@media": {
    "screen and (min-width: 1024px)": desktop,
  },
});
