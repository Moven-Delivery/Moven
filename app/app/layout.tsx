import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moven | Delivery local para vender mais",
  description:
    "Plataforma local de delivery para negócios de comida venderem mais com loja própria, pedidos, fidelidade e gestão.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
