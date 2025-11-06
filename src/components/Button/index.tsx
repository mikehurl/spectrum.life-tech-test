import classNames from "classnames";
import { type ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
  isDisabled?: boolean;
  variant: "primary" | "secondary";
};

export default function Button({
  content,
  isDisabled,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, styles[variant])}
      disabled={isDisabled}
      {...rest}
    >
      {content}
    </button>
  );
}
