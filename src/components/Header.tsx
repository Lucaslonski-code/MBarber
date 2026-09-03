import React, { useState, useEffect } from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { BrandLogo } from "./BrandLogo";
import { ExternalLink, Menu, X, Instagram, MessageCircle } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Precisão", href: "#precisao" },
    { label: "Espaço", href: "#espaco" },
    { label: "Barbeiros", href: "#barbeiros" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#070709]/95 backdrop-blur-md border-b border-zinc-800/90 py-2.5 sm:py-3 shadow-lg"
          : "bg-gradient-to-b from-[#070709] via-[#070709]/80 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Identity / Official Logo Area */}
          <a
            href="#"
            id="header-brand-link"
            className="flex items-center gap-3 rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            aria-label="M Barber - Início"
          >
            <BrandLogo size="sm" />
          </a>

          {/* Desktop Navigation (1024px+) */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium transition-colors py-2 px-1 relative focus-visible:ring-2 focus-visible:ring-white rounded-sm after:content-[''] after:absolute after:bottom-1 after:left-1 after:right-1 after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area - Desktop (1024px+) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={M_BARBER_CONFIG.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-md transition-colors border border-transparent hover:border-zinc-750 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Instagram Oficial M Barber"
              title="Instagram Oficial"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={M_BARBER_CONFIG.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-md transition-colors border border-transparent hover:border-zinc-750 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Falar no WhatsApp"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Lyndus Direct Booking CTA */}
            <a
              id="header-lyndus-cta"
              href={M_BARBER_CONFIG.links.lyndus}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-150 active:scale-95 shadow-sm focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
            >
              <span>Agendar no Lyndus</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Tablet & Mobile Right Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href={M_BARBER_CONFIG.links.lyndus}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] bg-white text-zinc-950 px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 active:scale-95 shadow-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="hidden xs:inline sm:inline">Agendar no Lyndus</span>
              <span className="inline xs:hidden sm:hidden">Lyndus</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[42px] min-w-[42px] p-2.5 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-black/80 backdrop-blur-md z-50 flex flex-col justify-between p-5 overflow-y-auto"
        >
          <div className="bg-[#0c0c0f] border border-zinc-800 rounded-lg p-5 shadow-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-3">
              Navegação
            </span>
            <nav className="flex flex-col divide-y divide-zinc-850">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] text-zinc-200 hover:text-white text-base font-semibold py-3 flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-500 text-sm font-mono">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-4 bg-[#0c0c0f] border border-zinc-800 rounded-lg p-5 shadow-2xl space-y-3">
            <a
              href={M_BARBER_CONFIG.links.lyndus}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] w-full bg-white text-zinc-950 active:bg-zinc-200 py-3 px-4 rounded-md text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Agendar pelo Lyndus</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={M_BARBER_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] bg-zinc-900 active:bg-zinc-800 text-zinc-200 py-2.5 px-3 rounded-md text-xs font-semibold text-center flex items-center justify-center gap-1.5 border border-zinc-800"
              >
                <MessageCircle className="w-3.5 h-3.5 text-zinc-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={M_BARBER_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] bg-zinc-900 active:bg-zinc-800 text-zinc-200 py-2.5 px-3 rounded-md text-xs font-semibold text-center flex items-center justify-center gap-1.5 border border-zinc-800"
              >
                <Instagram className="w-3.5 h-3.5 text-zinc-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
