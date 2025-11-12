// Store enquiries in memory (in a real app, you'd use a database)
export const enquiries = []

/**
 * Store an enquiry about a property
 * @param {Object} data - The enquiry data
 * @returns {Promise} - A promise that resolves when the enquiry is stored
 */
export async function storeEnquiry(data) {
  // Store the enquiry in memory
  const newEnquiry = {
    ...data,
    timestamp: new Date().toISOString(),
    status: "received",
    id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
  }

  enquiries.push(newEnquiry)

  // Log the enquiry in development
  if (process.env.NODE_ENV === "development") {
    console.log("New enquiry received:", newEnquiry)
  }

  return {
    success: true,
    enquiryId: newEnquiry.id,
  }
}

/**
 * Get all stored enquiries
 * @returns {Array} - Array of enquiries
 */
export function getEnquiries() {
  return [...enquiries]
}
