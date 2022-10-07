import * as React from "react";
import { hStack, HStackVariants, vStack, VStackVariants } from "./stack.css";

type VStackProps = VStackVariants & {
  children: React.ReactNode;
};
export const VStack = ({ children, ...props }: VStackProps): JSX.Element => (
  <div className={vStack(props)}>{children}</div>
);

type HStackProps = HStackVariants & {
  children: React.ReactNode;
};

export const HStack = ({ children, ...props }: HStackProps): JSX.Element => (
  <div className={hStack(props)}>{children}</div>
);
