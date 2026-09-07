"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Warning, ShieldCheck, Wrench, Snowflake } from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-navy overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        <div className="absolute inset-0 bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center opacity-30" />
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201, 162, 39, 0.5) 40px,
              rgba(201, 162, 39, 0.5) 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  Est. 1988 • UAE Engineering Heritage
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Professional HVAC &{" "}
                <span className="text-[#F1171E]">Technical Services</span>{" "}
                Across the UAE
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 body-text max-w-[540px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Reliable air conditioning, cooling, electrical, plumbing and
              specialized technical solutions — backed by fast response and
              professional service.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-[#F1171E] text-white font-bold rounded-lg hover:bg-[#D61218] transition-colors shadow-lg hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight weight="bold" size={18} />
              </Link>
              <Link
                href={`tel:${COMPANY.contacts[0].phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 border-2 border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Warning weight="bold" size={18} className="text-[#F1171E]" />
                24/7 Emergency Service
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link
                href={`tel:${COMPANY.contacts[0].phoneRaw}`}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#F1171E] transition-colors text-sm"
              >
                <Phone weight="fill" size={16} className="text-[#F1171E]" />
                Call Now: {COMPANY.contacts[0].phone}
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Area */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#133256]/90 to-[#0B1E34]/95 p-8 shadow-2xl backdrop-blur-sm">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#F1171E] to-transparent" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#F1171E] to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F1171E] to-transparent" />
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[#F1171E] to-transparent" />
              </div>

              {/* Central Logo Emblem Presentation */}
              <div className="flex flex-col items-center justify-center text-center pt-4 pb-6">
                <div className="relative w-64 h-36 mb-4 filter drop-shadow-lg transition-transform hover:scale-105 duration-300">
                  <Image
                    src="/images/logo-white.png"
                    alt="WADI AL RAHA Logo"
                    fill
                    sizes="256px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1171E]/15 border border-[#F1171E]/30 text-[#FF6B6B] text-xs font-semibold tracking-wider uppercase mb-2">
                  <ShieldCheck weight="fill" size={14} className="text-[#F1171E]" />
                  Employee-Owned UAE Technical Enterprise
                </div>
                <p className="text-gray-300 text-sm max-w-sm mt-1">
                  Engineered cooling, precision electrical & commercial MEP solutions built for UAE climates.
                </p>
              </div>

              {/* Highlights bar */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-center">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <Snowflake weight="duotone" size={20} className="text-[#F1171E] mx-auto mb-1" />
                  <span className="block text-white font-bold text-sm">HVAC / AC</span>
                  <span className="block text-gray-400 text-[11px]">Central & Split</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <Wrench weight="duotone" size={20} className="text-[#F1171E] mx-auto mb-1" />
                  <span className="block text-white font-bold text-sm">Plumbing</span>
                  <span className="block text-gray-400 text-[11px]">& Electrical</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <ShieldCheck weight="duotone" size={20} className="text-[#F1171E] mx-auto mb-1" />
                  <span className="block text-white font-bold text-sm">24/7 Service</span>
                  <span className="block text-gray-400 text-[11px]">Rapid Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
