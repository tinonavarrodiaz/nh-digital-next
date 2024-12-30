
import type { Metadata } from "next";
import 'aos/dist/aos.css';
import "@/scss/main.scss";
import Header from "@/components/organism/Header";
import { Roboto, Montserrat_Alternates, Montserrat } from 'next/font/google'

const montserrat_alt = Montserrat_Alternates({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const meta = {
  title: "NH Digital",
  description: "Realizamos diseño de paginas web Corporativas, estructuramos todas las páginas web para que sean atractivas, además te ayudamos a generar trafico para ganar más clientes",
  keywords: "paginas web, diseño, paginas web, desarrollo web"
}



export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: 'https://i.ibb.co/TgqjMPh/portada.jpg',
    url: 'https://nh-digital.dev',
    siteName: meta.title,
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es"  className={`${roboto.className} ${montserrat_alt.className} ${montserrat.className}`}>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <body className={"body"}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
