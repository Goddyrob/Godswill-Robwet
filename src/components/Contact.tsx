import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  // No local state or handlers needed for Formspree

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+254 708 580 506",
      href: "tel:+254708580506",
    },
    {
      icon: Mail,
      label: "Email",
      value: "goddyrob31@gmail.com",
      href: "mailto:goddyrob31@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kenya",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
  <div className="max-w-full sm:max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card/50 border-border hover:border-primary transition-smooth backdrop-blur-sm"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg font-semibold text-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="pt-8">
                <h3 className="text-xl font-orbitron font-bold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Available for freelance projects, collaborations, and tech consultations. Let's create something amazing together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border backdrop-blur-sm animate-fade-in">
              <CardContent className="p-6">
                <form
                  action="https://formspree.io/f/manperbp"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
