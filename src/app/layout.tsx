import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from './footer'
import { Header } from './header'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title:  'Adler Gabriel - Desenvolvedor Front-end & UI Designer',
  description: 'Desenvolvedor front-end e UI Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  )
}
