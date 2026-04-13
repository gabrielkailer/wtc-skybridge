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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HVGF8JJ');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HVGF8JJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17721733763`}
        />
        <Script id="google-ads" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17721733763');

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17721733763/EuMKCOmKvpIcEIPlsIJC',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
              });
              return false;
            };
          `
        }} />
        {children}
      </body>
    </html>
  );
}
