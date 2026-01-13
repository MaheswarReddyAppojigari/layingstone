import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/layingstone-logo.jpg";

const footerLinks = {
  services: [
    { label: "Stadium Construction", href: "#" },
    { label: "Athletic Tracks", href: "#" },
    { label: "Sports Complexes", href: "#" },
    { label: "Aquatic Centers", href: "#" },
    { label: "Tennis Courts", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Careers", href: "#" },
    { label: "News & Insights", href: "#" },
    { label: "Contact", href: "/#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-stone-dark pt-16 lg:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Layingstone Logo" 
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <span className="font-display font-bold text-xl text-accent-foreground">Layingstone</span>
            </Link>
            <p className="text-accent-foreground/60 mb-6 text-sm leading-relaxed">
              Building world-class sports infrastructure that inspires athletic 
              excellence and serves communities worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-stone-light/20 flex items-center justify-center text-accent-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-accent-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-accent-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      className="text-accent-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-accent-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-accent-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-accent-foreground/60 text-sm">
                  Bengaluru, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+918123069600"
                  className="text-accent-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  +91 81230 69600
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:info@layingstone.in"
                  className="text-accent-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  info@layingstone.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-accent-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/50 text-sm">
            © 2026 Layingstone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-accent-foreground/50 hover:text-accent-foreground/80 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-accent-foreground/50 hover:text-accent-foreground/80 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
