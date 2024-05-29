import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./contexts/langContext";

const montSerrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "INSPA academy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
        <LangProvider>
            <body style={{background: "#1E1E1E"}} className={montSerrat.className}>{children}</body>
        </LangProvider>
    </html>
  );
}
