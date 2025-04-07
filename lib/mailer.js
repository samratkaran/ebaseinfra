import nodemailer from "nodemailer"

export async function sendFormEmail(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
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
  
  console.log("Attempting to send mail...")
  await transporter.sendMail(mailOptions)
  console.log("Mail sent successfully.")
}
