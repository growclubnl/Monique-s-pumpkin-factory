import type { Metadata } from "next";
import { Anonymous_Pro, Bakbak_One, Gasoek_One } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const anonymousPro = Anonymous_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anonymous",
});

const bakbakOne = Bakbak_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bakbak",
});

const gasoekOne = Gasoek_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gasoek",
});

export const metadata: Metadata = {
  title: "Monique's Pumpkin Factory",
  description:
    "Welkom bij Monique's Pumpkin Factory in Lisse — pompoenen, sfeer en het seizoen. Maandag t/m zondag geopend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${anonymousPro.variable} ${bakbakOne.variable} ${gasoekOne.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
