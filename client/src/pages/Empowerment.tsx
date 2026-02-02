import { Link } from "wouter";
import { ArrowRight, BookOpen, Lightbulb, Target, Heart, Users, TrendingUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const resources = [
  {
    icon: BookOpen,
    title: "Business Education",
    description: "Learn the fundamentals of building a sustainable business, from marketing basics to financial management.",
    topics: ["Marketing Strategies", "Personal Branding", "Financial Literacy", "Goal Setting"]
  },
  {
    icon: Lightbulb,
    title: "Mindset Development",
    description: "Develop the mental resilience and confidence needed to succeed as an entrepreneur.",
    topics: ["Growth Mindset", "Overcoming Fear", "Building Confidence", "Positive Habits"]
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Learn how to set meaningful goals and create actionable plans to achieve them.",
    topics: ["SMART Goals", "Action Planning", "Progress Tracking", "Celebrating Wins"]
  },
  {
    icon: Users,
    title: "Leadership Skills",
    description: "Develop the skills to lead yourself and others with authenticity and impact.",
    topics: ["Team Building", "Communication", "Mentorship", "Inspiring Others"]
  }
];

const empowermentPrinciples = [
  {
    title: "Start Where You Are",
    description: "You don't need to have it all figured out. Every journey begins with a single step, and we'll be there to guide you."
  },
  {
    title: "Progress Over Perfection",
    description: "Success isn't about being perfect. It's about showing up, learning from mistakes, and continuing to grow."
  },
  {
    title: "Community Support",
    description: "You're never alone on this journey. Our community is here to encourage, support, and celebrate with you."
  },
  {
    title: "Your Pace, Your Way",
    description: "Everyone's path is different. We encourage you to build at a pace that works for your life and circumstances."
  }
];

const inspirationalQuotes = [
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "She believed she could, so she did.",
    author: "R.S. Grey"
  },
  {
    quote: "The question isn't who's going to let me; it's who's going to stop me.",
    author: "Ayn Rand"
  }
];

export default function Empowerment() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Empowerment & Resources - Grow Your Mind"
        description="Access business education, mindset development, and leadership resources designed to help women entrepreneurs succeed. Learn from our comprehensive training programs and supportive community."
        keywords="business education, empowerment resources, mindset development, leadership skills, entrepreneur training, personal growth"
        canonicalPath="/empowerment"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.08),transparent_60%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Empowerment & Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Grow Your Mind, Build Your Future
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowerment starts with knowledge. Access resources designed to help you 
              develop the skills, mindset, and confidence to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Empowerment Philosophy */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Empowerment Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              True empowerment isn't about quick fixes or empty motivation. It's about 
              equipping you with real skills, practical knowledge, and the support you need.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {empowermentPrinciples.map((principle, index) => (
              <Card key={index} className="border-border bg-background text-center">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access educational content designed to help you grow as an entrepreneur and leader.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover-elevate border-border bg-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <resource.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {resource.topics.map((topic, tIndex) => (
                          <span 
                            key={tIndex} 
                            className="inline-block px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Words of Inspiration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sometimes we all need a reminder of what's possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {inspirationalQuotes.map((item, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed mb-4 italic">
                    "{item.quote}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">— {item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <TrendingUp className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Grow Together
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Personal development is most effective when you're part of a supportive community. 
                  At Women of Worth Projects, you'll find women who understand your challenges and 
                  celebrate your victories.
                </p>
                <p>
                  Through group training sessions, one-on-one mentorship, and community events, 
                  you'll have opportunities to learn, share, and grow alongside others who are 
                  on similar journeys.
                </p>
                <p>
                  We believe that when women support women, incredible things happen. Join us and 
                  experience the power of community-driven growth.
                </p>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 border border-border">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                What Our Community Offers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Regular training and development sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Access to experienced mentors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Supportive online community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Recognition and celebration of milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Resources for continued learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you're looking to develop new skills, build a business, or simply 
            connect with like-minded women, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunity">
              <Button size="lg" data-testid="button-empowerment-opportunity">
                Explore the Opportunity
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-empowerment-contact">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
