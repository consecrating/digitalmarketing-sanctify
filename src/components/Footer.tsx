"use client";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-dark pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-black text-xs">S</span>
              </div>
              <span className="text-white font-bold">Sanctify</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Goa&apos;s trusted digital marketing agency. SEO, Social Media, Google Ads, Web Design &amp; AI Marketing — helping businesses grow since 2012.
            </p>
            <p className="text-white/30 text-xs">GSTIN: Registered | Est. 2012</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Search Engine Optimization", "Social Media Marketing", "Google Ads & PPC", "Web Design & Development", "Content Marketing", "AI-Powered Marketing", "Local SEO for Goa", "Email Marketing"].map(s => (
                <li key={s}><a href={
                  s === "Search Engine Optimization" ? "/seo-services/" :
                  s === "Social Media Marketing" ? "/social-media-marketing/" :
                  s === "Google Ads & PPC" ? "/google-ads/" :
                  s === "Web Design & Development" ? "/web-design/" :
                  s === "Content Marketing" ? "/content-marketing/" :
                  s === "AI-Powered Marketing" ? "/ai-marketing/" :
                  s === "Local SEO for Goa" ? "/seo-services-in-panaji/" :
                  "/email-marketing/"
                } className="text-white/50 hover:text-primary-light text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Service Areas in Goa</h4>
            <ul className="space-y-2.5">
              {["Panaji (Panjim)", "Margao (Madgaon)", "Mapusa", "Vasco da Gama", "Calangute & Baga", "Porvorim", "Old Goa", "Zuarinagar", "Candolim", "Ponda"].map(a => (
                <li key={a}><span className="text-white/50 text-sm">{a}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-primary-light shrink-0" />
                <a href="tel:+919923352923" className="text-white/50 hover:text-white text-sm transition-colors">+91 9923352923</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-primary-light shrink-0" />
                <a href="mailto:info@sanctify.in" className="text-white/50 hover:text-white text-sm transition-colors">info@sanctify.in</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-primary-light shrink-0 mt-0.5" />
                <address className="text-white/50 text-sm not-italic leading-relaxed">
                  #176/1-A, MES College Road,<br />Zuarinagar, Goa 403726, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Sanctify — Digital Marketing Agency in Goa. All rights reserved.
          </p>
          <a href="/" className="flex items-center gap-1.5 text-white/30 hover:text-primary-light text-xs transition-colors">Back to top <ArrowUp size={12} /></a>
        </div>
      </div>
    </footer>
  );
}
