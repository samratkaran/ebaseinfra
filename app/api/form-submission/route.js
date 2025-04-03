import { NextResponse } from "next/server"
import { storeFormSubmission } from "@/lib/form-utils"

export async function POST(request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.comment) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Store the submission
    const result = await storeFormSubmission(data)
    console.log(data)

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      submissionId: result.submissionId,
    })
    
  } catch (error) {
    console.error("Error processing form submission:", error)

    return NextResponse.json({ success: false, message: "Failed to process submission" }, { status: 500 })
  }
}