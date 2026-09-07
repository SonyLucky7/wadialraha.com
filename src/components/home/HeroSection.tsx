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
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-screen bg-[#071322] text-white flex items-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* ─── FULL-BLEED 4K IMAGE BACKGROUND ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/ac-mechanic-hero-fullbleed.jpg"
          alt="WADI AL RAHA Professional AC Mechanic in UAE"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[80%_center] filter contrast-[1.04]"
        />

        {/* Cinematic Deep Navy Gradients for Text Readability */}
        {/* Left-to-right gradient ensuring text on left is 100% crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/85 to-transparent w-full lg:w-[65%]" />
        
        {/* Subtle top and bottom fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/60" />
        
        {/* Mobile full-cover dark tint so text remains readable over the image on small screens */}
        <div className="absolute inset-0 bg-[#071322]/60 lg:hidden" />
      </div>

      {/* ─── OVERLAY CONTENT & BUTTONS (OVER THE IMAGE) ─── */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* 1. Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-5 sm:mb-6"
          >
            COOLER SPACES. <br />
            <span className="text-[#F1171E] drop-shadow-sm">HAPPIER</span> LIVES.
          </motion.h1>

          {/* 3. Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl mb-8 sm:mb-10 font-medium"
          >
            Professional air conditioning, cooling, electrical and plumbing
            services across the UAE — with fast response and certified engineering support.
          </motion.p>

          {/* 4. Action Buttons (Overlaid on Image) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12"
          >
            {/* Primary CTA: Request a Quote */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-xl shadow-[#F1171E]/30 hover:shadow-2xl hover:shadow-[#F1171E]/50 hover:-translate-y-0.5 text-base sm:text-lg whitespace-nowrap active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight weight="bold" size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* 24/7 Emergency Service Hotline */}
            <Link
              href={`tel:${COMPANY.contacts[0].phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all text-base sm:text-lg whitespace-nowrap backdrop-blur-md active:scale-[0.98]"
            >
              <Warning weight="bold" size={20} className="text-[#F1171E]" />
              <span>24/7 Emergency Service</span>
            </Link>
          </motion.div>

          {/* 5. Trust Indicators (Overlaid on Image) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/15 max-w-xl lg:max-w-2xl"
          >
            {/* Fast Response */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#F1171E]/20 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                <Lightning weight="bold" size={18} />
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                  FAST RESPONSE
                </h4>
                <p className="text-[11px] text-gray-300 mt-0.5 leading-snug">
                  Under 60 Mins Arrival
                </p>
              </div>
            </div>

            {/* Competitive Pricing */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#F1171E]/20 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                <Gear weight="bold" size={18} />
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                  COMPETITIVE PRICING
                </h4>
                <p className="text-[11px] text-gray-300 mt-0.5 leading-snug">
                  Fair, Transparent Rates
                </p>
              </div>
            </div>

            {/* 24/7 Emergency */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#F1171E]/20 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                <Clock weight="bold" size={18} />
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                  24/7 EMERGENCY
                </h4>
                <p className="text-[11px] text-gray-300 mt-0.5 leading-snug">
                  Rapid Mobile Dispatch
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── FLOATING BADGE OVER THE MECHANIC ON THE RIGHT ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="hidden lg:flex absolute bottom-12 right-12 z-10 items-center gap-3 p-4 rounded-2xl bg-[#0B1E34]/85 backdrop-blur-md border border-white/20 shadow-2xl max-w-sm"
      >
        <div className="w-11 h-11 rounded-xl bg-[#F1171E] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#F1171E]/40">
          <ShieldCheck weight="fill" size={24} />
        </div>
        <div>
          <span className="block text-sm font-extrabold text-white leading-tight">
            Certified UAE HVAC Engineers
          </span>
          <span className="block text-xs text-gray-300 leading-tight mt-1">
            Split, Central, Package AC & Chillers
          </span>
        </div>
      </motion.div>
    </section>
  );
}
export default HeroSection;
