"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PropertyCard from "@/components/property-card";
import { residential, commercial, otherProperty } from "@/data/properties";
import PageCarousel from "@/components/page-carousel";
import SidebarNewsBlogs from "@/components/sidebar-news-blogs";
import Breadcrumb from "@/components/breadcrumb";
import Pagination from "@/components/pagination";
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg";
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg";
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg";

const carouselImages = [carousel_one, carousel_two, carousel_three];

const ITEMS_PER_PAGE = 10;

export default function ExclusivePropertyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page") || "1";
  const currentPage = Number.parseInt(pageParam, 10);

  const [properties, setProperties] = useState([]);
  const [paginatedProperties, setPaginatedProperties] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    const allProperties = [...residential, ...commercial, ...otherProperty];

    // Filtering logic for exclusive properties
    let exclusiveProperties = allProperties.filter(
      (property) =>
        property.badge?.toLowerCase() === "exclusive" ||
        property.badge?.toLowerCase() === "premium" ||
        property.price?.includes("1,") // Properties over $1 million
    );

    // filter of bases of badge we can add new things also

    // Sorting logic to show properties with "new" badge first
    exclusiveProperties = exclusiveProperties.sort((a, b,c,d,e) => {
      const aIsNew = a.badge?.toLowerCase() === "exclusive";
      const bIsNew = b.badge?.toLowerCase() === "new";


      if (aIsNew && !bIsNew) return -1; // "new" comes first
      if (!aIsNew && bIsNew) return 1; // "new" comes first
      return 0; // Keep original order otherwise
    });

    setProperties(exclusiveProperties);

    // Calculate total pages
    const pages = Math.ceil(exclusiveProperties.length / ITEMS_PER_PAGE);
    setTotalPages(pages > 0 ? pages : 1);

    // Get current page items
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    setPaginatedProperties(
      exclusiveProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    );
  }, [currentPage]);

  const handlePageChange = (page) => {
    router.push(`/exclusive-property?page=${page}`);
  };

  const breadcrumbItems = [{ label: "Exclusive Properties" }];

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
            <h1 className="mb-6 text-3xl font-bold">Exclusive Properties</h1>
            <p className="mb-8 text-gray-600">
              Discover our collection of exclusive luxury properties, featuring
              premium amenities and prime locations.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {properties.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  No exclusive properties available at the moment. Please check
                  back later.
                </p>
              </div>
            )}

            {properties.length > ITEMS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          <div className="md:col-span-4">
            <SidebarNewsBlogs />
          </div>
        </div>
      </div>
    </div>
  );
}
