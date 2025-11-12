"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import PropertyCard from "@/components/property-card"
import { allProperties } from "@/data/properties"
import PageCarousel from "@/components/page-carousel"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import Breadcrumb from "@/components/breadcrumb"
import Pagination from "@/components/pagination"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"

const ITEMS_PER_PAGE = 10

export default function FilteredProperties({ params }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pageParam = searchParams.get("page") || "1"
  const currentPage = Number.parseInt(pageParam, 10)

  const [properties, setProperties] = useState([])
  const [paginatedProperties, setPaginatedProperties] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [filter, setFilter] = useState("")
  const [propertyCount, setPropertyCount] = useState(0) // New state for property count

  const carouselImages = [
    carousel_one,
    carousel_two,
    carousel_three
   
  ]

  // Fetch params.filter properly
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params
      setFilter(resolvedParams.filter.toLowerCase())
    }
    fetchParams()
  }, [params])

  // Fetch and filter properties based on the resolved filter
  useEffect(() => {
    if (!filter) return

    window.scrollTo(0, 0)

    const filtered = allProperties.filter(
      (property) =>
        (property.type && property.type.toLowerCase() === filter) ||
        (property.typetwo && property.typetwo.toLowerCase() === filter) ||
        (property.developer && property.developer.toLowerCase() === filter),
    )

    setProperties(filtered)
    setPropertyCount(filtered.length) // Update property count dynamically

    // Calculate total pages
    const pages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
    setTotalPages(pages > 0 ? pages : 1)

    // Get current page items
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    setPaginatedProperties(filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE))
  }, [filter, currentPage])

  const handlePageChange = (page) => {
    router.push(`/properties/${filter}?page=${page}`)
  }

  const breadcrumbItems = [{ label: "Properties", href: "/properties" }, { label: filter }]

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
            <h1 className="mb-2 text-3xl font-bold capitalize">{filter} Properties </h1>
            <h4 className="mb-8 font-bold capitalize">We have "{propertyCount}" {filter} Properties</h4>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {properties.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  No properties found for this filter. Please try another category.
                </p>
              </div>
            )}

            {properties.length > ITEMS_PER_PAGE && (
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
