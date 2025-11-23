import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ SEND MESSAGE TO YOU (Vaibhav)
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "vaibhav.s.kharate@gmail.com",
      subject: `New Message from ${name} — ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // 2️⃣ AUTO-REPLY TO SENDER (Professional Touch)
    await resend.emails.send({
      from: "Vaibhav Kharate <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for reaching out!",
      text: `
Hi ${name},

Thank you for contacting me through my portfolio website. 
I have received your message and will get back to you shortly.

Best regards,  
Vaibhav Kharate  
Data Analyst | Aspiring Data Engineer
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error sending email" },
      { status: 500 }
    );
  }
}
