import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PopupForm from "@/components/popup-form"
import favicon from "@/public/favicon.ico"
import Script from "next/script";
import "./globals.css"



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
        <head>
        {/* ✅ Google Tag Manager script */}

        <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTPFXLKB');
          `,
        }}
      />
       
      </head>


      <body className={inter.className}>
       <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTPFXLKB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  )
}



import './globals.css'