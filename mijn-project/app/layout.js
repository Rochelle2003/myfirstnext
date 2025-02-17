import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Oefening met next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

         <Header />
         
         {children}
      </body>
    </html>
  );
}
