import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
  Maximize2
} from 'lucide-react';
import { useQuoteModal } from './QuoteModalContext';

export const FooterLinks: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 text-left">

      {/* COMPANY Links */}
      <div className="md:col-span-2 space-y-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
          COMPANY
        </h4>
        <ul className="space-y-2.5 text-xs text-emerald-100/70 font-medium">
          <li>
            <Link href="/about" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>About Us</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/about#team" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Our Team</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/about#certifications" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Certifications</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Partners</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/about#careers" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Careers</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/quote" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Request Quote</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* SOLUTIONS Links */}
      <div className="md:col-span-2 space-y-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
          SOLUTIONS
        </h4>
        <ul className="space-y-2.5 text-xs text-emerald-100/70 font-medium">
          <li>
            <Link href="/solutions#residential" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Residential Solar</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/solutions#commercial" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Commercial Solar</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/solutions#industrial" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Industrial Solar</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/solutions#utility" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Solar Power Plants</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/products#battery" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Battery Storage</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/solutions" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>EPC Services</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* RESOURCES Links */}
      <div className="md:col-span-2 space-y-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
          RESOURCES
        </h4>
        <ul className="space-y-2.5 text-xs text-emerald-100/70 font-medium">
          <li>
            <Link href="/calculator" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Solar Calculator</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Solar Guide</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/solutions#lifecycle" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Plant Lifecycle</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/about#faqs" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>FAQs</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Blog</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#10B981] transition-colors flex items-center justify-between group">
              <span>Downloads</span>
              <span className="text-[#10B981] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* GET IN TOUCH Contact Info & CTA Box */}
      <div className="md:col-span-3 space-y-4 border-l border-emerald-800/40 pl-0 md:pl-5">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
          Get In Touch
        </h4>

        <div className="space-y-3 text-xs">
          {/* Headquarters */}
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#053A2D] border border-emerald-700/60 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-bold text-white">Headquarters</div>
              <div className="text-emerald-100/70 text-[11px] leading-tight">
                100 Energy Way, Tech Park District Kolkata, WB 700091, India
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#053A2D] border border-emerald-700/60 flex items-center justify-center text-[#10B981] shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-bold text-white">Phone</div>
              <div className="text-emerald-100/70 text-[11px]">
                +91 1800 555 SOLAR <span className="text-emerald-300/60">(Toll Free)</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#053A2D] border border-emerald-700/60 flex items-center justify-center text-[#10B981] shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-bold text-white">Email</div>
              <div className="text-emerald-100/70 text-[11px]">
                contact@solarnextenergy.com
              </div>
            </div>
          </div>
        </div>

        {/* Project CTA Inner Card */}
        <div className="p-3.5 rounded-xl border border-emerald-700/50 bg-[#042C23] space-y-2.5 shadow-md">
          <div className="flex items-start gap-2">
            <Send className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-bold text-white">Have a solar project in mind?</div>
              <div className="text-[10px] text-emerald-200/70">Talk to our engineering team.</div>
            </div>
          </div>

          <button
            onClick={() => openQuoteModal()}
            className="w-full py-1.5 px-3 rounded-full bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* MAP BOX Column */}
      <div className="md:col-span-3">
        <div className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden border border-emerald-700/60 shadow-lg bg-[#042C23] group">

          {/* Top Right Expand Icon */}
          <div className="absolute top-2.5 right-2.5 z-20 w-6 h-6 rounded-md bg-[#042C23]/90 border border-emerald-700/80 flex items-center justify-center text-emerald-300">
            <Maximize2 className="w-3 h-3" />
          </div>

          {/* Interactive Map Iframe styled to match screenshot */}
          <iframe
            src="https://maps.google.com/maps?q=Tech%20Park%2C%20Salt%20Lake%20Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.85)' }}
            allowFullScreen={false}
            loading="lazy"
            title="SolarNext Headquarters Location Map"
            className="w-full h-full object-cover min-h-[220px]"
          />

          {/* Center Office Pin Badge Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
            <div className="px-2.5 py-1 rounded-md bg-white text-slate-950 font-extrabold text-[10px] shadow-md border border-slate-200 whitespace-nowrap">
              Our Office
            </div>
            <div className="w-4 h-4 rounded-full bg-[#10B981] border-2 border-white shadow-lg -mt-1 animate-pulse" />
          </div>

          {/* View on Google Maps Button inside Map */}
          <div className="absolute bottom-3 left-3 right-3 z-20">
            <a
              href="https://maps.google.com/?q=Tech+Park+Kolkata"
              target="_blank"
              rel="noreferrer"
              className="w-full py-1.5 px-3 rounded-full bg-[#04241C]/90 hover:bg-[#04241C] text-emerald-100 border border-emerald-600/60 backdrop-blur-md text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <MapPin className="w-3 h-3 text-[#10B981]" />
              <span>View on Google Maps</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};
