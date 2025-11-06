import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import Progress from "@/components/Progress";
import Radio from "@/components/Radio";
import { useFormContext } from "@/context";
import styles from "@/styles/booking.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Selection() {
  const { format, progress, setFormat, setProgress } = useFormContext();

  const router = useRouter();

  const [isContinueButtonDisabled, setIsContinueButtonDisabled] =
    useState(true);

  useEffect(() => {
    if (format !== null) {
      setIsContinueButtonDisabled(false);

      if (setProgress) {
        setProgress(100);
      }
    }
  }, [format]);

  async function handleContinue() {
    await router.push("/booking-confirmation");
  }

  function handlePrevious() {
    router.back();
  }

  return (
    <div className={styles.page}>
      <div className={styles.progress}>
        <Progress progress={progress} />
      </div>
      <form className={styles.form}>
        <div className={styles.questions}>
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
        <div className={styles.footer}>
          <div className={styles.actions}>
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

          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </form>
    </div>
  );
}
