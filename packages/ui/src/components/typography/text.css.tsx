import { style } from "@vanilla-extract/css";
import { sprinkles } from "@styles/sprinkles.css";

export const text = style([
  sprinkles({
    paddingX: 0,
    paddingY: 0,
  }),
  {
    marginBlock: 0,
    marginInline: 0,
  },
]);
