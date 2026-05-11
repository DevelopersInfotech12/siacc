import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import "./animations.css";
import WhatsAppWidget from "@/app/Components/WhatsAppWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: "Siacc India | Compliance & Certification Consultants",
  description:
    "India's trusted compliance consultancy. BIS, EPR, WPC, TEC, LMPC, BEE, ISO, CDSCO certifications made fast and easy.",
  icons: {
    icon: [
      { url: "/finalimages/starlogo.png", type: "image/png", sizes: "32x32" },
      { url: "/finalimages/starlogo.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/finalimages/starlogo.png",
    shortcut: "/finalimages/starlogo.png",
  },
  keywords:
    "BIS certification, EPR registration, WPC approval, TEC MTCTE, LMPC, BEE registration, ISO certification, CDSCO, compliance India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-[#F7FAF8] text-[#1A1A2E] antialiased">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}