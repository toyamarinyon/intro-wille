import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@theme/theme.css";
import { style } from "@vanilla-extract/css";

export const alert = style([
  sprinkles({
    width: "full",
    paddingX: 4,
    paddingY: 1,
  }),
  {
    backgroundColor: vars.color.primaryLightVariant,
    color: vars.color.onPrimary,
  },
]);

export const toastContentWrapper = style([
  {
    bottom: 4,
    fontWeight: "normal",
  },
  {
    position: "fixed",
  },
]);
