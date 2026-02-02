import { Link } from "wouter";
import { ArrowRight, Leaf, Shield, Heart, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const productCategories = [
  {
    icon: Leaf,
    title: "Nutritional Supplements",
    description: "High-quality vitamins, minerals, and supplements designed to support your overall health and vitality.",
    products: ["Daily Multivitamins", "Omega-3 Complex", "Vitamin D3", "Immune Support"]
  },
  {
    icon: Shield,
    title: "Wellness Essentials",
    description: "Products that support your body's natural functions and promote long-term wellness.",
    products: ["Digestive Health", "Energy Boosters", "Sleep Support", "Stress Relief"]
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "Gentle, effective personal care products made with quality ingredients you can trust.",
    products: ["Skin Care Range", "Body Care", "Oral Health", "Personal Hygiene"]
  },
  {
    icon: Sparkles,
    title: "Weight Management",
    description: "Supportive products for those on a wellness journey, designed to complement healthy lifestyle choices.",
    products: ["Meal Replacements", "Protein Supplements", "Metabolism Support", "Healthy Snacks"]
  }
];

const productValues = [
  {
    title: "Quality First",
    description: "We only partner with manufacturers who meet rigorous quality standards."
  },
  {
    title: "Science-Backed",
    description: "Our products are formulated based on nutritional science and research."
  },
  {
    title: "Ethically Sourced",
    description: "We prioritize products that are responsibly and sustainably produced."
  },
  {
    title: "Transparent Ingredients",
    description: "We believe you should know exactly what you're putting into your body."
  }
];

export default function Products() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Health & Wellness Products"
        description="Explore our range of quality health and wellness products including nutritional supplements, personal care, and weight management solutions. Products we believe in and use ourselves."
        keywords="health products, wellness products, nutritional supplements, vitamins, personal care, weight management"
        canonicalPath="/products"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-card to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.06),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Quality Health & Wellness Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We carefully select products that we believe in and use ourselves. 
              Our focus is on quality, effectiveness, and value — not aggressive sales.
            </p>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Approach to Products
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Women of Worth Projects, products support our mission — they don't define it. 
              We believe in educating about wellness, not pushing sales.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg border border-border">
                <h3 className="font-serif font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of health and wellness products designed to support your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover-elevate border-border bg-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <category.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.products.map((product, pIndex) => (
                          <span 
                            key={pIndex} 
                            className="inline-block px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full"
                          >
                            {product}
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

      {/* How to Get Products */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Interested in Our Products?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We don't believe in pressure tactics or aggressive upselling. If you're 
                  interested in learning more about any of our products, we're happy to 
                  have a conversation.
                </p>
                <p>
                  Whether you're looking for personal use or curious about how sharing 
                  these products could become part of a business opportunity, we'll 
                  provide honest information to help you make the best decision for you.
                </p>
                <p>
                  Simply reach out, and we'll connect you with someone who can answer 
                  your questions and share their own experience with the products.
                </p>
              </div>
            </div>
            
            <Card className="border-border bg-card">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Ask About Products
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have questions about specific products or want to learn more? 
                  We're here to help with honest, helpful information.
                </p>
                <Link href="/contact">
                  <Button data-testid="button-products-ask">
                    Ask About Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4 text-center">
              Important Information
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Our products are designed to supplement a healthy lifestyle and are not intended 
                to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare 
                professional before starting any new supplement regimen.
              </p>
              <p>
                Individual results may vary. The benefits described are based on the experiences 
                of our community members and the intended use of the products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            More Than Products
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            While our products are excellent, they're just one part of what we offer. 
            Discover the business opportunity that could change your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunity">
              <Button size="lg" data-testid="button-products-opportunity">
                Learn About the Opportunity
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-products-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
