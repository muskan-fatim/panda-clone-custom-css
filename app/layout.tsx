import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "panda clone",
  description: "panda clone using next js and custom css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
