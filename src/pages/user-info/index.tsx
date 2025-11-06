import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Progress from "@/components/Progress";
import { useFormContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getEmailFieldError,
  getNumericFieldError,
  getTextFieldError,
} from "./utils";

export default function UserInfo() {
  const { name, email, number, progress, setInputValue, setProgress } =
    useFormContext();

  const router = useRouter();

  const [isContinueButtonDisabled, setIsContinueButtonDisabled] =
    useState(true);

  useEffect(() => {
    const isNameValid = getTextFieldError(name) == null;
    const isNumberValid = getNumericFieldError(number) == null;
    const isEmailValid = getEmailFieldError(email) == null;

    if (isNameValid && isNumberValid && isEmailValid) {
      setIsContinueButtonDisabled(false);

      if (setProgress) {
        setProgress(50);
      }
    }
  }, [email, name, number, setProgress]);

  async function handleContinue() {
    await router.push("/selection");
  }

  return (
    <div>
      <div>
        <Progress progress={progress} />
      </div>
      <form>
        <div>
          <Heading content="Please confirm or add to the below GP Contact Details." />
          <Input
            handleChange={setInputValue}
            label="GP Name"
            name="name"
            type="text"
            validator={getTextFieldError}
            value={name}
          />
          <Input
            handleChange={setInputValue}
            label="Email"
            name="email"
            type="email"
            validator={getEmailFieldError}
            value={email}
          />
          <Input
            handleChange={setInputValue}
            label="Contact number"
            name="number"
            type="text"
            validator={getNumericFieldError}
            value={number}
          />
        </div>
        <div>
          <div>
            <div>
              <Button content="Previous" type="button" variant="secondary" />
            </div>
            <div>
              <Button
                content="Continue"
                isDisabled={isContinueButtonDisabled}
                onClick={handleContinue}
                type="button"
                variant="primary"
              />
            </div>
          </div>
          <div>
            <Logo />
          </div>
        </div>
      </form>
    </div>
  );
}
