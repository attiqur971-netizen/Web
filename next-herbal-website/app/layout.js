import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nature&apos;s Cure - Dr. Hakeem Hamid Raza, FTJ</title>
        <meta name="description" content="Premium Herbal Products and Consultations by Physician Dr. Hakeem Hamid Raza, FTJ (Tib Council Islamabad, Pakistan)." />
      </head>
      <body className={`${outfit.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
