"use client";
import { PortableTextBlock } from "sanity";
import Tilt from "react-parallax-tilt";
import { koulen, space_grotesk } from "../fonts";
import { PortableText } from "@portabletext/react";
import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";

type CardProps = {
  title: string;
  body: PortableTextBlock[];
  image: string;
  path: string;
};

export default function Card({ title, body, image, path }: CardProps) {
  const [isHover, setIsHover] = useState(false);
  const bgImage = {
    backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${image})`,
  };

  return (
    <div
      className={`${isHover ? "z-10" : "z-0"} basis-auto`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Tilt tiltReverse={true} scale={1.3} glareEnable={true}>
        <Link
          href={path}
          className={`block h-full p-6 rounded-md bg-cover max-w-sm transition duration-100 hover:shadow-md hover:shadow-gray-700/60 ${koulen.className}`}
          style={bgImage}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <p className={`font-normal ${space_grotesk.className}`}>
            <PortableText value={body} />
          </p>
        </Link>
      </Tilt>
    </div>
  );
}
