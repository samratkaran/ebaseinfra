"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import PropertyCard from "@/components/property-card"
import { allProperties } from "@/data/properties"
import PageCarousel from "@/components/page-carousel"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"
import Pagination from "@/components/pagination"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"

const carouselImages = [
  carousel_one,
  carousel_two,
  carousel_three
 
]

const propertyTypes = ["2BHK", "3BHK", "4BHK", "5BHK", "Plot", "Commercial", "Residential", "Kothi", "FoodCourt"]
const developers = ["DLF", "Vatika", "Independent"]

const ITEMS_PER_PAGE = 10

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pageParam = searchParams.get("page") || "1"
  const currentPage = Number.parseInt(pageParam, 10)

  const [paginatedProperties, setPaginatedProperties] = useState([])
  const totalPages = Math.ceil(allProperties.length / ITEMS_PER_PAGE)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    setPaginatedProperties(allProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE))
  }, [currentPage])

  const handlePageChange = (page) => {
    router.push(`/properties?page=${page}`)
  }

  const breadcrumbItems = [{ label: "Properties" }]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Property Listings */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="mb-6 text-3xl font-bold">All Properties</h1>

            {/* Filter Buttons */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold">Filter by:</h2>
              <div className="flex flex-wrap gap-3 mb-4">
                <h3 className="w-full text-lg font-medium">Property Type</h3>
                {propertyTypes.map((type) => (
                  <Link key={type} href={`/properties/${type.toLowerCase()}`}>
                    <Button variant="outline" size="sm" className="min-w-[80px]">
                      {type}
                    </Button>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <h3 className="w-full text-lg font-medium">Developer</h3>
                {developers.map((developer) => (
                  <Link key={developer} href={`/properties/${developer.toLowerCase()}`}>
                    <Button variant="outline" size="sm" className="min-w-[80px]">
                      {developer}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {allProperties.length > ITEMS_PER_PAGE && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
          </div>

          <div className="md:col-span-4">
            <SidebarNewsBlogs />
          </div>
        </div>
      </div>
    </div>
  )
}

