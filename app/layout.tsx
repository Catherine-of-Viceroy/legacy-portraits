import type { Metadata } from "next";
import { Belanosima, DM_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-belanosima",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-dm-sans",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legacy Portraits",
  description: "Legacy Portraits is a photography studio that specializes in capturing the beauty of nature and the human experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${belanosima.variable} ${dmSans.variable} ${nunitoSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
