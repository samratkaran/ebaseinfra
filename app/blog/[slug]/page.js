"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation";
import { Calendar } from "lucide-react"
import { blogs } from "@/data/blogs"
import SidebarNewsBlogs from "@/components/sidebar-news-blogs"
import Breadcrumb from "@/components/breadcrumb"



  export default function BlogDetail() {
  const params = useParams();
  const [blogItem, setBlogItem] = useState(null);

  useEffect(() => {
    if (!params?.slug) return;

    const slug = Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug;

    const item = blogs.find(b => b.slug === slug);
    setBlogItem(item || null);
  }, [params?.slug]);

  if (!blogItem) {
    return (
      <div className="container px-4 py-8 mx-auto text-center">
        Loading...
      </div>
    );
  }


  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: blogItem.heading },
  ]

  // render content…



  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
      <article className="overflow-hidden bg-white rounded-lg shadow-md">

  {/* Blog Image (same as previous code) */}
  <div className="relative h-[300px] md:h-[400px]">
    <Image
      src={blogItem.image || "/placeholder.svg?height=400&width=800&text=Blog"}
      alt={blogItem.heading}
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Content */}
  <div className="p-6">
    <div className="flex items-center mb-4 text-sm text-gray-600">
      <Calendar className="w-4 h-4 mr-1" />
      <span>{blogItem.date}</span>
    </div>

    <h1 className="mb-6 text-3xl font-bold text-black">
      {blogItem.heading}
    </h1>

    <div className="prose max-w-none">
      {blogItem.content?.map((block, index) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2)
              return <h2 key={index} className="mt-8 text-2xl font-bold text-black">{block.text}</h2>
            if (block.level === 3)
              return <h3 key={index} className="mt-8 font-bold text-black text-[1.2rem]">{block.text}</h3>
            return null

          case "paragraph":
            return <p key={index} className="mt-2 text-black">{block.text}</p>

          case "list":
            return block.style === "ordered" ? (
              <ol key={index} className="mt-2 text-black">
                {block.items.map((item, i) => (
                  <li key={i}  className="mt-2 text-black list-decimal list-inside" >{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="mt-2 text-black list-disc list-inside">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
            case "numbered-section":
  return (
    <div key={index} className="mt-6">
      <p className="font-bold text-black">
        {block.number}. {block.title}
      </p>
      <p className="mt-2 text-black">
        {block.text}
      </p>
    </div>
  )


          default:
            return null
        }
      })}
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

