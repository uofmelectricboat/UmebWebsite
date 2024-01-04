import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header'
import Footer from './Components/Footer/footer'

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
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
