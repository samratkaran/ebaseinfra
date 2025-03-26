import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PopupForm from "@/components/popup-form"
import favicon from "@/public/favicon.ico"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EBASE Infratech Pvt Ltd",
  description: "Find your dream luxury property",
    generator: 'v0.dev',
    icon:favicon,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  )
}



import './globals.css'