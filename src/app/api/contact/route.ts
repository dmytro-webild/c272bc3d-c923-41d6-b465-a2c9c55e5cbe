import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, recipientEmail = 'Luxorasites.build@gmail.com' } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send email using a service like Resend, SendGrid, or Nodemailer
    // For now, we'll use Resend (popular choice for Next.js)
    // You'll need to install: npm install resend
    // And set RESEND_API_KEY environment variable

    // Example using Resend:
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@luxorasites.com',
        to: recipientEmail,
        subject: 'New Website Inquiry',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>A new visitor has submitted their email through the contact form on your website.</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send email:', await response.text());
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
