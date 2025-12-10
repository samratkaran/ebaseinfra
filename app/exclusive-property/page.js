"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PropertyCard from "@/components/property-card";
import PageCarousel from "@/components/page-carousel";
import SidebarNewsBlogs from "@/components/sidebar-news-blogs";
import Breadcrumb from "@/components/breadcrumb";
import Pagination from "@/components/pagination";

// IMPORT ALL PROPERTIES
import {
  residential,
  commercial,
  otherProperty,
  kothiProperties,
  plotProperties,
  foodcourtProperties,
} from "@/data/properties";

// Carousel Images
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg";
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg";
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg";

const carouselImages = [carousel_one, carousel_two, carousel_three];

const ITEMS_PER_PAGE = 10;

export default function ExclusivePropertyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page") || "1";
  const currentPage = Number(pageParam);

  const [properties, setProperties] = useState([]);
  const [paginatedProperties, setPaginatedProperties] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    // MERGE ALL PROPERTIES
    const allProperties = [
      ...residential,
      ...commercial,
      ...otherProperty,
      ...kothiProperties,
      ...plotProperties,
      ...foodcourtProperties,
    ];

    // FILTER ONLY EXCLUSIVE PROPERTIES
    const exclusiveProperties = allProperties.filter((property) => {
      const badge = property.badge?.toLowerCase() || "";
      return badge.includes("exclusive");
    });

    setProperties(exclusiveProperties);

    // PAGINATION
    const pages = Math.ceil(exclusiveProperties.length / ITEMS_PER_PAGE) || 1;
    setTotalPages(pages);

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
      <PageCarousel images={carouselImages} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="mb-6 text-3xl font-bold">Exclusive Properties</h1>
            <p className="mb-8 text-gray-600">
              Discover our collection of exclusive premium properties.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {properties.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  No exclusive properties available currently.
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
