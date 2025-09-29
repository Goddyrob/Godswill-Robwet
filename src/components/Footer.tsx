import { Github, Linkedin, Instagram, Twitter, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Godswill Robwet
            </h3>
            <p className="text-muted-foreground mb-4">
              Building innovative tech solutions that empower businesses and communities across Kenya and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary flex items-center justify-center transition-smooth group"
                  >
                    <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-smooth" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Godswill Robwet. All Rights Reserved. Made with
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
