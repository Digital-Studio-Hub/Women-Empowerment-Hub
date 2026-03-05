import { Link } from "wouter";
import { ArrowRight, Heart, Target, Eye, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import founderImage from "@assets/WhatsApp_Image_2026-02-03_at_15.49.59_(1)_1772702074570.jpeg";
import celebrationImage from "@assets/WhatsApp_Image_2026-02-03_at_15.49.59_1772702074571.jpeg";

const coreBeliefs = [
  {
    icon: Heart,
    title: "Authentic Empowerment",
    description: "We believe in genuine, no-hype empowerment that focuses on real skills and sustainable growth."
  },
  {
    icon: Users,
    title: "Community Over Competition",
    description: "Our strength lies in our unity. We lift each other up and celebrate every success together."
  },
  {
    icon: Award,
    title: "Ethical Excellence",
    description: "We conduct business with integrity, transparency, and respect for all stakeholders."
  },
  {
    icon: Sparkles,
    title: "Wellness & Purpose",
    description: "We promote holistic wellness - physical, financial, and emotional - as the foundation of success."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Our Story and Mission"
        description="Learn about Women of Worth Projects, founded by Sylvia Emma Plaatjies. Discover our vision for women's empowerment, our mission of ethical business education, and our values-based approach to wellness entrepreneurship."
        keywords="about women of worth, sylvia emma plaatjies, founder story, women empowerment mission, ethical business values"
        canonicalPath="/about"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-card to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.06),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              The Story Behind Women of Worth Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to empower women through ethical business practices, 
              mentorship, and genuine opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Meet Our Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                Sylvia Emma Plaatjies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sylvia Emma Plaatjies founded Women of Worth Projects with a singular vision: 
                  to create a platform where women could discover their potential and build businesses 
                  that align with their values.
                </p>
                <p>
                  Having experienced firsthand the transformative power of entrepreneurship and 
                  community support, Sylvia understood that true empowerment comes not from 
                  aggressive sales tactics, but from education, mentorship, and genuine care.
                </p>
                <p>
                  Today, Women of Worth Projects stands as a testament to her belief that when women 
                  are given the right tools, knowledge, and support, they can achieve extraordinary things.
                </p>
              </div>
              <blockquote className="mt-8 pl-6 border-l-4 border-primary italic text-foreground">
                "Every woman has the potential to create lasting impact. Our role is to help unlock that potential."
                <footer className="mt-2 text-sm text-muted-foreground not-italic">— Sylvia Emma Plaatjies</footer>
              </blockquote>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                  <img
                    src={founderImage}
                    alt="Sylvia Emma Plaatjies, founder of Women of Worth Projects, proudly showcasing wellness products and business materials"
                    className="w-full h-auto object-cover"
                    data-testid="img-founder"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground" data-testid="text-founder-title">Founder & Visionary</h3>
                  <p className="text-muted-foreground mt-1">Leading with heart and purpose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading platform for women's empowerment in business, creating a world 
                  where every woman has the opportunity, knowledge, and support to achieve financial 
                  independence through ethical entrepreneurship.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-gradient-to-br from-card to-accent/10">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower women through comprehensive business education, mentorship, and 
                  community support. We provide the tools and guidance needed to build sustainable 
                  businesses while promoting wellness and ethical practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              What We Believe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core beliefs shape every decision we make and every interaction we have.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreBeliefs.map((belief, index) => (
              <Card key={index} className="group hover-elevate border-border bg-background">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                    <belief.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                <img
                  src={celebrationImage}
                  alt="Women of Worth team celebrating a milestone achievement together, surrounded by red balloons and business materials"
                  className="w-full h-auto object-cover"
                  data-testid="img-celebration"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-3 italic" data-testid="text-celebration-caption">
                Celebrating milestones together — this is what community-driven success looks like
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Why Women of Worth Projects Exists
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We exist because we've seen too many women held back by circumstances, 
                  lack of opportunity, or outdated systems that don't serve them.
                </p>
                <p>
                  We believe that with the right education, support, and community, 
                  every woman can build a business that provides financial freedom 
                  while staying true to her values.
                </p>
                <p>
                  This isn't about get-rich-quick schemes or aggressive sales tactics. 
                  It's about building something meaningful, sustainable, and genuinely empowering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to learn more about the opportunity or simply want to connect? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunity">
              <Button size="lg" data-testid="button-about-opportunity">
                Explore the Opportunity
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-about-contact">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
