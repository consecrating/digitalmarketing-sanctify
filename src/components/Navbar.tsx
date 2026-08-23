"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Sanctify Home">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-black text-sm">S</span>
          </div>
          <span className={`font-bold text-lg transition-colors ${scrolled ? "text-dark" : "text-white"}`}>Sanctify</span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray hover:text-primary" : "text-white/80 hover:text-white"}`}>{l.label}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919923352923" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-primary">
            <Phone size={15} /><span>Free Consultation</span>
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${scrolled ? "text-dark" : "text-white"}`} aria-label="Menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-premium px-5 py-6 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block py-3 px-4 text-dark font-medium rounded-lg hover:bg-primary-50">{l.label}</a>
          ))}
          <a href="tel:+919923352923" className="block text-center bg-primary text-white py-3 rounded-lg font-bold mt-4">Call +91 9923352923</a>
        </div>
      )}
    </nav>
  );
}
