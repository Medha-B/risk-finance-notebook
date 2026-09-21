import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Risk & Finance Notebook | Medha Bhattacharya",
  description: "Research-driven projects in financial risk, quantitative methods, and applied analytics."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
