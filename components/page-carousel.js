"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function PageCarousel({ images, interval = 3000 }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh]">
      {images.map((src, index) => (
        <Image
          key={index} // Use index to ensure unique key
          src={src || "/placeholder.svg"}
          alt={`Slide ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl"></h1>
        </div>
      </div>
    </div>
  )
}
