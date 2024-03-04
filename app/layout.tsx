import './globals.css'
import { Montserrat } from 'next/font/google';
import Navbar from '@/app/_components/Navbar/navbar';
import Footer from '@/app/_components/Footer/footer';

// const montserrat = Montserrat({
//   weight: '400',
//   display: 'swap',
//   subsets: ['latin'],
// })

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
    <html lang="en" className={ " text-blue-900"}>
      <body>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
