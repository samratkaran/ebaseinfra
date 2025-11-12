"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import logo from "@/Assets/new_logo.png"

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription submitted")
  }

  return (
    <footer className="border-t bg-secondary border-gold-500/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-20 w-60">
                <Image
                
                  src={logo}
                  width={600}
                  height={400}
                  alt="Luxury Estates Logo" 
                  className="object-contain"
               
                 
                />
              </div>
            
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing exceptional luxury real estate services since 2005. We help you find your dream home.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/people/EBase-Infratech/61568148157871/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/Ebaselimited"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/ebase_infra?igsh=MW8xYWE4cWNzajZ1dw=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ebase-infratech-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-primary">Property Types</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/properties/residential"
                  className="text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/commercial"
                  className="text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/plot"
                  className="text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  Plot
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/kothi"
                  className="text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  Kothi
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/foodcourt"
                  className="text-sm transition-colors text-muted-foreground hover:text-primary"
                >
                  Food Court
                </Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-primary">Our Location</h3>
            <div className="h-[200px] bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Interactive Map</p>
              </div>
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.454284186063!2d77.03731294141163!3d28.41385651353834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c6bc0000001%3A0xb3d04dce68618d2a!2sEBASE%20Infratech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1742204145187!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground">Spaze iTech Park Sector 49 Gurugram, Haryana 122018</p>
          </div>
        </div>

        <div className="pt-6 mt-12 text-center border-t border-gold-500/20">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ebase Infratech Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


