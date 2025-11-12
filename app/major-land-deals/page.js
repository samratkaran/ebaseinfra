"use client"

import { useEffect } from "react"
import { MessageCircle } from "lucide-react"
import PageCarousel from "@/components/page-carousel"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"

const carouselImages = [
  carousel_one,
  carousel_two,
  carousel_three
]

export default function MajorLandDealsPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const handleContactClick = () => {
    // Dispatch a custom event to trigger the popup form
    const event = new CustomEvent("openPopupForm")
    window.dispatchEvent(event)
  }

  const breadcrumbItems = [{ label: "Major Land Deals" }]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h1 className="mb-6 text-3xl font-bold text-black">Major Land Deals</h1>

              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-black">Exclusive Investment Opportunities</h2>
                <p className="mb-4 text-gray-600">
                  We specialize in high-value land transactions and development opportunities that are not publicly
                  listed. Our portfolio includes premium commercial plots, large residential development sites, and
                  strategic investment properties across prime locations.
                </p>
                <p className="mb-4 text-gray-600">
                  These exclusive land deals are carefully selected for their exceptional investment potential,
                  strategic locations, and development opportunities. Our team conducts thorough due diligence to ensure
                  all properties meet our strict quality standards.
                </p>
                <p className="mb-6 text-gray-600">
                  Due to the confidential nature of these high-value transactions, detailed information is shared only
                  with serious investors after initial consultation. Contact us today to learn about our current
                  portfolio of major land deals.
                </p>
              </div>

              <div className="p-8 text-center bg-gray-100 border border-gray-200 rounded-lg">
                <h3 className="mb-3 text-xl font-semibold text-black">Interested in Major Land Deals?</h3>
                <p className="mb-6 text-gray-600">
                  Our team of experts is ready to assist you with confidential information about our exclusive land
                  investment opportunities. Contact us now for a personalized consultation.
                </p>
                <Button
                  onClick={handleContactClick}
                  className="bg-[#FFD700] text-black hover:bg-[#FFC700] px-8 py-6 text-lg flex items-center mx-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us Now
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-black">Why Invest in Land?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">✓</span>
                    <span className="text-[#8f8d7f]">Tangible asset with limited supply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">✓</span>
                    <span className="text-[#8f8d7f]">Potential for significant appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">✓</span>
                    <span className="text-[#8f8d7f]">Multiple development options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">✓</span>
                    <span className="text-[#8f8d7f]">Lower maintenance costs compared to built properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">✓</span>
                    <span className="text-[#8f8d7f]" >Potential for passive income through leasing</span>
                  </li>
                </ul>
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

