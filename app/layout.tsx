import './globals.css'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer/footer'
import { Montserrat } from 'next/font/google';
import {Providers} from "./providers";

const montserrat = Montserrat({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata = {
  title: 'UMEB',
  description: 'New UMEB Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
