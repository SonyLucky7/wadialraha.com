"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Warning,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-screen bg-[#071322] text-white flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      {/* ─── FULL-BLEED 4K/8K LOSSLESS BACKGROUND (3840 x 2143 Native UHD) ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero/ac-mechanic-hero-fullbleed-4k.jpg"
          alt="WADI AL RAHA Professional Certified AC Mechanic in UAE"
          fill
          priority
          unoptimized // Serves native 3840px 4K pixels with zero downsampling
          sizes="100vw"
          // Crucial: Anchored to TOP and RIGHT so head and face are NEVER cut off
          className="object-cover object-[78%_top] lg:object-[88%_top] filter contrast-[1.03] select-none pointer-events-none"
        />

        {/* Left-side dark gradient strictly covering the left 48-52% so it NEVER overlaps the technician */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/85 to-transparent w-full lg:w-[50%] pointer-events-none" />
        
        {/* Subtle top & bottom ambient edge fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/40 pointer-events-none" />
        
        {/* Mobile-only background tint so text remains legible on narrow portrait screens */}
        <div className="absolute inset-0 bg-[#071322]/65 lg:hidden pointer-events-none" />
      </div>

      {/* ─── FOREGROUND CONTENT & BUTTONS OVERLAID ON THE LEFT ─── */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 sm:mb-5"
          >
            COOLER SPACES. <br />
            <span className="text-[#F1171E] drop-shadow-sm">HAPPIER</span> LIVES.
          </motion.h1>

          {/* 3. Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg mb-7 sm:mb-9 font-medium"
          >
            Professional air conditioning, cooling, electrical and plumbing
            services across the UAE — with fast response and certified engineering support.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            {/* Primary CTA: Request a Quote */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-7 sm:px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-xl shadow-[#F1171E]/30 hover:shadow-2xl hover:shadow-[#F1171E]/50 hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight weight="bold" size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* 24/7 Emergency Service Hotline */}
            <Link
              href={`tel:${COMPANY.contacts[0].phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-6 sm:px-7 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all text-sm sm:text-base whitespace-nowrap backdrop-blur-md active:scale-[0.98]"
            >
              <Warning weight="bold" size={18} className="text-[#F1171E]" />
              <span>24/7 Emergency Service</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom edge separator between Hero and TrustBar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
export default HeroSection;
