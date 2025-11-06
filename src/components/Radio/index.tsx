import { type Format } from "@/context";
import { type InputHTMLAttributes } from "react";
import styles from "./index.module.css";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  handleChange?: (value: Format) => void;
  label: Format;
  selectedFormat: Format;
};

export default function Radio({
  handleChange,
  label,
  selectedFormat,
}: RadioProps) {
  const id = `${label?.toLocaleLowerCase()}-radio`;

  return (
    <div className={styles.radio}>
      <label className={styles.label} htmlFor={id}>
        {label}
        <input
          checked={selectedFormat === label}
          className={styles.input}
          id={id}
          onChange={() => {
            if (handleChange) {
              handleChange(label);
            }
          }}
          name="selection"
          type="radio"
        />
      </label>
    </div>
  );
}
