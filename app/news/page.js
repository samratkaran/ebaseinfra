"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronRight } from "lucide-react"
import { news } from "@/data/news"
import PageCarousel from "@/components/page-carousel"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import Breadcrumb from "@/components/breadcrumb"
import Pagination from "@/components/pagination"

const ITEMS_PER_PAGE = 10

const carouselImages = [
  "/placeholder.svg?height=400&width=1200&text=News+1",
  "/placeholder.svg?height=400&width=1200&text=News+2",
  "/placeholder.svg?height=400&width=1200&text=News+3",
]

export default function NewsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pageParam = searchParams.get("page") || "1"
  const currentPage = Number.parseInt(pageParam, 10)

  const [paginatedNews, setPaginatedNews] = useState([])
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    setPaginatedNews(news.slice(startIndex, startIndex + ITEMS_PER_PAGE))
  }, [currentPage])

  const handlePageChange = (page) => {
    router.push(`/news?page=${page}`)
  }

  const breadcrumbItems = [{ label: "News" }]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* News Listings */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="mb-8 text-3xl font-bold text-black">Latest News</h1>

            <div className="space-y-8">
              {paginatedNews.map((item) => (
                <div key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                      <Image
                        src={item.image || "/placeholder.svg?height=200&width=300&text=News"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="object-cover w-full h-48 md:h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full h-full p-6 md:w-2/3">
                      <div className="flex items-center mb-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <h2 className="mb-2 text-xl font-semibold text-black">{item.title}</h2>
                      <p className="mb-4 text-gray-700">
                        {item.description && item.description.length > 180
                          ? `${item.description.substring(0, 180)}...`
                          : item.description}
                      </p>
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
                          href={`/news/${item.slug}`}
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

            {news.length > ITEMS_PER_PAGE && (
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

