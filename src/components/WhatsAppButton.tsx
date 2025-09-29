import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "254708580506";
  const message = "Hi Godswill! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 animate-float"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-smooth animate-pulse-glow"
      >
        <MessageCircle className="w-8 h-8 text-accent-foreground" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
