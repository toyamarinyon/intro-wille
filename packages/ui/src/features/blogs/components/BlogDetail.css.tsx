import { responsiveStyle } from "@styles/helper.css";
import { vars } from "@theme/theme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  fontSize: "clamp(30px, 5vw, 50px)",
});

export const postedAt = style({
  color: vars.color.textLight,
});

export const body = style([
  {
    fontSize: "clamp(14px, 5vw, 20px)",
    lineHeight: 1.3,
  },
  responsiveStyle({
    desktop: {
      lineHeight: 1.6,
    },
  }),
]);
