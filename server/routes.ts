import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint with ZeptoMail
  app.post("/api/send-mail", async (req, res) => {
    try {
      // Validate the request body
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: validationResult.error.flatten().fieldErrors 
        });
      }

      const { name, email, phone, interest, message } = validationResult.data;

      // Store the submission
      await storage.createContactSubmission({
        name,
        email,
        phone,
        interest,
        message,
      });

      // Map interest to readable label
      const interestLabels: Record<string, string> = {
        business: "Business Opportunity",
        products: "Products",
        general: "General Inquiry"
      };

      const interestLabel = interestLabels[interest] || interest;

      // Send email via ZeptoMail
      const zeptoMailToken = process.env.ZEPTOMAIL_TOKEN;
      
      if (!zeptoMailToken) {
        console.error("ZEPTOMAIL_TOKEN not configured");
        return res.status(500).json({ 
          success: false, 
          message: "Email service not configured" 
        });
      }

      // Admin notification email
      const adminEmailBody = {
        from: {
          address: "noreply@wowprojects.co.za",
          name: "Women of Worth Projects"
        },
        to: [
          {
            email_address: {
              address: "info@wowprojects.co.za",
              name: "Women of Worth Projects"
            }
          }
        ],
        subject: `New Contact Form Submission - ${interestLabel}`,
        htmlbody: `
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
        `
      };

      // User confirmation email
      const userEmailBody = {
        from: {
          address: "noreply@wowprojects.co.za",
          name: "Women of Worth Projects"
        },
        to: [
          {
            email_address: {
              address: email,
              name: name
            }
          }
        ],
        subject: "Thank you for contacting Women of Worth Projects",
        htmlbody: `
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
        `
      };

      // Send emails via ZeptoMail API
      const sendEmail = async (emailBody: object) => {
        const response = await fetch("https://api.zeptomail.com/v1.1/email", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": zeptoMailToken
          },
          body: JSON.stringify(emailBody)
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("ZeptoMail API error:", errorText);
          throw new Error(`ZeptoMail API error: ${response.status}`);
        }

        return response.json();
      };

      try {
        // Send both emails
        await Promise.all([
          sendEmail(adminEmailBody),
          sendEmail(userEmailBody)
        ]);

        return res.status(200).json({ 
          success: true, 
          message: "Message sent successfully" 
        });
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Return error so frontend can display appropriate message
        return res.status(500).json({ 
          success: false, 
          message: "Your message was received but we had trouble sending confirmation emails. We will still contact you soon.",
          stored: true 
        });
      }

    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred. Please try again or contact us directly." 
      });
    }
  });

  return httpServer;
}
