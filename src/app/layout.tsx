// import type { Metadata } from "next";
// import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Providers from "./provider/providers";

// export const metadata: Metadata = {
//   title: "Exclusive",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
