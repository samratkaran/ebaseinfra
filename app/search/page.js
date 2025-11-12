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

const carouselImages = [
  carousel_one,
  carousel_two,
  carousel_three
]

const ITEMS_PER_PAGE = 10

export default function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("query") || ""
  const pageParam = searchParams.get("page") || "1"
  const currentPage = Number.parseInt(pageParam, 10)

  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  useEffect(() => {
    if (query) {
      // Clean up the query - remove extra spaces and convert to lowercase
      const cleanQuery = query.toLowerCase().replace(/\s+/g, " ").trim()

      // Split the query into words to match any of them
      const queryWords = cleanQuery.split(" ").filter((word) => word.length > 0)

      const filtered = allProperties.filter((property) => {
        const name = (property.name || "").toLowerCase()
        const location = (property.location || "").toLowerCase()
        const builder = (property.builder || "").toLowerCase()
        const area = (property.area || "").toString().toLowerCase()
        const price = (property.price || "").toLowerCase()
        const type = (property.type || "").toLowerCase()
        const typetwo = (property.typetwo || "").toLowerCase()
        const description = (property.description || "").toLowerCase()
        const badge = (property.badge || "").toLowerCase()
        const developer = (property.developer || "").toLowerCase()

        // If we have multiple words, check if any of them match
        if (queryWords.length > 1) {
          return queryWords.some(
            (word) =>
              name.includes(word) ||
              location.includes(word) ||
              builder.includes(word) ||
              area.includes(word) ||
              price.includes(word) ||
              type.includes(word) ||
              typetwo.includes(word) ||
              description.includes(word) ||
              badge.includes(word) ||
              developer.includes(word),
          )
        }

        // Single word query
        return (
          name.includes(cleanQuery) ||
          location.includes(cleanQuery) ||
          builder.includes(cleanQuery) ||
          area.includes(cleanQuery) ||
          price.includes(cleanQuery) ||
          type.includes(cleanQuery) ||
          typetwo.includes(cleanQuery) ||
          description.includes(cleanQuery) ||
          badge.includes(cleanQuery) ||
          developer.includes(cleanQuery)
        )
      })

      setProperties(filtered)

      // Calculate total pages
      const pages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
      setTotalPages(pages > 0 ? pages : 1)

      // Get current page items
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
      setFilteredProperties(filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE))
    } else {
      setProperties([])
      setFilteredProperties([])
      setTotalPages(1)
    }
  }, [query, currentPage])

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    router.push(`/search?${params.toString()}`)
  }

  const breadcrumbItems = [{ label: "Search Results" }]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Search Results */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="mb-4 text-3xl font-bold">Search Results</h1>
            <p className="mb-8 text-gray-600">
              {properties.length > 0
                ? `Found ${properties.length} properties matching "${query}"`
                : `No properties found matching "${query}". Please try a different search term.`}
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

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

