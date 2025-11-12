"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MessageSquare, MapPin, Building } from "lucide-react"
import { residential, commercial, otherProperty } from "@/data/properties"
import PageCarousel from "@/components/page-carousel"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import { Button } from "@/components/ui/button"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"

const carouselImages = [carousel_one, carousel_two, carousel_three]

export default function PropertyDetail({ params: paramsPromise }) {
  const params = use(paramsPromise) // ✅ FIX: Unwrapping params with React.use()

  const [property, setProperty] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const allProperties = [...residential, ...commercial, ...otherProperty]
    const foundProperty = allProperties.find((p) => p.id === params.id) // ✅ Now params.id works
    setProperty(foundProperty)
  }, [params.id])

  const handleEnquiryClick = () => {
    const event = new CustomEvent("openPopupForm")
    window.dispatchEvent(event)
  }

  if (!property) return <div>Loading...</div>

  return (
    <div>
      {/* Carousel */}
      <div className="relative">
      {/* this page carousel is not working */}
        <PageCarousel images={property.images} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h1 className="mb-2 text-4xl font-bold">{property.name}</h1>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container px-4 py-4 mx-auto">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-[#FFD700]">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link href="/properties" className="ml-1 text-gray-700 hover:text-[#FFD700] md:ml-2">
                  Properties
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-[#FFD700] md:ml-2">{property.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Property Details */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {property.badge}
                      </span>
                      <span className="text-2xl font-bold text-[#FFD700]">{property.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building className="w-4 h-4 mr-1" />
                      <span className="mr-4">Builder: {property.builder}</span>
                      {property.developer && (
                        <>
                          <span className="mx-2">|</span>
                          <span>Developer: {property.developer}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={handleEnquiryClick}
                    className="bg-[#FFD700] text-black hover:bg-[#FFC700] flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enquiry Now
                  </Button>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-semibold text-black">Property Description</h2>
                  <p className="mb-4 text-gray-600">{property.description}</p>
                  <p className="text-gray-600">
                    This exceptional property offers a perfect blend of luxury, comfort, and convenience. Situated in a
                    prime location, it provides easy access to essential amenities.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-xl font-semibold text-black">Property Details</h2>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#FFD700] font-bold mr-2">•</span>
                        <span className="font-medium">Type:</span>
                        <span className="ml-2">{property.type || "Residential"}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] font-bold mr-2">•</span>
                        <span className="font-medium">Bedrooms:</span>
                        <span className="ml-2">{property.bedrooms}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] font-bold mr-2">•</span>
                        <span className="font-medium">Bathrooms:</span>
                        <span className="ml-2">{property.bathrooms}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] font-bold mr-2">•</span>
                        <span className="font-medium">Area:</span>
                        <span className="ml-2">{property.area} sqft</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] font-bold mr-2">•</span>
                        <span className="font-medium">Location:</span>
                        <span className="ml-2">{property.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Enquiry CTA */}
                <div className="p-6 mt-8 bg-gray-100 border border-gray-200 rounded-lg">
                  <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-black">Interested in this property?</h3>
                      <p className="text-gray-600">Contact us now for more details.</p>
                    </div>
                    <Button
                      onClick={handleEnquiryClick}
                      className="bg-[#FFD700] text-black hover:bg-[#FFC700] px-6"
                      size="lg"
                    >
                      Enquiry Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <SidebarNewsBlogs />
          </div>
        </div>
      </div>
    </div>
  )
}
