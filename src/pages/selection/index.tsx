import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Radio from "@/components/Radio";
import { useFormContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Selection() {
  const { format, setFormat } = useFormContext();

  const router = useRouter();

  const [isContinueButtonDisabled, setIsContinueButtonDisabled] =
    useState(true);

  useEffect(() => {
    if (format !== null) {
      setIsContinueButtonDisabled(false);
    }
  }, [format]);

  async function handleContinue() {
    await router.push("/booking-confirmation");
  }

  function handlePrevious() {
    router.back();
  }

  return (
    <div>
      <form>
        <div>
          <Heading content="Select your preferred appointment format" />
          <Radio
            handleChange={setFormat}
            label="Video"
            selectedFormat={format === "Video" ? format : null}
          />
          <Radio
            handleChange={setFormat}
            label="Audio"
            selectedFormat={format === "Audio" ? format : null}
          />
        </div>
        <div>
          <div>
            <div>
              <Button
                content="Previous"
                onClick={handlePrevious}
                type="button"
                variant="secondary"
              />
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
        </div>
      </form>
    </div>
  );
}
