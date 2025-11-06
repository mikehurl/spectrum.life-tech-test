import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <div>Powered by</div>
      <Image alt="Spectrum.life logo" height={10} src="/logo.png" width={92} />
    </div>
  );
}
