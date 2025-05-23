import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Seungjun Chong|Portfolio",
  description: "Explore the technical work and projects of Seungjun Chong.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Seungjun Chong | Software Developer</title>
        <meta name="description" content="Portfolio of Seungjun Chong" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
