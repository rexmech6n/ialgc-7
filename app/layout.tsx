import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react"
import Header from "@/components/Header";

type RootLayoutProps = {
  children: ReactNode
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800','900']})

export const metadata: Metadata = {
  title: 'VII. İALGÇ',
  description: 'İzmir’e konferans kültürü kazandıran, kalitesinden asla taviz vermeyen, Türkiye’nin en köklü ve iyi konferanslarından biri olan İzmir Atatürk Lisesi Gençlik Çalıştayı tekrardan sizlerle!',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
      <html className={poppins.className} lang='tr'>
        <body>
          <Header />
          {children}
        </body>
      </html>
  )
}
