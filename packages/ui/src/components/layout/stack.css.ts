import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";

const space = {
  0: sprinkles({ gap: 0 }),
  1: sprinkles({ gap: 1 }),
  2: sprinkles({ gap: 2 }),
  3: sprinkles({ gap: 3 }),
  4: sprinkles({ gap: 4 }),
  5: sprinkles({ gap: 5 }),
  6: sprinkles({ gap: 6 }),
  7: sprinkles({ gap: 7 }),
  8: sprinkles({ gap: 8 }),
  9: sprinkles({ gap: 9 }),
};
const alignItems = {
  start: {
    alignItems: "flex-start",
  },
  center: {
    alignItems: "center",
  },
  end: {
    alignItems: "flex-end",
  },
};
const variants = {
  space,
  alignItems,
  flex: {
    1: {
      flex: 1,
    },
  },
};

export const stack = recipe({
  base: [
    {
      display: "flex",
    },
  ],
  variants: {
    ...variants,
    direction: {
      row: {
        flexDirection: "row",
      },
      col: {
        flexDirection: "column",
      },
    },
  },
});
export type StackVariants = RecipeVariants<typeof stack>;

export const vStack = recipe({
  base: [
    {
      display: "flex",
      flexDirection: "column",
    },
  ],
  variants,
});

export type VStackVariants = RecipeVariants<typeof vStack>;

export const hStack = recipe({
  base: [
    {
      display: "flex",
      flexDirection: "row",
    },
  ],
  variants,
});

export type HStackVariants = RecipeVariants<typeof hStack>;
