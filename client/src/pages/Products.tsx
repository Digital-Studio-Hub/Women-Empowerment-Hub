import { Link } from "wouter";
import { ArrowRight, Leaf, Shield, Heart, Sparkles, MessageCircle, CheckCircle, Package, Star, Crown, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import promoImage from "@assets/WhatsApp_Image_2026-02-03_at_15.44.43_1773650701858.jpeg";
import silverPackageImage from "@assets/Packages1_1773651901133.png";
import silverPackageAltImage from "@assets/Packages2_1773651901133.png";
import miiraCellImage from "@assets/Packages3_1773651901134.png";

const packages = [
  {
    icon: Package,
    name: "Starter",
    price: "R1,260",
    boxes: "1 Box",
    color: "from-secondary/30 to-secondary/10",
    badge: null,
    description: "Perfect for getting started on your wellness journey and exploring the business opportunity."
  },
  {
    icon: Star,
    name: "Bronze",
    price: "R2,160",
    boxes: "2 Boxes",
    color: "from-amber-100/60 to-amber-50/30",
    badge: null,
    description: "A great entry point with more products to share and a stronger foundation for your business."
  },
  {
    icon: Crown,
    name: "Silver",
    price: "R10,800",
    boxes: "10 Boxes",
    color: "from-slate-200/60 to-slate-100/30",
    badge: "Popular",
    description: "For serious entrepreneurs ready to build a thriving business with ample product inventory."
  },
  {
    icon: Gem,
    name: "Gold",
    price: "R21,600",
    boxes: "20 Boxes",
    color: "from-yellow-100/60 to-amber-50/30",
    badge: "Best Value",
    description: "The comprehensive package for dedicated entrepreneurs ready to build a sustainable wellness business."
  }
];

const whyJoin = [
  "No formal qualifications needed to get started",
  "Genuine income potential with dedication and effort",
  "Accessible start-up costs",
  "Proven support and training system",
  "Health-organic, quality products",
  "Global business opportunities",
  "Flexible lifestyle that works around you",
  "Meaningful, purpose-driven rewards"
];

const productValues = [
  {
    title: "Quality First",
    description: "We partner with Revoobit, whose Miira-Cell+ products meet rigorous quality and health standards."
  },
  {
    title: "Science-Backed",
    description: "Organic, health-focused formulations backed by nutritional science and research."
  },
  {
    title: "Ethically Sourced",
    description: "Products that are responsibly and sustainably produced for your peace of mind."
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
        title="Revoobit Packages & Wellness Products"
        description="Explore Revoobit wellness packages from Women of Worth Projects. Choose from Starter, Bronze, Silver, or Gold packages featuring Miira-Cell+ health-organic products. Low start-up costs, unlimited earning potential."
        keywords="revoobit packages, miira-cell, health products, wellness packages, starter package, bronze package, silver package, gold package, organic health products"
        canonicalPath="/products"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-card to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.06),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4" data-testid="text-products-label">
              Revoobit Packages
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6" data-testid="text-products-heading">
              Health-Organic Wellness Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore Revoobit's Miira-Cell+ range of health-organic products. 
              Choose the package that aligns with your wellness goals and business aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section with Image */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-why-join-heading">
                Why Join Revoobit?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Revoobit offers a unique business opportunity centred around health-organic products.
                Here's why thousands of women are building their future with us:
              </p>
              <ul className="space-y-4">
                {whyJoin.map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-why-join-${index}`}>
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                  <img
                    src={promoImage}
                    alt="Revoobit business opportunity promotional material featuring Miira-Cell+ wellness products and package details"
                    className="w-full h-auto object-cover"
                    data-testid="img-promo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-packages-heading">
              Revoobit Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that suits your goals. Every package includes Miira-Cell+ products and full access to our training and support system. Pricing is subject to change — contact us for the latest details.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="group hover-elevate border-border bg-card relative overflow-hidden" data-testid={`card-package-${pkg.name.toLowerCase()}`}>
                {pkg.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full" data-testid={`badge-${pkg.name.toLowerCase()}`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                    <pkg.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1" data-testid={`text-package-name-${pkg.name.toLowerCase()}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary" data-testid={`text-package-price-${pkg.name.toLowerCase()}`}>{pkg.price}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full mb-4" data-testid={`text-package-boxes-${pkg.name.toLowerCase()}`}>
                    {pkg.boxes}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-product-range-heading">
              The Müracare Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our packages include premium health-organic products from the Müracare range — 
              complete, herbal, and natural formulas designed to support your wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group" data-testid="product-card-miira-cell">
              <div className="rounded-lg overflow-hidden shadow-lg border border-border bg-background">
                <img
                  src={miiraCellImage}
                  alt="Miira-Cell+ by Müracare — complete herbal and natural organic formula with Swiss Green Apple Stem Cells, Grape Stem Cells, and antioxidants for cellular repair and immune support"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid="img-miira-cell"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl font-bold text-foreground">Miira-Cell+</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete herbal and natural formula with Swiss Green Apple Stem Cells 
                  and antioxidants. Supports cellular repair and immune health.
                </p>
              </div>
            </div>

            <div className="group" data-testid="product-card-silver-package">
              <div className="rounded-lg overflow-hidden shadow-lg border border-border bg-background">
                <img
                  src={silverPackageImage}
                  alt="Silver package featuring Miira-Cell+, Miira-Phyll herbal and fruit blends, and Coffeecare wellness coffee — a complete wellness collection"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid="img-silver-package"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl font-bold text-foreground">Silver Package Collection</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  The complete wellness collection including Miira-Cell+, 
                  Miira-Phyll herbal blends, and Coffeecare wellness coffee.
                </p>
              </div>
            </div>

            <div className="group" data-testid="product-card-full-range">
              <div className="rounded-lg overflow-hidden shadow-lg border border-border bg-background">
                <img
                  src={silverPackageAltImage}
                  alt="Full Müracare product range — Miira-Cell+ boxes, Miira-Phyll containing herbal and fruit blends, and Coffeecare premium wellness coffee"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid="img-full-range"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl font-bold text-foreground">Full Product Range</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Miira-Cell+, Miira-Phyll, and Coffeecare — non-GMO, natural, 
                  and organic products with green apple extract and antioxidants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Product Promise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Women of Worth Projects, we stand behind every product we recommend. 
              Quality and integrity guide everything we do.
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

      {/* How to Get Started */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We don't believe in pressure tactics or aggressive upselling. If you're 
                  interested in learning more about any of our packages, we're happy to 
                  have a conversation.
                </p>
                <p>
                  Whether you're looking for personal wellness products or curious about 
                  how sharing these products could become your own business opportunity, 
                  we'll provide honest information to help you make the best decision.
                </p>
                <p>
                  Simply reach out, and we'll connect you with someone who can answer 
                  your questions and share their own experience with the products and business.
                </p>
              </div>
            </div>
            
            <Card className="border-border bg-card">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Ask About Packages
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have questions about which package is right for you? 
                  We're here to help with honest, no-pressure guidance.
                </p>
                <Link href="/contact">
                  <Button data-testid="button-products-ask">
                    Enquire Now
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
