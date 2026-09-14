'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sun, 
  ShieldCheck, 
  Award, 
  Mail, 
  ArrowRight, 
  Calendar,
  Leaf
} from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { useQuoteModal } from './QuoteModalContext';

export const Footer: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#03261E] border-t border-emerald-950 text-emerald-100/90 pt-10 pb-10 relative overflow-hidden font-sans">
      {/* Corner Ambient Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP SECTION: Clean Energy Heading + SVG Illustration + Newsletter Input Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-6">

          {/* Left Sub-Header & Subscribe CTA */}
          <div className="lg:col-span-4 space-y-3.5 text-left">
            <div className="flex items-center gap-2 text-[#10B981] text-[11px] font-bold tracking-widest uppercase">
              <Leaf className="w-3.5 h-3.5 text-[#10B981]" />
              <span>CLEAN ENERGY • BRIGHTER TOMORROW</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Powering a <span className="text-[#10B981]">Sustainable Future</span>
            </h3>

            <p className="text-xs text-emerald-100/70 leading-relaxed max-w-sm">
              Join us in building a cleaner, greener planet with innovative solar solutions for a better tomorrow.
            </p>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Subscribe to Our Newsletter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center Illustration (Solar Panels + Green City + Grid Lines) */}
          <div className="lg:col-span-5 flex justify-center items-center py-4 lg:py-0">
            <div className="w-full max-w-lg relative filter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Image
                src="/footer_illustration.svg"
                alt="Solar & Power Grid Illustration"
                width={1200}
                height={150}
                unoptimized
                className="w-full h-auto object-contain opacity-95 filter hue-rotate-[90deg] brightness-125 saturate-150"
              />
            </div>
          </div>

          {/* Right Newsletter Form Block */}
          <div className="lg:col-span-3 space-y-3 text-left lg:text-right">
            <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
              Get the latest updates on solar innovations, offers and industry insights.
            </p>

            <form onSubmit={handleSubscribe} className="relative inline-flex items-center w-full max-w-sm">
              <div className="relative w-full flex items-center bg-[#053A2D] border border-emerald-700/60 focus-within:border-[#10B981] rounded-full px-3.5 py-1.5 shadow-inner transition-colors">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-xs text-white placeholder-emerald-300/50 outline-none pr-10"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 w-7 h-7 rounded-full bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-md"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#10B981] font-bold pt-1">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>

        </div>

        {/* NEON GLOWING HORIZONTAL LINE */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_12px_#10B981] my-8 opacity-90" />

        {/* MAIN LINKS GRID (Brand Info + Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10">

          {/* Column 1: Brand Info Block */}
          <div className="lg:col-span-4 space-y-4 text-left border-b lg:border-b-0 lg:border-r border-emerald-800/40 lg:pr-8 pb-8 lg:pb-0">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#10B981] flex items-center justify-center text-slate-950 shadow-md">
                <Sun className="w-5 h-5 fill-slate-950 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                  Solar<span className="text-[#10B981]">Next</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-200/80 font-semibold leading-none">
                  Energy Engineering
                </span>
              </div>
            </Link>

            <p className="text-xs text-emerald-100/75 leading-relaxed max-w-sm font-normal">
              Full-lifecycle solar power plant engineering, commercial rooftops, and high-reliability energy storage solutions. Powering a cleaner future with Tier-1 components and guaranteed PR ratios.
            </p>

            {/* Badges Row */}
            <div className="flex items-center gap-3 text-[11px] text-white pt-1">
              <div className="flex items-center gap-1.5 bg-[#053A2D] px-3 py-1.5 rounded-full border border-emerald-700/60 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="font-semibold text-emerald-100">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#053A2D] px-3 py-1.5 rounded-full border border-emerald-700/60 shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="font-semibold text-emerald-100">Tier-1 Partner</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/60 bg-[#053A2D]/60 flex items-center justify-center text-emerald-200 hover:bg-[#10B981] hover:text-slate-950 hover:border-[#10B981] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.25.19 2.25.19v2.47h-1.27c-1.23 0-1.61.77-1.61 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/60 bg-[#053A2D]/60 flex items-center justify-center text-emerald-200 hover:bg-[#10B981] hover:text-slate-950 hover:border-[#10B981] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.69-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/60 bg-[#053A2D]/60 flex items-center justify-center text-emerald-200 hover:bg-[#10B981] hover:text-slate-950 hover:border-[#10B981] transition-all"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/60 bg-[#053A2D]/60 flex items-center justify-center text-emerald-200 hover:bg-[#10B981] hover:text-slate-950 hover:border-[#10B981] transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/60 bg-[#053A2D]/60 flex items-center justify-center text-emerald-200 hover:bg-[#10B981] hover:text-slate-950 hover:border-[#10B981] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 to 5: Navigation Links Grid */}
          <div className="lg:col-span-8">
            <FooterLinks />
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & ACTION BAR */}
        <div className="pt-6 border-t border-emerald-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} <span className="text-[#10B981] font-bold">SolarNext</span> Energy Engineering Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <span className="flex items-center gap-1 text-emerald-300 font-medium">
              <span>Built for a Brighter Tomorrow</span>
              <Leaf className="w-3.5 h-3.5 text-[#10B981]" />
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-[#10B981] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-emerald-800">|</span>
            <Link href="/about" className="hover:text-[#10B981] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-emerald-800">|</span>
            <Link href="/sitemap.xml" className="hover:text-[#10B981] transition-colors">
              Sitemap
            </Link>

            {/* Book Now Button on bottom right */}
            <button
              onClick={() => openQuoteModal()}
              className="ml-2 inline-flex items-center gap-2 bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
