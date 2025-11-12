import { NextResponse } from "next/server"
import { storeFormSubmission } from "@/lib/form-utils"
import { sendFormEmail } from "@/lib/mailer"

export async function POST(request) {
  try {
    const data = await request.json()

    if (!data.name || !data.email || !data.phone || !data.comment) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }
    console.log('karan in try block')

    const result = await storeFormSubmission(data)

    // Send the email
    try {
      await sendFormEmail(data)
      console.log("data send to mailer", data)
      console.log("Email sent successfully")
    } catch (err) {
      console.error("❌ Email sending failed:", err)
    }
    

    return NextResponse.json({
      success: true,
      message: "Form submitted and email sent successfully",
      submissionId: result.submissionId,
    })

  } catch (error) {
    console.log('karan is here becaouse error came')
    console.error("Error processing form submission:", error)
    console.log("Running on", process.env.NODE_ENV);
console.log("Sending from:", process.env.SMTP_USER);

    return NextResponse.json({ success: false, message: "Failed to process submission" }, { status: 500 })

  }
}
