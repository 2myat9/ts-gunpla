"use client";
import { getAbout } from "@/sanity/sanity-utils";
import NavBar from "../components/NavBar";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents from "@/app/(studio)/myPortableTextComponents";
import { koulen, space_grotesk } from "../fonts";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default async function About() {
  const about = await getAbout();
  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col items-center gap-12 mb-24 ${space_grotesk.className}`}
    >
      <NavBar />
      <div
        className={`${koulen.className} text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400`}
      >
        {about.heading}
      </div>
      <Tilt tiltReverse={true} scale={1.3}>
        <div className="rounded-md bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400 to-emerald-400">
          <Image
            className="p-1"
            src={about.url}
            alt="Picture of Thawsitt"
            width={about.metadata.dimensions.width / 2}
            height={about.metadata.dimensions.height / 2} // halve original dimensions to create sharper image
          />
        </div>
      </Tilt>

      <div className="max-w-screen-sm flex flex-col items-center gap-4">
        <PortableText
          value={about.content}
          components={myPortableTextComponents}
        />
        <Link href={"/contact"}>
          <Button text="let's get in touch" />
        </Link>
      </div>
    </div>
  );
}
