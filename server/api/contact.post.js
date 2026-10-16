import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, company, message, source } = body;

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "Not provided"}
        source: ${source || "Not provided"}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>source:</strong> ${source || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      status: 200,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      status: 500,
      message: error.message || "Failed to send email",
    };
  }
});
