"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronRight } from "lucide-react"
import { blogs } from "@/data/blogs"
import PageCarousel from "@/components/page-carousel"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import Breadcrumb from "@/components/breadcrumb"
import Pagination from "@/components/pagination"


const ITEMS_PER_PAGE = 10

const carouselImages = [
  "/Assets/one.jpg",
  "/Assets/two.jpg",
  "/Assets/three.jpg",
]

export default function BlogPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pageParam = searchParams.get("page") || "1"
  const currentPage = Number.parseInt(pageParam, 10)

  const [paginatedBlogs, setPaginatedBlogs] = useState([])
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    setPaginatedBlogs(blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE))
  }, [currentPage])

  const handlePageChange = (page) => {
    router.push(`/blog?page=${page}`)
  }

  const breadcrumbItems = [{ label: "Blog" }]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Blog Listings */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="mb-8 text-3xl font-bold text-black">Blog Articles</h1>

            <div className="space-y-8">
              {paginatedBlogs.map((item) => (
                <div key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={item.image || "/placeholder.svg?height=200&width=300&text=Blog"}
                        alt={item.heading}
                        width={300}
                        height={200}
                        className="object-cover w-full h-48 md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <h2 className="mb-2 text-xl font-semibold text-black">{item.heading}</h2>
                      <p className="mb-4 text-gray-700 line-clamp-3">{item.description}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FFD700] hover:text-[#FFC700] font-medium inline-flex items-center"
                        >
                          Read More <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      ) : (
                        <Link
                          href={`/blog/${item.slug}`}
                          className="text-[#FFD700] hover:text-[#FFC700] font-medium inline-flex items-center"
                        >
                          Read More <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {blogs.length > ITEMS_PER_PAGE && (
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

