"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
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

export default function ContactPage() {
  const [showPopupForm, setShowPopupForm] = useState(false)

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const breadcrumbItems = [{ label: "Contact Us" }]

  const handleContactClick = () => {
    // Dispatch a custom event to trigger the popup form
    const event = new CustomEvent("openPopupForm")
    window.dispatchEvent(event)
  }

  return (
    <div>
      {/* Carousel */}
      <PageCarousel images={carouselImages} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-2xl font-semibold text-black">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-[#534d4d]">Address</h3>
                    <p className="text-gray-600">Unit 151, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana 122018</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-[#534d4d]">Phone</h3>
                    <p className="text-gray-600">+91 8826211177</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-[#534d4d]">Email</h3>
                    <p className="text-gray-600">info@ebaseinfra.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-[#534d4d]">Business Hours</h3>
                    <p className="text-gray-600">Wednesday  - Monday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Tuseday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 mt-8 text-center bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-[#2c2525]">Have a Question?</h2>
              <p className="mb-6 text-gray-600">
                We'd love to hear from you! Click the button below to send us a message and we'll get back to you as
                soon as possible.
              </p>
              <Button
                onClick={handleContactClick}
                className="bg-[#FFD700] text-black hover:bg-[#FFC700] px-8 py-6 text-lg"
              >
                Send us a Message
              </Button>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0082299069095!2d77.03960357549276!3d28.41385657578494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c6bc0000001%3A0xb3d04dce68618d2a!2sEBASE%20Infratech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1742561729220!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="grayscale-[50%] hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-[#2c2525]">Visit Our Office</h2>
              <p className="text-gray-600">
                We invite you to visit our office to discuss your real estate needs in person. Our team of experts is
                ready to assist you with all your property requirements.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button asChild variant="outline" className="bg-[#FFD700] text-black hover:bg-[#FFC700]">
                  <a href="tel:+918826211177"className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Call for Appointment</span>
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://maps.app.goo.gl/o9AJN5PsLRUwx4417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Get Directions</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Our Location</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg">
            
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-gray-500">Google Map will be displayed here</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}



