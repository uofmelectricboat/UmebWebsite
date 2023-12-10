import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './Components/Navbar/navbar'
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
        <div className="bg-opacity-70 text-white py-2 px-4 absolute w-full top-0 z-10">
          <Navbar />
        </div>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
