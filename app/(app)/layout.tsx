import "@/app/globals.css";
import { inter } from "@/app/(app)/fonts";

export const metadata = {
  title: "TS Gunpla",
  description: "Portfolio featuring Gunpla model builds by TS Gunpla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
