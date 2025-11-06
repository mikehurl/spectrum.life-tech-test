import { type HTMLAttributes } from "react";
import styles from "./index.module.css";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  content: string;
};

export default function Heading({ content }: HeadingProps) {
  return <h1 className={styles.heading}>{content}</h1>;
}
