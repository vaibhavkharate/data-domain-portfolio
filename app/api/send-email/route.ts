import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, subject, message } = data;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending logic here
    // For now, we mock success response

    console.log("Received contact form submission:", data);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in send-email API:", error);
    return NextResponse.json(
      { error: "Unable to process request" },
      { status: 500 }
    );
  }
}
