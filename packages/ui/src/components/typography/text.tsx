import { DetailedHTMLProps, HTMLAttributes } from "react";
import { text } from "./text.css";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export const Text = ({ children, className, ...props }: Props): JSX.Element => {
  return <p className={`${text} ${className}`} {...props}>{children}</p>;
};
