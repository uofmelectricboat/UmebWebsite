import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header'
import Footer from './Components/Footer/footer'
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
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
