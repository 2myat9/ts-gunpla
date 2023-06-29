import ContactCard from "../components/ContactCard";
import NavBar from "../components/NavBar";
import { koulen, space_grotesk } from "../fonts";
import Instagram from "@/public/insta.png";
import Reddit from "@/public/reddit.png";

export default async function About() {
  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col items-center gap-12 mb-24 ${space_grotesk.className}`}
    >
      <NavBar />
      <div
        className={`${koulen.className} text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400`}
      >
        Ways to Reach Me
      </div>
      <div className="mt-24 flex gap-12">
        <ContactCard
          url=""
          logoSrc={Instagram}
          alt="instagram logo"
          username="@ts-gunpla"
        />
        <ContactCard
          url=""
          logoSrc={Reddit}
          alt="reddit logo"
          username="@thorsits"
        />
      </div>
    </div>
  );
}
