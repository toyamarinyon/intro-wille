import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import OP from "open-props";

const sizes = {
  "000": OP["size000"],
  0: OP["size00"],
  1: OP["size1"],
  2: OP["size2"],
  3: OP["size3"],
  4: OP["size4"],
  5: OP["size5"],
  6: OP["size6"],
  7: OP["size7"],
  8: OP["size8"],
  9: OP["size9"],
  10: OP["size10"],
  11: OP["size11"],
  12: OP["size12"],
  13: OP["size13"],
  14: OP["size14"],
  15: OP["size15"],
  auto: "auto",
  full: "100%",
};

const spacing4dp = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
};
const spacing8dp = {
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  7: "56px",
  8: "64px",
  9: "72px",
};

const borderRadius = {
  sm: "2px",
  md: "5px",
};

const fontWeight = {
  normal: "500",
  strong: "700",
  bold: "900",
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { "@media": "screen and (min-width: 1024px)" },
    // desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: spacing4dp,
    paddingBottom: spacing4dp,
    paddingLeft: spacing4dp,
    paddingRight: spacing4dp,
    marginTop: spacing4dp,
    marginBottom: spacing4dp,
    marginLeft: { ...spacing4dp, auto: "auto" },
    marginRight: { ...spacing4dp, auto: "auto" },
    gap: spacing4dp,
    width: sizes,
    height: sizes,
    borderRadius,
    fontWeight,
    top: spacing4dp,
    bottom: spacing4dp,
    left: spacing4dp,
    right: spacing4dp,
    textAlign: {
      left: "left",
      center: "center",
      right: "right",
    },
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
