import { type HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  content: string;
};

export default function Heading({ content }: HeadingProps) {
  return <h1>{content}</h1>;
}
