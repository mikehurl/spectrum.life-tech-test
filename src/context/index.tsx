import { createContext, useContext, useState, type ReactNode } from "react";

type FormContextType = {
  email: string;
  name: string;
  number: string;
  setInputValue?: (value: string, fieldName: string) => void;
};

const defaultState = {
  email: "",
  name: "",
  number: "",
};

const FormContext = createContext<FormContextType>(defaultState);

type FormContextProviderProps = {
  children: ReactNode;
};

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [email, setEmail] = useState(defaultState.email);
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
        name,
        number,
        setInputValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
