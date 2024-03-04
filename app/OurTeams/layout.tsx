import Navbar from '@/app/_components/Navbar/navbar';
import Footer from '@/app/_components/Footer/footer';
import React from "react";

export default function TeamsLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={""}>
            <body>
                <Navbar></Navbar>
                    {children}
                <Footer></Footer>
            </body>
        </html>
    )
}
