import { Link } from "wouter";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import lekkerLogo from "@assets/lekkerlogo_1770056494854.png";
import badgeLevel1 from "@assets/Badge_Level_1_1770056485391.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Women of Worth</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Empowering women to build sustainable businesses through mentorship, wellness, and opportunity.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-primary" />
              <span>Purpose-driven empowerment</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/opportunity" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-opportunity">
                  The Opportunity
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/empowerment" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-empowerment">
                  Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Badge (Center) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-start">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Verified Badge</h3>
            <a 
              href="https://lekker.network/the-lekker-network-verified" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              data-testid="link-verified-badge"
            >
              <img 
                src={badgeLevel1} 
                alt="Lekker Network Verified Badge" 
                className="w-24 h-auto transition-transform group-hover:scale-105"
              />
              <span className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Lekker Network Verified
              </span>
            </a>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+27677744074" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-phone">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>067 774 4074</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@wowprojects.co.za" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-email">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@wowprojects.co.za</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>South Africa</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-muted/50 rounded-md">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Disclaimer:</strong> Individual results may vary. Success depends on dedication, effort, and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Women of Worth Projects
            </p>

            {/* Lekker Network Logo - Center */}
            <a 
              href="https://lekker.network/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              data-testid="link-lekker-network"
            >
              <img 
                src={lekkerLogo} 
                alt="Lekker Network" 
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
              <span className="mt-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Powered by Lekker Network
              </span>
            </a>

            {/* Legal Links - Right */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors" data-testid="link-bottom-terms">
                Terms of Service
              </Link>
              <span className="text-border">|</span>
              <Link href="/privacy" className="hover:text-primary transition-colors" data-testid="link-bottom-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
