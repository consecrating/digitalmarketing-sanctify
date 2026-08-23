"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const mainLinks = [
    { href: "/about/", label: "About" },
    { href: "/pricing/", label: "Pricing" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/seo-services/", label: "SEO Services" },
    { href: "/social-media-marketing/", label: "Social Media Marketing" },
    { href: "/web-design/", label: "Web Design" },
    { href: "/google-ads/", label: "Google Ads & PPC" },
    { href: "/content-marketing/", label: "Content Marketing" },
    { href: "/ai-marketing/", label: "AI Marketing" },
    { href: "/email-marketing/", label: "Email Marketing" },
    { href: "/graphic-design/", label: "Graphic Design" },
    { href: "/video-marketing/", label: "Video Marketing" },
    { href: "/reputation-management/", label: "Reputation Management" },
    { href: "/geo-optimization/", label: "GEO Optimization" },
    { href: "/chatgpt-visibility/", label: "ChatGPT Visibility" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Sanctify Home">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-black text-sm">S</span>
          </div>
          <span className={`font-bold text-lg transition-colors ${scrolled ? "text-dark" : "text-white"}`}>Sanctify</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${scrolled ? "text-gray hover:text-primary" : "text-white/80 hover:text-white"}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <ChevronDown size={14} />
            </button>
            <div
              className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-premium border border-gray-100 py-2 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {serviceLinks.map(l => (
                <a key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray hover:text-primary hover:bg-primary-50 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Main links */}
          {mainLinks.map(l => (
            <a key={l.href} href={l.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray hover:text-primary" : "text-white/80 hover:text-white"}`}>{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919923352923" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-primary">
            <Phone size={15} /><span>Free Consultation</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${scrolled ? "text-dark" : "text-white"}`} aria-label="Menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-premium px-5 py-6 max-h-[80vh] overflow-y-auto">
          <p className="text-xs font-semibold text-gray uppercase tracking-wider mb-2 px-4">Services</p>
          <div className="space-y-1 mb-4">
            {serviceLinks.slice(0, 6).map(l => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block py-2.5 px-4 text-dark text-sm font-medium rounded-lg hover:bg-primary-50">{l.label}</a>
            ))}
            <a href="/seo-services/" className="block py-2 px-4 text-primary text-xs font-semibold">View all services →</a>
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-1">
            {mainLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block py-3 px-4 text-dark font-medium rounded-lg hover:bg-primary-50">{l.label}</a>
            ))}
          </div>
          <a href="tel:+919923352923" className="block text-center bg-primary text-white py-3 rounded-lg font-bold mt-4">Call +91 9923352923</a>
        </div>
      )}
    </nav>
  );
}
