import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import InputContext from "./context/InputContext";
import ThemeContext from "./context/ThemeContext";
import { ThemeValue } from "./context/ThemeContext";
import { useContext } from "react";
import Theme from "@/components/Theme";
import FloorContext from "./context/FloorContext";
import LiftProviders from "@/components/lifts/LiftProviders";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Lift Simulation RDS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative`}>
        <ThemeContext>
          <FloorContext>
            <div className="absolute right-0  z-10">
              <Theme />
            </div>
            <InputContext>{children}</InputContext>
          </FloorContext>
        </ThemeContext>
      </body>
    </html>
  );
}
