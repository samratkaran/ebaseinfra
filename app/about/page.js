"use client"

import { useEffect } from "react"
import Image from "next/image"
import PageCarousel from "@/components/page-carousel"
import Breadcrumb from "@/components/breadcrumb"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"
import jbimage from "@/Assets/jb.jpg"
import logo from "@/Assets/new_logo.png"
import members from "@/Assets/members.jpg"
import mission from "@/Assets/mission.jpg"
import vision from "@/Assets/vision.jpg"

const carouselImages = [
  carousel_one,
  carousel_two,
  carousel_three
]

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const breadcrumbItems = [{ label: "About Us" }]

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
            Welcome to <b>Ebase Infratech Pvt Ltd</b>, your trusted real estate channel partner. We specialize in connecting homebuyers and investors with India’s top builders, ensuring the best real estate opportunities in both residential and commercial segments. Our expertise extends beyond India, with a strong presence in <b>Dubai and Kuwait</b>, catering to global investors looking for premium properties.
            </p>
            <p className="mb-4 text-lg">
            At Ebase Infratech, we go beyond traditional real estate services. Our portfolio includes <b> pre-engineering works</b> and <b>major land deals</b>, offering end-to-end solutions for developers, landowners, and businesses. Whether you’re looking for a luxury home, a strategic investment, or large-scale land acquisitions, we have the expertise and network to make it happen.
            </p>
            <p className="text-lg">
            With a commitment to transparency, excellence, and innovation, we strive to redefine the real estate experience for our clients. Partner with us and unlock the finest real estate opportunities in India and beyond.
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

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#FFD700]">Integrity</h3>
              <p className="text-black">
                We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our
                dealings.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#FFD700]">Excellence</h3>
              <p className="text-black">
                We strive for excellence in everything we do, from customer service to property selection and
                negotiation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#FFD700]">Client-Centric</h3>
              <p className="text-black">
                Our clients' needs and satisfaction are at the heart of our business. We go above and beyond to exceed
                expectations.
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* <h2 className="mb-6 text-2xl font-semibold">Our Team</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
           
              <div  className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative h-[350px]">
                  <Image
                    src={jbimage}
                    alt={`Team Member`}
                    fill
                    className="object-cover"
                  />
                </div>.
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-600">Jaskanwarjeet Singh Bakshi</h3>
                  <p className="font-semibold text-black"> Managing Director</p>
                </div>
              </div>
              <div  className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative h-[250px]">
                  <Image
                    src={`/placeholder.svg?height=250&width=250&text=Team+Member`}
                    alt={`Team Member`}
                    fill
                    className="object-cover"
                  />
                </div>.
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-black">karan</h3>
                  <p className="text-gray-600">Real Estate Consultant</p>
                </div>
              </div>
              <div  className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative h-[250px]">
                  <Image
                    src={`/placeholder.svg?height=250&width=250&text=Team+Member`}
                    alt={`Team Member`}
                    fill
                    className="object-cover"
                  />
                </div>.
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-black">karan</h3>
                  <p className="text-gray-600">Real Estate Consultant</p>
                </div>
              </div>
              <div  className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative h-[250px]">
                  <Image
                    src={`/placeholder.svg?height=250&width=250&text=Team+Member`}
                    alt={`Team Member`}
                    fill
                    className="object-cover"
                  />
                </div>.
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-black">karan</h3>
                  <p className="text-gray-600">Real Estate Consultant</p>
                </div>
              </div>
              
          
          </div> */}

          <section className="container px-4 py-12 mx-auto">
      {/* First Row */}
      <div className="flex flex-col items-center mb-12 md:flex-row">
        {/* Text Column (8 Columns in Medium+) */}
        <div className="w-full px-4 md:w-2/3">
          <h2 className="relative inline-block text-2xl font-bold text-center">
          MISSION
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
          </h2>
          <p className="mt-4 text-[#d6cdcd]">
         

Our mission is to empower clients with expert market insights, premium real estate options, and strategic investment opportunities that align with their financial goals. Whether it’s luxury residential apartments, commercial spaces, pre-engineering works, or major land deals, we strive to deliver value-driven and tailor-made solutions.<br />

We envision a future where real estate transactions are hassle-free, technology-driven, and highly rewarding for all stakeholders. By focusing on customer satisfaction, market expertise, and ethical business practices, we aim to build long-lasting relationships and create wealth for our clients.<br />

With a strong presence in Gurugram, Dubai, and Kuwait, we continuously expand our portfolio to include high-growth properties, strategic land acquisitions, and cutting-edge real estate developments. Through innovation, integrity, and excellence, we ensure every investment is a step toward a brighter and more secure future.<br />
          </p>
        </div>
        {/* Image Column (4 Columns in Medium+) */}
        <div className="w-full px-4 md:w-1/3">
          <Image 
            src={mission} 
            alt="Sample" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Row (Reverse Layout) */}
      <div className="flex flex-col items-center md:flex-row-reverse">
        {/* Text Column (8 Columns in Medium+) */}
        <div className="w-full px-4 md:w-2/3">
          <h2 className="relative inline-block text-2xl font-bold text-center">
         VISION
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
          </h2>
          <p className="mt-4 text-[#d6cdcd]">
          At Ebase Infratech, our vision is to be recognized as India’s most trusted and preferred real estate channel partner, known for our commitment to quality, transparency, and innovation.  <br />

<ul>We aspire to transform the real estate sector by:</ul>
 <p
> ✅ Providing premium real estate solutions that cater to both residential and commercial needs.</p>
 <p>✅ with top builders and developers to bring the finest properties to investors.</p>
 <p>✅ technology and data-driven insights to help clients make informed decisions.</p>
 <p>✅ our global footprint in key markets like Dubai and Kuwait, offering international real estate opportunities.</p>
 <p
>✅ excellence in pre-engineered structures and major land acquisitions, supporting urban development.</p>

Our goal is to simplify the property-buying process, ensuring that every client experiences a smooth, transparent, and rewarding transaction. We are dedicated to shaping the future of real estate by embracing cutting-edge solutions, sustainable practices, and customer-first strategies. <br /> 
          </p>
        </div>
        {/* Image Column (4 Columns in Medium+) */}
        <div className="w-full px-4 md:w-1/3">
          <Image 
            src={vision} 
            alt="Sample" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

          
         
        </div>
      </div>
    </div>
  )
}

