import Image from "next/image";
import logo from "@/public/logo.png";
import { koulen } from "../fonts";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div
        className={`flex flex-wrap items-center justify-between p-4 ${koulen.className}`}
      >
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt={"TS Gunpla Logo"} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
            TS Gunpla
          </span>
        </Link>

        <ul className="font-medium flex gap-2 p-4 md:p-0 mt-4 border rounded-md md:flex-row md:mt-0 md:border-0">
          <li>
            <Link href={"/about"}>
              <button className="text-opacity-80 hover:text-opacity-100 bg-transparent bg-opacity-25 hover:bg-slate-900 transition duration-200 text-white font-semibold py-2 px-3 rounded-md shadow-md hover:shadow-cyan-400/30">
                About
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/projects"}>
              <button className="text-opacity-80 hover:text-opacity-100 bg-transparent bg-opacity-25 hover:bg-slate-900 transition duration-200 text-white font-semibold py-2 px-3 rounded-md shadow-md hover:shadow-cyan-400/30">
                Projects
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <button className="text-opacity-80 hover:text-opacity-100 bg-transparent bg-opacity-25 hover:bg-slate-900 transition duration-200 text-white font-semibold py-2 px-3 rounded-md shadow-md hover:shadow-cyan-400/30">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
