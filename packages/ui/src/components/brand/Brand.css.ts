import { responsiveStyle } from "@styles/helper.css";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@theme/theme.css";
import { style } from "@vanilla-extract/css";

export const logo = style([
  {
    width: 140,
  },
  responsiveStyle({
    desktop: {
      width: '100%',
      maxWidth: 200,
    },
  }),
]);

export const tagline = style([
  sprinkles({
    textAlign: {
      mobile: "center",
      desktop: "left",
    },
  }),
  {
    fontSize: "clamp(18px, 4vw, 24px)",
    color: vars.color.textLight,
    width: "100%",
  },
  responsiveStyle({
    desktop: {
      width: "20em",
    },
  }),
]);

export const logoLayout = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: {
      mobile: "center",
      desktop: "flex-start",
    },
    gap: {
      mobile: 2,
      desktop: 1,
    },
    marginBottom: {
      mobile: 6,
      desktop: 0,
    },
  }),
]);
