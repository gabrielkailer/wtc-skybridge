import type { Metadata } from "next";
import { Oswald, Open_Sans, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nav",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Espaço para Eventos Corporativos em SP | WTC Sky Bridge — Brooklin",
  description:
    "Espaço premium de 750 m² para eventos corporativos no complexo WTC São Paulo. Vista para a Ponte Estaiada, equipe dedicada e infraestrutura completa. Solicite seu orçamento.",
  openGraph: {
    title: "Espaço para Eventos Corporativos em SP | WTC Sky Bridge — Brooklin",
    description:
      "Espaço premium de 750 m² para eventos corporativos no complexo WTC São Paulo. Vista para a Ponte Estaiada, equipe dedicada e infraestrutura completa. Solicite seu orçamento.",
    type: "website",
    locale: "pt_BR",
    siteName: "WTC Sky Bridge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${openSans.variable} ${montserrat.variable}`}
    >
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17721733763`}
        />
        <Script id="google-ads" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17721733763');
          `
        }} />
        {children}
      </body>
    </html>
  );
}
