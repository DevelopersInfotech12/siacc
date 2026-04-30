import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "./Components/WhatsAppWidget";

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