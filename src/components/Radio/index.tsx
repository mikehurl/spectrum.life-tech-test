import { type Format } from "@/context";
import { type InputHTMLAttributes } from "react";

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
    <div>
      <label htmlFor={id}>
        {label}
        <input
          checked={selectedFormat === label}
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
