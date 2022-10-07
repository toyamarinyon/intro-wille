import { style } from "@vanilla-extract/css";

export const lineClamp = style({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: "hidden",
});
