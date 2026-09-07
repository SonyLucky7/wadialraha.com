"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightning,
  Gear,
  Clock,
  Warning,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#071322] text-white pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-20 overflow-hidden flex flex-col justify-center">
      {/* ─── AMBIENT BACKGROUND GLOWS ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E34] via-[#071322] to-[#050C16]" />
        
        {/* Soft atmospheric depth lights */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#133256]/40 blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/[0.05] blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#F1171E]/[0.05] blur-[140px]" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ─── MAIN HERO CONTAINER ─── */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDE: BRAND HEADLINE & HIGH-CONVERSION ACTIONS
              ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 z-20 flex flex-col justify-center">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-8 h-[2px] bg-[#F1171E]" />
              <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
                PROFESSIONAL HVAC SOLUTIONS
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]" />
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 sm:mb-5"
            >
              COOLER SPACES. <br />
              <span className="text-[#F1171E] drop-shadow-sm">HAPPIER</span> LIVES.
            </motion.h1>

            {/* 3. Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-7 sm:mb-9"
            >
              Professional air conditioning, cooling, electrical and plumbing
              services across the UAE — with fast response and certified engineering support.
            </motion.p>

            {/* 4. Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 sm:mb-11"
            >
              {/* Primary CTA: Request a Quote */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg shadow-[#F1171E]/30 hover:shadow-xl hover:shadow-[#F1171E]/50 hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight weight="bold" size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>

              {/* 24/7 Emergency Hotline */}
              <Link
                href={`tel:${COMPANY.contacts[0].phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-xl border-2 border-white/25 text-white font-semibold hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base whitespace-nowrap backdrop-blur-sm active:scale-[0.98]"
              >
                <Warning weight="bold" size={18} className="text-[#F1171E]" />
                <span>24/7 Emergency Service</span>
              </Link>
            </motion.div>

            {/* 5. Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/10"
            >
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                  <Lightning weight="bold" size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                    FAST RESPONSE
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Under 60 Mins Arrival
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                  <Gear weight="bold" size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                    COMPETITIVE PRICING
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Fair, Transparent Rates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                  <Clock weight="bold" size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                    24/7 EMERGENCY
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Rapid Mobile Dispatch
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT SIDE: 4K PHOTOREALISTIC AC MECHANIC PORTRAIT
              ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Background ambient halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#133256]/50 via-cyan-500/10 to-[#F1171E]/15 blur-2xl opacity-60 pointer-events-none" />

              {/* 4K Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3.2] rounded-3xl overflow-hidden border border-white/15 bg-[#050E1A] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] group">
                <Image
                  src="/images/hero/ac-mechanic-hero.jpg"
                  alt="WADI AL RAHA Professional Certified AC Mechanic in UAE"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle depth vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Trust Badge on Image */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs p-3.5 rounded-2xl bg-[#0B1E34]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F1171E]/20 flex items-center justify-center text-[#F1171E] shrink-0">
                    <ShieldCheck weight="fill" size={22} />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-white leading-tight">
                      Certified HVAC Specialists
                    </span>
                    <span className="block text-[11px] text-gray-300 leading-tight mt-0.5">
                      Trained for UAE Climates & Chillers
                    </span>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-[#071322]/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>On Duty 24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
