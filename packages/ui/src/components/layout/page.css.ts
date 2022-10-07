import { responsiveStyle } from "@styles/helper.css";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../theme/theme.css";

export const header = style([
  sprinkles({
    paddingY: 2,
    paddingX: 6,
  }),
  {
    backgroundColor: vars.color.primaryLightVariant,
    color: vars.color.onPrimary,
  },
]);
export const headerContent = style([
  sprinkles({
    marginX: "auto",
  }),
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
]);
export const layout = style([
  sprinkles({
    marginX: "auto",
    paddingTop: 5,
    paddingX: {
      mobile: 9,
      desktop: 4,
    },
  }),
  {
    width: "100%",
    maxWidth: "100%",
  },
  responsiveStyle({
    desktop: {
      maxWidth: 1100,
    },
  }),
]);
export const logoutLink = style({
  color: vars.color.onPrimary,
});
