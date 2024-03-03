import './globals.css'
import Navbar from '@/app/_components/Navbar/navbar'
import Footer from '@/app/_components/Footer/footer'
import { Montserrat } from 'next/font/google';

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
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
