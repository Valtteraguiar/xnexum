import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://xnexum.com.br"),
  title: "xNexum — Onde conexões se tornam sistema.",
  description:
    "Plataformas digitais, sistemas inteligentes e infraestrutura SaaS multi-tenant para organizações modernas.",
  keywords: [
    "xNexum",
    "plataforma institucional",
    "SaaS",
    "assembleias digitais",
    "gestão sindical",
  ],
  openGraph: {
    title: "xNexum",
    description: "Onde conexões se tornam sistema.",
    type: "website",
    images: [{ url: "/brand/xnexum_logo_color.png", width: 970, height: 460, alt: "xNexum" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={GeistSans.variable}>
      <body className="font-sans min-h-dvh">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
