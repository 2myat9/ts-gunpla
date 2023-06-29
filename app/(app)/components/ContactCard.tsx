import Image, { StaticImageData } from "next/image";

type ContactCardProps = {
  logoSrc: StaticImageData;
  alt: string;
  url: string;
  username: string;
};

export default function ContactCard({
  logoSrc,
  alt,
  url,
  username,
}: ContactCardProps) {
  return (
    <a href={url}>
      <div className="flex flex-col gap-2 items-center transition-all duration-100 underline underline-offset-8 decoration-4 decoration-cyan-300/30 hover:decoration-cyan-300/90">
        <Image src={logoSrc} alt={alt} width={64} height={64} />
        <div className="">{username}</div>
      </div>
    </a>
  );
}
