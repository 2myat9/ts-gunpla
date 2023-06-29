import "@/app/globals.css";

export const metadata = {
  title: "TS Gunpla",
  description: "Website for TS Gunpla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
