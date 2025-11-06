import { createContext, useContext, useState, type ReactNode } from "react";

export type Format = "Audio" | "Video" | null;

type FormContextType = {
  email: string;
  format: Format;
  name: string;
  number: string;
  setFormat?: (value: Format) => void;
  setInputValue?: (value: string, fieldName: string) => void;
};

const defaultState = {
  email: "",
  format: null,
  name: "",
  number: "",
};

const FormContext = createContext<FormContextType>(defaultState);

type FormContextProviderProps = {
  children: ReactNode;
};

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [email, setEmail] = useState(defaultState.email);
  const [format, setFormat] = useState<Format>(defaultState.format);
  const [name, setName] = useState(defaultState.name);
  const [number, setNumber] = useState(defaultState.number);

  function setInputValue(value: string, fieldName: string) {
    switch (fieldName) {
      case "email":
        setEmail(value);
        break;
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  }

  return (
    <FormContext.Provider
      value={{
        email,
        format,
        name,
        number,
        setFormat,
        setInputValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
