import { Link } from "wouter";
import { ArrowRight, CheckCircle, Users, BookOpen, TrendingUp, Heart, Clock, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const benefits = [
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "Access to thorough business education, marketing strategies, and personal development resources."
  },
  {
    icon: Users,
    title: "Mentorship & Support",
    description: "Work alongside experienced mentors who are invested in your success and growth."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Build your business around your life, not the other way around. Work when and where you choose."
  },
  {
    icon: TrendingUp,
    title: "Income Potential",
    description: "Create additional income streams through ethical, sustainable business practices."
  },
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    description: "Promote wellness products you believe in while empowering others to do the same."
  },
  {
    icon: Shield,
    title: "Low Risk Entry",
    description: "Start your journey without significant financial risk. We believe in accessible opportunity."
  }
];

const whoIsItFor = [
  "Women seeking financial independence and additional income",
  "Entrepreneurs looking for a proven business model",
  "Mothers who want flexibility to be present for their families",
  "Professionals seeking a meaningful side business",
  "Anyone passionate about health, wellness, and empowerment",
  "Community builders who love connecting with others"
];

const process = [
  {
    step: "1",
    title: "Have a Conversation",
    description: "We start with an open, no-pressure conversation to understand your goals and answer your questions."
  },
  {
    step: "2",
    title: "Learn the Business",
    description: "Receive comprehensive information about how the business works, what's involved, and what to expect."
  },
  {
    step: "3",
    title: "Make Your Decision",
    description: "Take your time to decide if this opportunity aligns with your values and goals. No rush, no pressure."
  },
  {
    step: "4",
    title: "Get Started",
    description: "If you choose to join, we'll guide you through every step with training, mentorship, and support."
  }
];

export default function Opportunity() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Business Opportunity - Build Your Future"
        description="Discover a purpose-driven business opportunity with Women of Worth Projects. Learn about our mentorship, training, and support system that helps women achieve financial independence through ethical entrepreneurship."
        keywords="business opportunity for women, network marketing, entrepreneurship training, mentorship program, work from home, financial independence"
        canonicalPath="/opportunity"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--gold)/0.08),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              The Opportunity
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Build a Business That Empowers You and Others
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Discover a purpose-driven opportunity that prioritizes education, 
              mentorship, and ethical business practices. This is more than sales — 
              it's about building something meaningful.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-opportunity-contact">
                Book a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Is This Opportunity */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                What Is This Opportunity?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Women of Worth Projects offers a business opportunity centered around 
                  health and wellness products. But what sets us apart is our approach: 
                  we believe that business education and support come before sales.
                </p>
                <p>
                  As a business partner, you'll have access to quality products you can 
                  share with others, comprehensive training programs, and a supportive 
                  community of women who are all working toward their own versions of success.
                </p>
                <p>
                  We don't believe in pushy sales tactics or unrealistic income promises. 
                  Instead, we focus on building real skills, genuine relationships, and 
                  sustainable businesses that can grow with you over time.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
                Our Promise to You
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">No misleading income claims or hype</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Transparent about what's involved</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">No pressure to join or purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Education and support at every step</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ethical practices and genuine care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              What You'll Gain
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond income potential, here's what being part of our community offers.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover-elevate border-border bg-card">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Is This Opportunity For You?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                This opportunity is designed for women who are ready to take control of 
                their financial future while making a positive impact. If any of these 
                describe you, we'd love to chat.
              </p>
              <ul className="space-y-4">
                {whoIsItFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
                Important Note
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Success in any business venture requires dedication, effort, and time. 
                We're transparent about this: there are no guarantees, and results 
                vary based on individual effort and circumstances.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What we do guarantee is ongoing support, quality training, and a 
                community that genuinely cares about your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've made the process simple and transparent. No surprises, no hidden requirements.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Let's Have a Conversation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            The best way to learn if this opportunity is right for you is through a personal 
            conversation. No pressure, no obligations — just an open dialogue about your goals 
            and how we might help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-opportunity-book">
                Book a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+27677744074">
              <Button variant="outline" size="lg" data-testid="button-opportunity-call">
                Call Us: 067 774 4074
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
