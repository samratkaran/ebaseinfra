"use client"

import { useState, useEffect } from "react"
import { X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already submitted the form in this session
    const hasAlreadySubmitted = localStorage.getItem("formSubmitted")
    if (hasAlreadySubmitted) {
      setHasSubmitted(true)
      return
    }

    // Initial delay before showing the form
    const initialTimer = setTimeout(() => {
      setIsOpen(true)
    }, 20000) // 20 seconds

    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    let timer

    if (!isOpen && !hasSubmitted) {
      // If form was closed but not submitted, show again after 40 seconds
      timer = setTimeout(() => {
        setIsOpen(true)
      }, 40000) // 40 seconds
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isOpen, hasSubmitted])

  // Listen for custom event to open the form
  useEffect(() => {
    const handleOpenForm = () => {
      setIsOpen(true)
    }

    window.addEventListener("openPopupForm", handleOpenForm)

    return () => {
      window.removeEventListener("openPopupForm", handleOpenForm)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number is invalid"
    }

    if (!formData.comment.trim()) newErrors.comment = "Comment is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/form-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setHasSubmitted(true)
        localStorage.setItem("formSubmitted", "true")

        // Close the form after showing success message
        setTimeout(() => {
          setIsOpen(false)
        }, 5000)
      } else {
        console.error("failed to submit form:", error)
        throw new Error("Failed to submit form") 
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      console.log('karan in catch block in pop up form')
      setErrors({ submit: "Failed to submit form. Please try again."})
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute z-10 text-gray-500 right-2 top-2 hover:text-gray-700"
              onClick={handleClose}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="p-6">
              {isSuccess ? (
                <div className="py-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-green-700 bg-green-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-black">Thank You!</h3>
                  <p className="text-gray-600">
                    We have received your query. We'll be in touch with you within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="mb-1 text-2xl font-bold text-center text-black">Get in Touch</h2>
                  <p className="mb-6 text-center text-gray-600">Have a question about our properties? Let us know!</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                        Your Name*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                        Phone Number*
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="comment" className="block mb-1 text-sm font-medium text-gray-700">
                        Your Message*
                      </label>
                      <Textarea
                        id="comment"
                        name="comment"
                        rows={4}
                        value={formData.comment}
                        onChange={handleChange}
                        className={errors.comment ? "border-red-500" : ""}
                      />
                      {errors.comment && <p className="mt-1 text-xs text-red-500">{errors.comment}</p>}
                    </div>

                    {errors.submit && (
                      <div className="p-3 text-sm text-red-500 rounded-md bg-red-50">{errors.submit}</div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-[#FFD700] text-black hover:bg-[#FFC700]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

