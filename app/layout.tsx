import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

type RootLayoutProps = {
  children: ReactNode
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800','900']})

export const metadata: Metadata = {
  title: 'İAL Gençlik Çalıştayı',
  description: 'İzmir’e konferans kültürü kazandıran, kalitesinden asla taviz vermeyen, Türkiye’nin en köklü ve iyi konferanslarından biri olan İzmir Atatürk Lisesi Gençlik Çalıştayı tekrardan sizlerle!',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
      <html className={poppins.className} lang='tr'>
        <body className="flex flex-col items-center overflow-x-hidden">
        <Header />
            {children}
        <Navbar />
        </body>
      </html>
  )
}
