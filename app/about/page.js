"use client"

import { useEffect } from "react"
import Image from "next/image"
import PageCarousel from "@/components/page-carousel"
import Breadcrumb from "@/components/breadcrumb"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"
import jbimage from "@/Assets/jb.jpg"
import members from "@/Assets/members.jpg"
import mission from "@/Assets/mission.jpg"
import vision from "@/Assets/vision.jpg"

const carouselImages = [carousel_one, carousel_two, carousel_three]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const breadcrumbItems = [{ label: "About Us" }]

  const values = [
    {
      title: "Integrity",
      text: "We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.",
    },
    {
      title: "Excellence",
      text: "We strive for excellence in everything we do, from customer service to property selection and negotiation.",
    },
    {
      title: "Client-Centric",
      text: "Our clients' needs and satisfaction are at the heart of our business. We go above and beyond to exceed expectations.",
    },
  ]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">About Ebase Infratech Pvt Ltd</h1>

        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg">
              <b>Ebase Infratech Pvt Ltd</b> is a premium real estate channel partner company connecting homebuyers and investors with India's top developers.
            </p>
            <p className="mb-4 text-lg">
              We deal in high-end residential and commercial properties in Gurgaon and Delhi NCR, and also serve international investors in Dubai and Kuwait.
            </p>
            <p className="mb-4 text-lg">
              Our services range from luxury apartments, villas, 2 & 3 BHK flats, plots, commercial property, and large-scale land acquisition, all legally verified and builder-approved.
            </p>
            <p className="mb-4 text-lg">
              We also undertake pre-engineering works and land development consulting for end-to-end solutions.
            </p>
            <p className="mb-4 text-lg">
              Be it first-time homebuyers or investors, we ensure a seamless and transparent experience at every step.
            </p>
            <p className="mb-4 text-lg">
              Maintaining trust, innovation, and expertise, we aim to change the way people perceive real estate in Gurgaon and NCR.
            </p>
          </div>

          <div className="relative h-[200px] md:h-full">
            <Image
              src={members}
              width={600}
              height={600}
              alt="About Realtime Realtors"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#FFD700]">{value.title}</h3>
                <p className="text-black">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="container px-4 py-12 mx-auto">
          {/* Mission */}
          <div className="flex flex-col items-center mb-12 md:flex-row">
            <div className="w-full px-4 md:w-2/3">
              <h2 className="relative inline-block text-2xl font-bold text-center">
                OUR MISSION
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
              </h2>
              <p className="mt-4 text-[#d6cdcd]">
                Our mission is to simplify property buying in Gurgaon and Delhi NCR with trust, transparency, and proper guidance. We carefully analyze projects to ensure every property is legally verified and builder-approved.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <Image src={mission} alt="Our Mission" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center md:flex-row-reverse">
            <div className="w-full px-4 md:w-2/3">
              <h2 className="relative inline-block text-2xl font-bold text-center">
                OUR VISION
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
              </h2>
              <p className="mt-5 text-[#d6cdcd]">
                We aim to redefine trust in the real estate market of Gurgaon and NCR, offering only legally verified properties and high ROI opportunities. Our goal is to empower buyers to make smart and secure investments.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <Image src={vision} alt="Our Vision" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
