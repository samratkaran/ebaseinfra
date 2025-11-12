"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { news } from "@/data/news";
import SidebarNewsBlogs from "@/components/sidebar-news-blogs";
import Breadcrumb from "@/components/breadcrumb";

export default function NewsDetail() {
  const params = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    if (params?.slug) {
      const item = news.find((n) => n.slug === params.slug);
      setNewsItem(item || null);
    }
  }, [params?.slug]);

  if (!newsItem) {
    return (
      <div className="container px-4 py-8 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-700">News Not Found</h2>
        <p className="mt-2 text-gray-500">The news article you are looking for does not exist.</p>
      </div>
    );
  }

  const breadcrumbItems = [{ label: "News", href: "/news" }, { label: newsItem.heading }];

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <article className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={newsItem.image || "/placeholder.svg?height=400&width=800&text=News"}
                alt={newsItem.heading || "News Image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{newsItem.date || "Unknown Date"}</span>
              </div>
              <h1 className="mb-6 text-3xl font-bold text-[#343030]">{newsItem.heading}</h1>
              <div className="prose max-w-none">
                <p className="text-[#716868]">{newsItem.description || "No description available."}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="md:col-span-4">
          <SidebarNewsBlogs />
        </div>
      </div>
    </div>
  );
}
