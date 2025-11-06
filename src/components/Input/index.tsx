import { useState, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  handleChange?: (value: string, fieldName: string) => void;
  label: string;
  name: string;
  validator?: (value: string | undefined) => void;
  value: string;
};

export default function Input({
  handleChange,
  label,
  name,
  type,
  validator,
  value,
  ...rest
}: InputProps) {
  const [touched, setTouched] = useState(false);
  const errorMessage = validator && validator(value);
  const shouldDisplayErrorMessage = touched && errorMessage;

  const id = `${name}-input`;

  return (
    <div>
      <div key={name}>
        <label htmlFor={id}>{label}</label>
        <input
          autoComplete="off"
          id={id}
          onChange={(event) => {
            if (handleChange) {
              handleChange(event.currentTarget.value, name);
            }
          }}
          onBlur={() => setTouched(true)}
          name={name}
          value={value}
          type={type}
          {...rest}
        />
      </div>
      {shouldDisplayErrorMessage ? (
        <span role="alert" id={`${name}-error`}>
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
