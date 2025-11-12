// Store form submissions in memory (in a real app, you'd use a database)
export const formSubmissions = []

/**
 * Store a form submission
 * @param {Object} data - The form data (name, email, phone, comment)
 * @returns {Promise} - A promise that resolves when the submission is stored
 */
export async function storeFormSubmission(data) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Store the submission in memory
  const newSubmission = {
    ...data,
    timestamp: new Date().toISOString(),
    id: `FORM-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
  }

  formSubmissions.push(newSubmission)

  // Log the submission in development
  if (process.env.NODE_ENV === "development") {
    console.log("New form submission received:", newSubmission)
  }

  // TODO: Add your API integration here in the future
  // Example:
  // const response = await fetch('your-api-endpoint', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(newSubmission)
  // });
  // const result = await response.json();
  // return result;

  return {
    success: true,
    submissionId: newSubmission.id,
  }
}

/**
 * Get all stored submissions
 * @returns {Array} - Array of submissions
 */
export function getFormSubmissions() {
  return [...formSubmissions]
}
