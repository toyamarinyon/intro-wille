import { style } from "@vanilla-extract/css";
import { block } from "@styles/block.css";
import { sprinkles } from "@styles/sprinkles.css";

export const fieldSet = style([
  sprinkles({
    gap: 1,
    display: "flex",
    flexDirection: "column",
  }),
]);

export const label = style([
  sprinkles({
    fontWeight: "strong",
  }),
]);

export const field = style([block]);

export const textArea = style([field]);
