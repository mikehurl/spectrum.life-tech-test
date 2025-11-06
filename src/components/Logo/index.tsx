import Image from "next/image";
import styles from "./index.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div>Powered by</div>
      <Image alt="Spectrum.life logo" height={10} src="/logo.png" width={92} />
    </div>
  );
}
