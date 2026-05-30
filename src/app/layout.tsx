import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "Ni8d-jvz1-qbgQ0s8k9yxXWOiTmiTZrCffOttQM6r8s",
  },
  title: "SkylineSites – Webdesign Agentur aus Dreieich | Frankfurt & Umgebung",
  description: "Professionelle Websites ab 880 € – persönlich betreut, schnell geliefert, festpreisgarantiert. Webdesign aus Dreieich für Unternehmen in Frankfurt & Rhein-Main.",
  keywords: ["Webdesign Dreieich", "Webdesign Frankfurt", "Webdesign Agentur", "Website erstellen Frankfurt", "Website erstellen Dreieich", "SkylineSites"],
  authors: [{ name: "SkylineSites" }],
  creator: "SkylineSites",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
