"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { news } from "@/data/news"
import { blogs } from "@/data/blogs"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SidebarNewsBlogs() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)

  // News rotation effect - continuous linear animation
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 3000)

    return () => clearInterval(newsInterval)
  }, [])

  // Blog rotation effect
  useEffect(() => {
    const blogInterval = setInterval(() => {
      setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length)
    }, 5000)

    return () => clearInterval(blogInterval)
  }, [])

  return (
    <div className="space-y-8">
      {/* Latest News Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#FFD700] pb-2 inline-block">Latest News</h3>
        <div className="h-[300px] overflow-hidden relative">
          <div className="relative h-full">
            {news.map((newsItem, index) => {
              // Calculate position based on current index
              const position = (index - currentNewsIndex + news.length) % news.length
              // Card height + margin
              const cardHeight = 100
              // Spacing between cards
              const spacing = 15

              return (
                <motion.div
                  key={`sidebar-news-${newsItem.id}`}
                  initial={false}
                  animate={{
                    y: position * (cardHeight + spacing) - cardHeight,
                    opacity: position >= 0 && position < 3 ? 1 : 0,
                    zIndex: 10 - position,
                  }}
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                  className="absolute w-full overflow-hidden bg-white rounded-lg shadow-md"
                  style={{
                    top: "100px",
                    height: `${cardHeight}px`,
                  }}
                >
                  <div className="flex h-full">
                    <div className="w-1/3 h-full">
                      <Image
                        src={newsItem.image || "/placeholder.svg"}
                        alt={newsItem.heading}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="w-2/3 p-3">
                      <div className="flex items-center mb-1 text-xs text-gray-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{newsItem.date}</span>
                      </div>
                      <h4 className="mb-1 text-sm font-semibold text-black line-clamp-1">{newsItem.heading}</h4>
                      {newsItem.link ? (
                        <a
                          href={newsItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#FFD700] hover:text-[#FFC700] flex items-center"
                        >
                          View More <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <Link
                          href={`/news/${newsItem.slug}`}
                          className="text-xs text-[#FFD700] hover:text-[#FFC700] flex items-center"
                        >
                          View More <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#FFD700] pb-2 inline-block">Blogs</h3>
        <div className="space-y-4 h-[300px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            <div key={`sidebar-blog-group-${currentBlogIndex}`} className="space-y-4">
              {[0, 1, 2].map((offset) => {
                const index = (currentBlogIndex + offset) % blogs.length
                return (
                  <motion.div
                    key={`sidebar-blog-${blogs[index].id}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 0.5,
                      delay: offset * 0.3,
                      ease: "easeOut",
                    }}
                    className="overflow-hidden bg-white rounded-lg shadow-md"
                  >
                    <div className="flex">
                      <div className="w-1/3">
                        <Image
                          src={blogs[index].image || "/placeholder.svg"}
                          alt={blogs[index].heading}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="w-2/3 p-3">
                        <div className="flex items-center mb-1 text-xs text-gray-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{blogs[index].date}</span>
                        </div>
                        <h4 className="mb-1 text-sm font-semibold text-black line-clamp-1">{blogs[index].heading}</h4>
                        {blogs[index].link ? (
                          <a
                            href={blogs[index].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#FFD700] hover:text-[#FFC700] flex items-center"
                          >
                            View More <ArrowRight className="w-3 h-3 ml-1" />
                          </a>
                        ) : (
                          <Link
                            href={`/blog/${blogs[index].slug}`}
                            className="text-xs text-[#FFD700] hover:text-[#FFC700] flex items-center"
                          >
                            View More <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

