import { NextResponse } from "next/server"
import { getEnquiries } from "@/lib/email-utils"

export async function GET() {
  try {
    // Get all enquiries
    const enquiries = getEnquiries()

    return NextResponse.json({
      success: true,
      enquiries,
    })
  } catch (error) {
    console.error("Error fetching enquiries:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch enquiries",
      },
      { status: 500 },
    )
  }
}