import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moven | Delivery em movimento",
  description: "Plataforma SaaS moderna para delivery local.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
