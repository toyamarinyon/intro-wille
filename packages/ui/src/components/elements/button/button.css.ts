import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { createVar } from "@vanilla-extract/css";
import { vars } from "@theme/theme.css";
import { block } from "@styles/block.css";

const surface = createVar();
const text = createVar();
const hoverTextDecoration = createVar();
export const button = recipe({
  base: [
    block,
    {
      vars: {
        [text]: vars.color.onPrimary,
        [hoverTextDecoration]: "none",
      },
      borderWidth: 0,
      display: "inline-flex",
      whiteSpace: "nowrap",
      backgroundColor: surface,
      color: text,
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      selectors: {
        "&:hover": {
          textDecoration: hoverTextDecoration,
        },
      },
    },
  ],
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    style: {
      solid: {
        vars: {
          [surface]: vars.color.primary,
        },
      },
      link: {
        vars: {
          [hoverTextDecoration]: "underline",
        },
      },
    },
  },
  defaultVariants: {
    style: "solid",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
