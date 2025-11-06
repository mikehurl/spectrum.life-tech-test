import { type ProgressHTMLAttributes } from "react";

type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & {
  progress: number;
};

export default function Progress({ progress }: ProgressProps) {
  return (
    <progress max="100" value={progress}>
      {`${progress}%`}
    </progress>
  );
}
