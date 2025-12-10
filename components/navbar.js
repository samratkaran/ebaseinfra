"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  Phone,
  Mail,
  X,
  Building,
  Users,
  FileText,
  Search,
  Home,
  Info,
  Briefcase,
  Contact,
  MapPin,
  Coffee,
  HomeIcon as House,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import newlogo from "@/Assets/new_logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const menuItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "Properties", href: "/properties", icon: Building },
    { title: "Residential", href: "/properties/residential", icon: House },
    { title: "Commercial", href: "/properties/commercial", icon: Building },
    { title: "Plot", href: "/properties/plot", icon: MapPin },
    { title: "Kothi", href: "/properties/kothi", icon: House },
    { title: "Food Court", href: "/properties/foodcourt", icon: Coffee },
    { title: "Exclusive Partners", href: "/exclusive-property", icon: Users },
    { title: "Pre Engineering Works", href: "/pre-engineering-works", icon: FileText },
    { title: "Major Land Deals", href: "/major-land-deals", icon: Search },
    { title: "About Us", href: "/about", icon: Info },
    { title: "Careers", href: "/careers", icon: Briefcase },
    { title: "Contact Us", href: "/contact", icon: Contact },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      if (isOpen) setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-[#FFD700]/20 h-24">
      <div className="px-4 mx-auto ">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <Image
              src={newlogo}
              alt="Realtime Realtors"
              width={260}
              height={260}
              className=""
            />
          </Link>

          <div className="items-center hidden space-x-4 md:flex">
            {/* <form onSubmit={handleSearch} className="relative mr-4">
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pr-10"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full text-[#FFD700]"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form> */}

            

            {/* <Button asChild variant="outline" className="bg-[#FFD700] text-black hover:bg-[#FFC700]">
              <a href="tel:+918826211177" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8826211177</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="bg-[#FFD700] text-black hover:bg-[#FFC700]">
              <a href="mailto:info@ebaseinfra.com" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>Info@Ebaseinfra.com</span>
              </a>
            </Button> */}

            <div className="items-center hidden space-x-6 md:flex">
  <form onSubmit={handleSearch} className="relative mr-4">
    <Input
      type="text"
      placeholder="Search properties..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-64 pr-10"
    />
    <Button
      type="submit"
      variant="ghost"
      size="icon"
      className="absolute right-0 top-0 h-full text-[#FFD700]"
    >
      <Search className="w-4 h-4" />
    </Button>
  </form>

  {/* NEW TOP LINKS ADDED */}
  <Link href="/about" className="text-[#FFD700] hover:text-white text-sm font-medium">
    About
  </Link>

  <Link href="/properties" className="text-[#FFD700] hover:text-white text-sm font-medium">
    Properties
  </Link>

  <Link href="/blog" className="text-[#FFD700] hover:text-white text-sm font-medium">
    Blog
  </Link>

  <Link href="contact" className="text-[#FFD700] hover:text-white text-sm font-medium">
    Contact Us
  </Link>

  <Button asChild variant="outline" className="bg-[#FFD700] text-black hover:bg-[#FFC700]">
              <a href="tel:+918826211177" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8826211177</span>
              </a>
            </Button>

            <Button asChild variant="outline" className="bg-[#FFD700] text-black hover:bg-[#FFC700]">
              <a href="mailto:info@ebaseinfra.com" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>Info@Ebaseinfra.com</span>
              </a>
            </Button>
</div>

          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#FFD700] hover:text-[#000000]">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[500px] bg-black/95 border-l border-[#FFD700]/20 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-2 border-b border-[#FFD700]/20">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                      src={newlogo}
                      alt="Realtime Realtors"
                      width={120}
                      height={40}
                      
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-[#FFD700] hover:text-[#000000]"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="p-4 border-b border-[#FFD700]/20">
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="text"
                      placeholder="Search properties..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pr-10 bg-black/50 border-[#FFD700]/30 text-white"
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full text-[#000000]"
                    >
                      <Search className="w-4 h-4" />
                    </Button>
                  </form>
                </div>

                <div className="flex-grow overflow-y-auto">
                  <div className="p-6 space-y-6">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <Button
                          key={index}
                          variant="ghost"
                          asChild
                          className="w-full justify-start text-[#FFD700] hover:text-[#000000]"
                        >
                          <Link href={item.href} onClick={() => setIsOpen(false)}>
                            <Icon className="w-5 h-5 mr-2" />
                            {item.title}
                          </Link>
                        </Button>
                      )
                    })}
                  </div>
                </div>

                <div className="p-6 border-t border-[#FFD700]/20">
                  <div className="space-y-4">
                    <Button asChild variant="outline" className="w-full bg-[#FFD700] text-black hover:bg-[#FFC700]">
                      <a href="tel:8826211177" className="flex items-center justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        8826211177
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-[#FFD700] text-black hover:bg-[#FFC700]">
                      <a href="mailto:@info@ebaseinfra.com" className="flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2" />
                        info@ebaseinfra
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

