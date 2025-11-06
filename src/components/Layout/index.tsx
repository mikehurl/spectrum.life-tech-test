import { DM_Sans } from "next/font/google";
import { type ReactNode } from "react";
import styles from "./index.module.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${styles.layout} ${dmSans.variable}`}>{children}</div>
  );
}
