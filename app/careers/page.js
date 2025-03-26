"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import PageCarousel from "@/components/page-carousel"
import Breadcrumb from "@/components/breadcrumb"
import carousel_one from "@/Assets/carousel_images/carousel_one.jpg"
import carousel_two from "@/Assets/carousel_images/carousel_two.jpg"
import carousel_three from "@/Assets/carousel_images/carousel_three.jpg"

const carouselImages = [
  carousel_one,
  carousel_two,
  carousel_three
]

const jobOpenings = [
  {
    title: "Real Estate Consultant",
    location: "New Delhi",
    type: "Full-time",
    description:
      "We are looking for experienced real estate consultants to join our team. The ideal candidate should have excellent communication skills and a passion for real estate.",
  },
  {
    title: "Property Manager",
    location: "Mumbai",
    type: "Full-time",
    description:
      "Responsible for managing luxury properties, coordinating with owners and tenants, and ensuring property maintenance.",
  },
  {
    title: "Marketing Specialist",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Create and implement marketing strategies for our luxury properties. Experience in digital marketing and real estate is preferred.",
  },
  {
    title: "Administrative Assistant",
    location: "New Delhi",
    type: "Part-time",
    description: "Support our team with administrative tasks, client communication, and office management.",
  },
]

export default function CareersPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const breadcrumbItems = [{ label: "Careers" }]

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">  This Page is Under Construction</h1>
        <h3>if You want to join Our Team Please mail us on: hr@ebaseinfra.com</h3>

        {/* <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Join Our Team</h2>
            <p className="mb-4 text-lg">
              At Realtime Realtors, we're always looking for talented individuals who are passionate about real estate
              and committed to providing exceptional service to our clients.
            </p>
            <p className="mb-4 text-lg">
              We offer a dynamic work environment, competitive compensation, and opportunities for professional growth
              and development.
            </p>
            <p className="text-lg">
              If you're interested in joining our team, please check our current openings below or send your resume to{" "}
              <a href="mailto:careers@realtimerealtors.in" className="text-[#FFD700] hover:text-[#FFC700]">
                careers@realtimerealtors.in
              </a>
              .
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Why Work With Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">✓</span>
                <span>Work with luxury properties and high-profile clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">✓</span>
                <span>Competitive compensation and incentive programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">✓</span>
                <span>Professional development and training opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">✓</span>
                <span>Collaborative and supportive work environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">✓</span>
                <span>Work-life balance and flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-2">✓</span>
                <span>Health insurance and retirement benefits</span>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div>
          <h2 className="mb-6 text-2xl font-semibold">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="px-3 py-1 mr-2 text-sm text-gray-800 bg-gray-100 rounded-full">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full">{job.type}</span>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">{job.description}</p>
                <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700]">Apply Now</Button>
              </div>
            ))}
          </div>
        </div> */}
      </div>

     
    </div>
  )
}

