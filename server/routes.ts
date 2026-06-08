import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { sendContactFormEmails } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
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

      try {
        const sent = await sendContactFormEmails({
          name,
          email,
          phone,
          interestLabel,
          message,
        });

        if (!sent) {
          return res.status(500).json({
            success: false,
            message: "Email service not configured",
          });
        }

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
