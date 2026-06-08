import { Inbound } from "inboundemail";

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found - emails will not be sent");
}

const client = apiKey ? new Inbound({ apiKey }) : null;

const EMAIL_FROM = "Cledwyn from Lekker Network <cledwyn@lekker.network>";

interface ContactEmailPayload {
  name: string;
  email: string;
  phone: string;
  interestLabel: string;
  message: string;
}

export async function sendContactFormEmails(
  payload: ContactEmailPayload,
): Promise<boolean> {
  if (!client) {
    console.error("INBOUND_API_KEY not configured; skipping outbound emails");
    return false;
  }

  const { name, email, phone, interestLabel, message } = payload;

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8b4c5c;">New Contact Form Submission</h2>
      <p>You have received a new inquiry from the Women of Worth Projects website.</p>

      <div style="background-color: #f8f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interestLabel}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>

      <p style="color: #666; font-size: 12px;">
        This email was sent from the Women of Worth Projects contact form.
      </p>
    </div>
  `;

  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8b4c5c;">Thank You for Reaching Out!</h2>
      <p>Dear ${name},</p>

      <p>Thank you for contacting Women of Worth Projects. We have received your message and will get back to you within 24-48 hours.</p>

      <div style="background-color: #f8f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Your inquiry:</strong> ${interestLabel}</p>
        <p><strong>Your message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>

      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Call us at <a href="tel:+27677744074">067 774 4074</a></li>
        <li>WhatsApp us at <a href="https://wa.me/27677744074">+27 67 774 4074</a></li>
      </ul>

      <p>Warm regards,<br>The Women of Worth Projects Team</p>

      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

      <p style="color: #666; font-size: 12px;">
        Empowerment & Enterprise<br>
        Women of Worth Projects<br>
        <a href="https://womenofworthprojects.co.za">womenofworthprojects.co.za</a>
      </p>
    </div>
  `;

  await Promise.all([
    client.emails.send({
      from: EMAIL_FROM,
      to: "info@wowprojects.co.za",
      subject: `New Contact Form Submission - ${interestLabel}`,
      html: adminHtml,
    }),
    client.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Thank you for contacting Women of Worth Projects",
      html: userHtml,
    }),
  ]);

  return true;
}
