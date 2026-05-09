import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkylineSites – Professionelles Webdesign",
  description: "Moderne, professionelle Websites für ambitionierte Unternehmen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
