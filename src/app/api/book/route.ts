import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Honeypot check
  if (data.honeypot) {
    return NextResponse.json({ success: true });
  }

  const { name, phone, email, town, beds, baths, service, notes } = data;

  // Build email body
  const body = `
New Booking Request from murrysmaids.com
=========================================

Name: ${name}
Phone: ${phone}
Email: ${email}
Town: ${town}
Bedrooms: ${beds}
Bathrooms: ${baths}
Service: ${service}
Notes: ${notes || "None"}

---
Sent from murrysmaids.com booking form
  `.trim();

  // Try Resend if API key is set, otherwise log
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "bookings@murrysmaids.com",
          to: process.env.BOOKING_EMAIL || "murrysmaidservice@outlook.com",
          subject: `New Booking: ${name} — ${service} clean in ${town}`,
          text: body,
          reply_to: email,
        }),
      });
    } catch (err) {
      console.error("Failed to send email:", err);
    }
  } else {
    console.log("No RESEND_API_KEY set. Booking received:", body);
  }

  return NextResponse.json({ success: true });
}
