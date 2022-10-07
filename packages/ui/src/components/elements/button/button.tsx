import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { button, ButtonVariants } from "./button.css";
type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonVariants;
export const Button = ({ type, children, fullWidth, style }: Props): JSX.Element => {
  return (
    <button
      className={button({
        fullWidth,
        style
      })}
      type={type}
    >
      {children}
    </button>
  );
};
