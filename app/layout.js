import MainProvider from "@/providers/MainProvider";
import localFont from "next/font/local";
import "./globals.css";

const impact = localFont({
  src: "../public/fonts/Impact.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-impact",
});

const neue = localFont({
  src: "../public/fonts/Neue.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-neue",
});

export const metadata = {
  title: "Rizz Pharma",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${impact.variable} ${neue.variable} antialiased`}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
