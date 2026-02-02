import { Link } from "wouter";
import { ArrowRight, Heart, Users, Sparkles, TrendingUp, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import mainLogo from "@assets/Main_Logo_1770057803262.png";

const values = [
  {
    icon: Heart,
    title: "Purpose-Driven",
    description: "We believe in building businesses with meaning. Every endeavor starts with the desire to make a positive impact."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Success is sweeter when shared. We grow together, support each other, and celebrate every milestone as a family."
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "We equip women with the knowledge, tools, and confidence to take control of their financial futures."
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "We focus on building lasting success through ethical practices and genuine value creation."
  }
];

const testimonials = [
  {
    quote: "Women of Worth Projects gave me the confidence and support to start my own business journey. The mentorship has been invaluable.",
    author: "Thandi M.",
    role: "Business Partner"
  },
  {
    quote: "I found more than a business opportunity here - I found a community of strong, inspiring women who lift each other up.",
    author: "Nomsa K.",
    role: "Team Leader"
  },
  {
    quote: "The focus on education and ethical business practices is what drew me in. This is empowerment done right.",
    author: "Zanele P.",
    role: "Business Builder"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Empowering Women to Build Sustainable Businesses"
        description="Women of Worth Projects is a purpose-driven platform for growth, wellness, and opportunity. Join our community of ambitious women creating their own success stories through mentorship and ethical business practices."
        keywords="women empowerment, business opportunities, wellness entrepreneurship, women-led business, mentorship, financial independence"
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--gold)/0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
                <Star className="h-4 w-4" />
                <span>Empowerment & Enterprise</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Empowering Women to Build{" "}
                <span className="text-gradient-gold">Sustainable Businesses</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                A purpose-driven platform for growth, wellness, and opportunity. 
                Join a community of ambitious women creating their own success stories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/opportunity">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-opportunity">
                    Learn About the Opportunity
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-hero-contact">
                    Speak to Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl" />
                <img 
                  src={mainLogo} 
                  alt="Women of Worth Projects" 
                  className="relative w-72 sm:w-80 lg:w-96 h-auto"
                  data-testid="img-hero-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Women of Worth Projects exists to empower women through education, mentorship, and ethical business opportunities. 
            We believe that every woman has the potential to achieve financial independence and create meaningful impact in her community.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Education First</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Ethical Business</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Community Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Genuine Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from how we support our community to how we approach business.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover-elevate border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business First Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Business Opportunity
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                More Than Products — A Path to Financial Freedom
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Women of Worth Projects, we prioritize education and opportunity over sales. 
                Our focus is on helping you build a sustainable business that aligns with your values and goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Comprehensive business training and mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Supportive community of like-minded entrepreneurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Flexible work that fits your lifestyle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ethical approach with no pressure tactics</span>
                </li>
              </ul>
              <Link href="/opportunity">
                <Button data-testid="button-learn-more-opportunity">
                  Discover the Opportunity
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="text-center mb-6">
                <span className="text-5xl font-serif font-bold text-gradient-gold">90%</span>
                <p className="text-muted-foreground mt-2">of our partners report feeling more confident about their future</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <span className="text-2xl font-serif font-bold text-foreground">500+</span>
                  <p className="text-sm text-muted-foreground">Community Members</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <span className="text-2xl font-serif font-bold text-foreground">5+</span>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Voices from Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from women who have joined our journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Quality Health & Wellness Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting your journey to wellness with carefully selected products that we believe in and use ourselves.
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" size="lg" data-testid="button-explore-products">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you're interested in learning about our business opportunity or simply want to know more, 
            we'd love to hear from you. Let's have a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" data-testid="button-cta-learn-more">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
