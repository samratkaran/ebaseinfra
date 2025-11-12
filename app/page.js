"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Phone,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
} from "lucide-react";
import HeroCarousel from "@/components/hero-carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import PropertyCard from "@/components/property-card";
import { residential, commercial } from "@/data/properties";
import { news } from "@/data/news";
import { blogs } from "@/data/blogs";
export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activePropertyType, setActivePropertyType] = useState("residential");
  const carouselRef = useRef(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const propertyTypes = [
    "2BHK",
    "3BHK",
    "4BHK",
    "Plot",
    "Commercial",
    "Kothi",
    "SCO",
  ];
  const developers = ["DLF", "Vatika", "Godrej", "sobha"];

  const filteredProperties =
    activePropertyType === "residential" ? residential : commercial;

  // News rotation effect - one by one continuous sliding
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 3000);

    return () => clearInterval(newsInterval);
  }, []);

  // Blog rotation effect
  useEffect(() => {
    const blogInterval = setInterval(() => {
      setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 5000);

    return () => clearInterval(blogInterval);
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };



  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroCarousel />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40">
          <h1 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl">
            Discover Your Dream Property
          </h1>
          <div className="w-full max-w-md p-4 mb-8 rounded-lg bg-white/80 backdrop-blur-sm">
            <form className="flex gap-2" action="/search">
              <Input
                type="text"
                name="query"
                placeholder="Search properties..."
                className="flex-grow"
              />
              <Button type="submit">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: "Exclusive Property", href: "/exclusive-property" },
              {
                title: "Pre Engineering Works",
                href: "/pre-engineering-works",
              },
              { title: "Major Land Deals", href: "/major-land-deals" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-black/70 text-[#FFD700] p-4 rounded-lg text-center hover:bg-black/80 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Collection Section - Only Buttons */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-black">
            Current Collection
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[...propertyTypes, ...developers].map((filter) => (
              <Link key={filter} href={`/properties/${filter.toLowerCase()}`}>
                <Button variant="outline" className="min-w-[100px]">
                  {filter}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section with Toggle */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="mb-6 text-3xl font-bold text-center text-black">
              Featured Properties
            </h2>

           
            <div className="flex gap-4">
              <Button
                variant={
                  activePropertyType === "residential" ? "default" : "outline"
                }
                onClick={() => setActivePropertyType("residential")}
                className={
                  activePropertyType === "residential"
                    ? "bg-[#FFD700] text-black hover:bg-[#FFC700]"
                    : ""
                }
              >
                Residential
              </Button>
              <Button
                variant={
                  activePropertyType === "commercial" ? "default" : "outline"
                }
                onClick={() => setActivePropertyType("commercial")}
                className={
                  activePropertyType === "commercial"
                    ? "bg-[#FFD700] text-black hover:bg-[#FFC700]"
                    : ""
                }
              >
                Commercial
              </Button>
            </div>
          </div>

         
          <div className="relative">
            <button
              // onClick={() => scrollCarousel("left")}
              className="absolute left-0 z-10 p-2 text-white -translate-y-1/2 rounded-full top-1/2 bg-black/50 hover:bg-black/70"
              aria-label="Previous properties"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="min-w-[280px] w-[280px] md:min-w-[350px] md:w-[350px] flex-shrink-0 snap-start"
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 z-10 p-2 text-white -translate-y-1/2 rounded-full top-1/2 bg-black/50 hover:bg-black/70"
              aria-label="Next properties"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News and Blogs Section */}
     <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-black">
            Latest News & Blogs
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          
            <div className="md:col-span-6">
              <h3 className="text-2xl font-semibold mb-6 border-b-2 border-[#FFD700] pb-2 inline-block text-black">
                Latest News
              </h3>
              <div className="h-[600px] overflow-hidden relative">
                <div className="relative h-full">
                  {news.map((newsItem, index) => {
                    // Calculate position based on current index
                    const position =
                      (index - currentNewsIndex + news.length) % news.length;
                    // Card height + margin
                    const cardHeight = 200;
                    // Spacing between cards
                    const spacing = 10;

                    return (
                      <motion.div
                        key={`news-${newsItem.id}`}
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
                          top: "200px",
                          height: `${cardHeight}px`,
                        }}
                      >
                        <div className="flex flex-col h-full md:flex-row">
                          <div className="w-full h-32 md:w-1/3 md:h-full">
                            <Image
                              src={newsItem.image || "/placeholder.svg"}
                              alt={newsItem.heading}
                              width={300}
                              height={200}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col justify-between w-full h-full p-4 md:w-2/3">
                            <div className="flex items-center mb-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{newsItem.date}</span>
                            </div>
                            <h4 className="mb-2 text-lg font-semibold text-black line-clamp-1">
                              {newsItem.heading}
                            </h4>
                            <p className="hidden mb-4 text-sm text-gray-700 md:block">
                              {newsItem.description.length > 120
                                ? `${newsItem.description.substring(0, 120)}...`
                                : newsItem.description}
                            </p>
                            <Button asChild variant="outline" size="sm">
                              {newsItem.link ? (
                                <a
                                  href={newsItem.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  View More{" "}
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                              ) : (
                                <Link
                                  href={`/news/${newsItem.slug}`}
                                  className="flex items-center"
                                >
                               
                                  View More{" "}
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              )}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

     
            <div className="md:col-span-6">
              <h3 className="text-2xl font-semibold mb-6 border-b-2 border-[#FFD700] pb-2 inline-block text-black">
                Blogs
              </h3>
              <div className="space-y-6 h-[600px] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <div
                    key={`blog-group-${currentBlogIndex}`}
                    className="space-y-6"
                  >
                    {[0, 1, 2].map((offset) => {
                      const index = (currentBlogIndex + offset) % blogs.length;
                      return (
                        <motion.div
                          key={`blog-${blogs[index].id}`}
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
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3">
                              <Image
                                src={blogs[index].image || "/placeholder.svg"}
                                alt={blogs[index].heading}
                                width={300}
                                height={200}
                                className="object-cover w-full h-48 md:h-full"
                              />
                            </div>
                            <div className="p-4 md:w-2/3">
                              <div className="flex items-center mb-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{blogs[index].date}</span>
                              </div>
                              <h4 className="mb-2 text-lg font-semibold text-black">
                                {blogs[index].heading}
                              </h4>
                              <p className="mb-4 text-sm text-gray-700 line-clamp-2">
                                {blogs[index].description}
                              </p>
                              <Button asChild variant="outline" size="sm">
                                {blogs[index].link ? (
                                  <a
                                    href={blogs[index].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                  >
                                    View More <ArrowRight className="w-4 h-4 ml-2" />
                                  </a>
                                ) : (
                                  <Link href={`/blog/${blogs[index].slug}`} className="flex items-center">
                                    View More <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                )}
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Sticky contact button */}
       <div className="fixed z-50 bottom-8 right-8">
        <div className="relative">
          <Button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="bg-[#FFD700] text-black hover:bg-[#FFC700] rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>

          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 flex flex-col gap-2 mb-4 bottom-full"
              >
                {[
                  {
                    icon: MessageCircle,
                    href: "https://wa.me/8826211177",
                    color: "bg-[#25D366]",
                  },
                  {
                    icon: Mail,
                    href: "mailto:info@ebaseinfra.com",
                    color: "bg-[#EA4335]",
                  },
                  { icon: Phone, href: "tel:8826211177", color: "bg-[#0077B5]" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      asChild
                      className={`${item.color} hover:brightness-110 text-white rounded-full w-12 h-12 shadow-lg`}
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <item.icon className="w-6 h-6" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div> 
    </div>
  );
}
