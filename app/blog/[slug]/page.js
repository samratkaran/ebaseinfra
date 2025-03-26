"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation" // Import useParams
import Image from "next/image"
import { Calendar } from "lucide-react"
import { blogs } from "@/data/blogs"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import Breadcrumb from "@/components/breadcrumb"

export default function BlogDetail() {
  const params = useParams() // Get the route parameters dynamically
  const [blogItem, setBlogItem] = useState(null)
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    async function fetchParams() {
      const paramData = await params // ✅ Unwrap params properly
      if (paramData?.slug) {
        setSlug(paramData.slug)
        const item = blogs.find((blog) => blog.slug === paramData.slug)
        setBlogItem(item)
      }
    }

    fetchParams()
  }, [params])

  if (!blogItem) {
    return <div className="container px-4 py-8 mx-auto">Loading...</div>
  }

  const breadcrumbItems = [{ label: "Blog", href: "/blog" }, { label: blogItem.heading }]

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <article className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={blogItem.image || "/placeholder.svg?height=400&width=800&text=Blog"}
                alt={blogItem.heading}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{blogItem.date}</span>
              </div>
              <h1 className="mb-6 text-3xl font-bold text-[#000]">{blogItem.heading}</h1>
              <div className="prose max-w-none">
                <p className="text-[#2d2c2c]">{blogItem.description}</p>
                <br />
                <p className="text-[#2d2c2c]">{blogItem.data}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="md:col-span-4">
          <SidebarNewsBlogs />
        </div>
      </div>
    </div>
  )
}
