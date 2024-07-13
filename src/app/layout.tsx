import type { Metadata } from "next";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'
import localFont from 'next/font/local'
 
const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeueLight.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/HelveticaNeueRoman.otf',
      weight: '400'
    },    
  ],
  variable: '--font-helvetica'
})

export const metadata: Metadata = {
  title: "Star Wars Pay",
  description: "The first interplanetary payment 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} font-sans`}>{children}</body>
    </html>
  );
}