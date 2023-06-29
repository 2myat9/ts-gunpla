import { Inter, Koulen, Space_Grotesk } from "next/font/google";

export const koulen = Koulen({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
