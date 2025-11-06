import { type ProgressHTMLAttributes } from "react";
import styles from "./index.module.css";

type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & {
  progress: number;
};

export default function Progress({ progress }: ProgressProps) {
  return (
    <progress className={styles.progress} max="100" value={progress}>
      {`${progress}%`}
    </progress>
  );
}
