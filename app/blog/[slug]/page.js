"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { blogs } from "@/data/blogs"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import Breadcrumb from "@/components/breadcrumb"

export default function BlogDetail({ params }) {
  const [blogItem, setBlogItem] = useState(null)

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    const item = blogs.find((item) => item.slug === params.slug)
    setBlogItem(item)
  }, [params.slug])

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
              <div className="flex items-center mb-4 text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{blogItem.date}</span>
              </div>
              <h1 className="mb-6 text-3xl font-bold text-black">{blogItem.heading}</h1>
              <div className="prose max-w-none">
                <p className="text-gray-700">{blogItem.description}</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
                <p className="text-gray-700">
                  Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
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

