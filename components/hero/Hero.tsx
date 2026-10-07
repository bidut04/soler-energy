'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Leaf, LayoutGrid, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-16 sm:pt-15 lg:pt-22 overflow-hidden flex flex-col justify-between">

      {/* Full Bleed Golden-Hour Solar Field Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-solar-farm.jpg"
          alt="Solar Power Plant Engineering Field"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center -mt-2 sm:-mt-4 lg:-mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Hero Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-3 sm:space-y-4 text-left"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Smart Solar Energy.
              <span className="block text-emerald-600 font-extrabold mt-0.5">
                Built for a Better
              </span>
              <span className="block text-emerald-600 font-extrabold">
                Tomorrow.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-xl leading-relaxed font-normal"
            >
              We design, install and maintain reliable solar energy solutions for homes, businesses and large-scale utility projects with guaranteed 25-year performance ratios.
            </motion.p>

            {/* Pill CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <div className="flex items-center gap-1.5 group">
                <img
                  src="/right-arrow.gif"
                  alt="Arrow pointing to Book Now"
                  className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain shrink-0 filter brightness-0 opacity-75 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-transform group-hover:translate-x-2 group-hover:scale-110"
                />
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-300 cursor-pointer active:scale-95 hover:scale-[1.02]"
                >
                  <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span className="tracking-wide">Book Now</span>
                </Link>
              </div>

              <Button
                variant="secondary"
                size="lg"
                href="#solutions"
                className="rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/90 font-semibold px-7 py-3 gap-2 shadow-xs hover:scale-[1.02] transition-transform"
                icon={<ArrowRight className="w-4 h-4 text-slate-500" />}
              >
                Explore Solutions
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Floating Active Plant Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-end"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white shadow-2xl text-left space-y-3.5"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    Active Plant Telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-0.5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    <Zap className="w-3 h-3 text-slate-400" />
                    <span>Current Output</span>
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900">
                    50.4 MW
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>Efficiency</span>
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-emerald-600">
                    98.9%
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    <Leaf className="w-3 h-3 text-emerald-600" />
                    <span>CO₂ Saved</span>
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900">
                    74k T
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Integrated Bottom Trust Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full pt-1 pb-18 sm:pb-22 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white text-left divide-y md:divide-y-0 md:divide-x divide-white/10">

            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">25+ Years</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
              <div className="w-8.5 h-8.5 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                <LayoutGrid className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">50+</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Projects Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
              <div className="w-8.5 h-8.5 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">25 MW+</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Installed Capacity</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
              <div className="w-8.5 h-8.5 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">98%</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium">Customer Satisfaction</div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Enhanced Curved Wave Bottom SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-16 sm:h-20 lg:h-28 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C200,120 400,-20 600,70 C800,160 1000,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
};
