import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
export async function sendFormEmail(data) {
  console.log("📤 Preparing to send email...")
  console.log("📨 Email content:", data)

  console.log("SMTP_HOST:",'smtp.gmail.com')
console.log("SMTP_PORT:", 465)
console.log("SMTP_SECURE:", 'true')
console.log("SMTP_USER:", 'karan@ebaseinfra.com')

  let transporter
  try {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: parseInt(465),
      secure: "true", // true for port 465, false for 587
      auth: {
        user: 'karan@ebaseinfra.com',
        pass: 'rudpcywtcnoenilo',
      },
    })
    console.log("✅ Transporter created successfully.")
  } catch (err) {
    console.log("❌ Failed to create transporter:", err)
    throw new Error("Failed to create transporter")
  }

  const mailOptions = {
    from: `"Website Enquiry" <karan@ebaseinfra.com>`,
    to: 'ebaseinfratech@gmail.com',
    subject: "New Website Form Submission",
    html: `
      <table width='60%' style='border:1px solid black; border-collapse: collapse; font-family: Arial, sans-serif;'>
        <thead>
          <tr>
            <th style='background-color:#0051A4; color:#FFFFFF; text-align:center; padding: 10px; border: 1px solid #000;'>Description</th>
            <th style='background-color:#0051A4; color:#FFFFFF; text-align:center; padding: 10px; border: 1px solid #000;'>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr style='background-color:#f5f5f5;'>
            <td style='padding: 8px; border: 1px solid #000;'>Received At</td>
            <td style='padding: 8px; border: 1px solid #000;'>${new Date().toLocaleString()}</td>
          </tr>
          <tr style='background-color:#AAD4FF;'>
            <td style='padding: 8px; border: 1px solid #000;'>Name</td>
            <td style='padding: 8px; border: 1px solid #000;'>${data.name}</td>
          </tr>
          <tr style='background-color:#AAD4FF;'>
            <td style='padding: 8px; border: 1px solid #000;'>Email</td>
            <td style='padding: 8px; border: 1px solid #000;'>${data.email}</td>
          </tr>
          <tr style='background-color:#AAD4FF;'>
            <td style='padding: 8px; border: 1px solid #000;'>Phone</td>
            <td style='padding: 8px; border: 1px solid #000;'>${data.phone}</td>
          </tr>
          <tr style='background-color:#AAD4FF;'>
            <td style='padding: 8px; border: 1px solid #000;'>Comment</td>
            <td style='padding: 8px; border: 1px solid #000;'>${data.comment}</td>
          </tr>
        </tbody>
      </table>
    `
  }

  console.log("📤 Attempting to send mail...")
  await transporter.sendMail(mailOptions)
  console.log("✅ Mail sent successfully.")
}
