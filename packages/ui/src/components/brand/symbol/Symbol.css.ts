import { responsiveStyle } from "@styles/helper.css";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const blobContainer = style([
  {
    position: "relative",
    width: "40%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  responsiveStyle({
    desktop: {
      height: 240,
    },
  }),
]);

const rotateRight = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const rotateLeft = keyframes({
  "0%": { transform: "rotate(360deg)" },
  "100%": { transform: "rotate(0deg)" },
});

export const blobItem = recipe({
  base: {
    position: "absolute",
    opacity: 0.3,
    animation: rotateRight,
    animationDuration: "20s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    fill: "currentColor",
    height: "100%",
  },
  variants: {
    color: {
      blue: {
        color: "#269fff",
      },
      pink: {
        color: "#ffde0b",
      },
      lime: {
        color: "#3B5BDB",
      },
      yellow: {
        color: "#66ffd5",
      },
      grape: {
        color: "#de54ff",
      },
    },
    animationDirection: {
      right: { animationName: rotateRight },
      left: { animationName: rotateLeft },
    },
    animationDuration: {
      17: { animationDuration: "62s" },
      18: { animationDuration: "120s" },
      19: { animationDuration: "90s" },
      20: { animationDuration: "100s" },
      21: { animationDuration: "110s" },
      22: { animationDuration: "80s" },
    },
  },
});

export const svg = style({
  fill: "currentColor",
});
