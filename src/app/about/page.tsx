import type { Metadata } from "next";
import { Award, Users, Calendar, MapPin, Globe, CheckCircle } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Sanctify — Award-Winning Digital Marketing Agency in Goa Since 2012",
  description: "Learn about Sanctify — Goa's trusted advertising & digital marketing agency since 2012. Founded by Punit Sahay. 200+ projects, 128+ reviews, 4.8/5 rating. Offices in Goa, Italy & Varanasi.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/about/" },
};

const team = [
  { name: "Priya Sharma", role: "Head of SEO", img: "" },
  { name: "Ananya Desai", role: "Social Media Director", img: "" },
  { name: "Sneha Kulkarni", role: "Content Strategist", img: "" },
  { name: "Kavya Naik", role: "Google Ads Specialist", img: "" },
  { name: "Isha Patil", role: "UI/UX Designer", img: "" },
  { name: "Neha Bhatt", role: "Graphic Designer", img: "" },
  { name: "Riya Fernandes", role: "Social Media Manager", img: "" },
  { name: "Tanvi Gawas", role: "Web Developer", img: "" },
  { name: "Divya Kamat", role: "Email Marketing Lead", img: "" },
  { name: "Meera Shetty", role: "AI & Analytics Lead", img: "" },
  { name: "Aisha Verma", role: "Client Success Manager", img: "" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-white/50 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
                <li className="text-white/80">About Us</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Sanctify</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">
              An award-winning advertising & digital marketing agency in Goa, helping ambitious brands turn visibility into measurable growth since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>Our Story — A Partner Built for Brands That Intend to Lead</h2>
          <p><strong>Sanctify</strong> — meaning sacred — was founded in 2012 by <strong>Punit Sahay</strong> on a simple conviction: exceptional work is born from genuine passion. Today we are recognised among Goa&apos;s leading advertising and digital marketing agencies, trusted by businesses that expect more than activity — they expect outcomes.</p>
          <p>We unite brand storytelling, design, technology and performance marketing into one cohesive growth strategy. From high-converting websites and search engine optimisation to social media, performance advertising and visual branding, every discipline works toward a single objective — converting your online visibility into real business results.</p>
          <p>We operate with complete transparency and a dedicated in-house team that treats your growth as our own: no hidden facts, no fragmented hand-offs — just accountable, results-driven marketing.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3"><Calendar size={24} className="text-primary" /></div>
              <p className="text-dark font-black text-3xl">12+</p>
              <p className="text-gray text-sm">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-secondary-50 flex items-center justify-center mx-auto mb-3"><Award size={24} className="text-secondary-dark" /></div>
              <p className="text-dark font-black text-3xl">200+</p>
              <p className="text-gray text-sm">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3"><Users size={24} className="text-accent-dark" /></div>
              <p className="text-dark font-black text-3xl">15+</p>
              <p className="text-gray text-sm">Services In-House</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3"><Globe size={24} className="text-primary" /></div>
              <p className="text-dark font-black text-3xl">10+</p>
              <p className="text-gray text-sm">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-dark text-center mb-12">Leadership</h2>
          <div className="bg-gray-light rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white font-black text-3xl">PS</span>
              </div>
              <div>
                <h3 className="text-dark font-bold text-xl">Punit Sahay</h3>
                <p className="text-primary font-semibold text-sm">Founder & Proprietor · Leading Sanctify since 2012</p>
                <p className="mt-4 text-gray text-base leading-relaxed">
                  Punit Sahay founded Sanctify in 2012 with a clear conviction — that businesses in Goa deserved advertising and digital marketing built to a genuinely national standard. What began as a boutique studio in South Goa has grown, under his hands-on leadership, into one of the region&apos;s most trusted full-service agencies.
                </p>
                <p className="mt-3 text-gray text-base leading-relaxed">
                  As Proprietor, Punit stays personally invested in the work, pairing a strategist&apos;s discipline with a creator&apos;s eye for detail. His philosophy is simple: do great work, stay transparent, and treat every client&apos;s growth as your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-dark text-center mb-4">Meet Our Team</h2>
          <p className="text-gray text-center text-lg mb-12 max-w-2xl mx-auto">A dedicated in-house team of specialists who treat your growth as their own</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm hover-lift transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <p className="text-dark font-semibold text-xs">{member.name}</p>
                <p className="text-gray text-[10px] mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-dark text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-light rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-primary" />
                <h3 className="text-dark font-bold">Head Office — Goa, India</h3>
              </div>
              <p className="text-gray text-sm leading-relaxed">
                #176/1-A, MES College Road,<br />
                Bharat Nagar Colony, Zuarinagar,<br />
                Vasco-da-Gama, Goa – 403726<br />
                <a href="tel:+919923352923" className="text-primary font-semibold">+91 99233 52923</a><br />
                <a href="mailto:help@sanctify.in" className="text-primary">help@sanctify.in</a>
              </p>
            </div>
            <div className="bg-gray-light rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={18} className="text-secondary-dark" />
                <h3 className="text-dark font-bold">Point of Contact — Italy</h3>
              </div>
              <p className="text-gray text-sm leading-relaxed">
                Pran&apos;s Food snc,<br />
                Via Circonvallazione, 868<br />
                24056 Fontanella, Italy<br />
                Contact: Mr. Pravin Sahai<br />
                <span className="text-primary">+39 320 8058390</span>
              </p>
            </div>
            <div className="bg-gray-light rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-accent-dark" />
                <h3 className="text-dark font-bold">Point of Contact — Varanasi</h3>
              </div>
              <p className="text-gray text-sm leading-relaxed">
                D-50/35 BN, Dalmandi Rd,<br />
                Kazipura Kalan, Purani Adaalat,<br />
                Varanasi, UP – 221001<br />
                <a href="tel:+919923352923" className="text-primary font-semibold">+91 99233 52923</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
