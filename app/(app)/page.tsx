import Link from "next/link";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import { koulen, space_grotesk } from "./fonts";

export default function Home() {
  return (
    <div className="max-w-screen-lg h-screen mx-auto flex flex-col items-center">
      <NavBar />
      <div className="h-full flex flex-col gap-4 justify-center items-center">
        <div className={`text-6xl font-bold ${koulen.className}`}>
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
            TS Gunpla.
          </span>
        </div>
        <div className={`${space_grotesk.className}`}>
          Thanks for visiting my website. Have fun browsing!
        </div>
        <Link href="/projects">
          <Button text="See Projects" />
        </Link>
      </div>
    </div>
  );
}
