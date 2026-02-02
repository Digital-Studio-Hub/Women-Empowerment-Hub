import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Terms & Conditions"
        description="Review the terms and conditions for using the Women of Worth Projects website. Understand our business opportunity disclaimer, product information policies, and user conduct guidelines."
        keywords="terms and conditions, terms of service, business opportunity disclaimer, user agreement"
        canonicalPath="/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Effective Date:</strong> January 2024
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Welcome to Women of Worth Projects. By accessing and using our website, you agree to be bound 
            by these Terms and Conditions. Please read them carefully before using our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Women of Worth Projects website, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions. If you do not agree to these 
              terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              2. Description of Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Women of Worth Projects provides information about business opportunities, health and wellness 
              products, and empowerment resources. The content on our website is for informational purposes 
              and does not constitute professional advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              3. Business Opportunity Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to transparency about our business opportunity. Please understand that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Individual results vary significantly based on effort, skills, and market conditions</li>
              <li>Success in any business venture requires dedication, time, and consistent effort</li>
              <li>We make no guarantees about income or financial success</li>
              <li>Any income examples or testimonials are not guarantees of future earnings</li>
              <li>You should independently verify all information before making business decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              4. Product Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Product descriptions, benefits, and information on our website are provided for educational 
              purposes. Our products are not intended to diagnose, treat, cure, or prevent any disease. 
              Always consult with a healthcare professional before starting any new supplement or wellness 
              regimen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the 
              property of Women of Worth Projects or its content suppliers and is protected by intellectual 
              property laws. You may not reproduce, distribute, or create derivative works without our 
              written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              6. User Conduct
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Provide false or misleading information</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our website to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Women of Worth Projects shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your use of 
              our website or services. Our total liability shall not exceed the amount you paid to us, 
              if any, in the past twelve months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              8. External Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, 
              privacy practices, or any other aspects of these external sites. Visiting external links is 
              at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              9. Modifications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective upon posting to this page. Your continued use of our website after any changes 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              10. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws 
              of South Africa, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              11. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p><strong>Email:</strong> info@wowprojects.co.za</p>
              <p><strong>Phone:</strong> 067 774 4074</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
