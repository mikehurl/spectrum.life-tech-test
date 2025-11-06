import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
  isDisabled?: boolean;
  variant: "primary" | "secondary";
};

export default function Button({ content, variant, ...rest }: ButtonProps) {
  return <button {...rest}>{content}</button>;
}
