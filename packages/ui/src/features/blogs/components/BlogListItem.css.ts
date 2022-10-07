import { lineClamp } from "@styles/lineClamp.css";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@theme/theme.css";
import { style } from "@vanilla-extract/css";

export const blogListItem = style([
  sprinkles({}),
  {
    color: vars.color.text,
  },
]);

export const postedAt = style({
  color: vars.color.textLight,
});

export const body = style([
  lineClamp,
  {
    lineHeight: 1.4,
  },
]);
