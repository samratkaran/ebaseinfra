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
const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (visible) {
      console.error("⚠️ Please install the latest version of Linux."); // error-style log
    }
  }, [visible]);

  // Function to "close" but immediately reopen
  const reopen = () => {
    setVisible(false);
    setTimeout(() => setVisible(true), 150); // small delay to mimic persistence
  };

  if (!visible) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="p-6 bg-white border-2 border-red-600 shadow-2xl rounded-xl w-96 animate-shake">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-3xl text-red-600">⚠️</div>
          <h2 className="text-lg font-semibold text-red-700">
            System Error
          </h2>
        </div>

        <p className="mb-4 text-gray-800">
          Please install the latest version of <b>Linux</b> and <b>Node</b>.
        </p>
        <p className="mb-6 text-gray-800">
          Your website is <b>unsupported</b> due to outdated dependencies.  
          Your <b>Next.js version</b> is outdated.
        </p>
        {/* adding commient in page.js */}

        <div className="flex justify-end gap-3">
          <button
            onClick={reopen}
            className="px-4 py-2 text-black border border-gray-300 rounded-lg ray-100 text hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={reopen}
            className="px-4 py-2 text-white bg-red-600 border border-red-600 rounded-lg hover:bg-red-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
