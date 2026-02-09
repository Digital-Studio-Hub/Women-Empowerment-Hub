import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_URL = "https://wa.me/27677744074?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Women%20of%20Worth%20Projects.";

export default function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    return () => clearTimeout(timer);
  }, [visible, dismissed]);

  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3" data-testid="whatsapp-fab-container">
      {showTooltip && !dismissed && (
        <div
          className="relative bg-card border border-border rounded-md shadow-lg px-4 py-3 max-w-[220px] animate-in fade-in slide-in-from-right-4 duration-300"
          data-testid="whatsapp-tooltip"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDismissed(true);
              setShowTooltip(false);
            }}
            className="absolute -top-2 -right-2 bg-muted rounded-full p-0.5"
            aria-label="Dismiss tooltip"
            data-testid="button-dismiss-tooltip"
          >
            <X className="h-3 w-3 text-muted-foreground" />
          </button>
          <p className="text-sm text-foreground font-medium leading-snug">
            Chat with us on WhatsApp
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            We typically reply within minutes
          </p>
          <div className="absolute right-0 bottom-3 translate-x-1/2 w-2.5 h-2.5 bg-card border-r border-b border-border rotate-[-45deg]" />
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-testid="button-whatsapp-fab"
        className="group flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{ backgroundColor: "#25D366" }}
      >
        <SiWhatsapp className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
