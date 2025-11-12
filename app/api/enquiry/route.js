import { NextResponse } from "next/server"
import { storeEnquiry } from "@/lib/email-utils"

export async function POST(request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.propertyId) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Store the enquiry
    const result = await storeEnquiry(data)

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully",
      enquiryId: result.enquiryId,
    })
  } catch (error) {
    console.error("Error processing enquiry:", error)

    return NextResponse.json({ success: false, message: "Failed to process enquiry" }, { status: 500 })
  }
}
