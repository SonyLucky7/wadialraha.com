"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Snowflake, Wrench, ShieldCheck, ArrowRight, Phone, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export interface BrandItem {
  id: string;
  name: string;
  logo: string;
  isSvg: boolean;
  type: string;
  description: string;
  specialties: string[];
  accentColor: string;
}

const BRANDS: BrandItem[] = [
  {
    id: "bluestar",
    name: "Blue Star",
    logo: "/images/brands/bluestar.png",
    isSvg: false,
    type: "Commercial & Industrial HVAC",
    description: "Expert erection, overhaul, and preventative maintenance for Blue Star central chillers, VRF systems, and commercial cold storage.",
    specialties: ["Central AC Chillers", "VRF Systems", "Cold Rooms", "Package Units"],
    accentColor: "#004B87",
  },
  {
    id: "lg",
    name: "LG Electronics",
    logo: "/images/brands/lg.svg",
    isSvg: true,
    type: "Inverter AC & Commercial Multi-V",
    description: "Specialized service and diagnostic repairs for LG Dual Inverter split ACs, Multi-V VRF systems, and commercial cooling units.",
    specialties: ["Dual Inverter ACs", "Multi-V VRF", "Cassette AC", "Smart Inverters"],
    accentColor: "#C40043",
  },
  {
    id: "godrej",
    name: "Godrej",
    logo: "/images/brands/godrej.svg",
    isSvg: true,
    type: "Cooling & Refrigeration",
    description: "Authorized care, precision compressor troubleshooting, and maintenance for Godrej heavy-duty air conditioning and refrigeration appliances.",
    specialties: ["Eco Inverter ACs", "Deep Freezers", "Commercial Coolers", "Split Systems"],
    accentColor: "#1565C0",
  },
  {
    id: "whirlpool",
    name: "Whirlpool",
    logo: "/images/brands/whirlpool.svg",
    isSvg: true,
    type: "Cooling & Commercial Appliances",
    description: "Comprehensive installation, refrigerant leak detection, and mechanical repairs for Whirlpool ACs and heavy-duty cooling appliances.",
    specialties: ["Split Air Conditioners", "Commercial Freezers", "Ice Makers", "Condenser Coils"],
    accentColor: "#002D72",
  },
  {
    id: "lloyd",
    name: "Lloyd (Havells)",
    logo: "/images/brands/lloyd.svg",
    isSvg: true,
    type: "Heavy Duty Air Conditioning",
    description: "Fast-response service for Lloyd extreme-climate air conditioners, heavy-duty rotary compressors, and ductable units across the UAE.",
    specialties: ["Heavy-Duty Inverters", "Cassette ACs", "Tower AC Units", "Ductable Systems"],
    accentColor: "#E21B22",
  },
];

export function BrandLogosSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const selectedBrand = BRANDS[currentIndex];

  // Auto-switch brand capability details every 4 seconds continuously 24/7
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BRANDS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? BRANDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BRANDS.length);
  };

  const handleSelectBrand = (index: number) => {
    setCurrentIndex(index);
  };

  // Duplicate for seamless infinite scrolling
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#F4F8FB] to-white overflow-hidden relative border-t border-b border-[#E2E8F0]">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F1171E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#133256]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
              OUR BRANDS & EQUIPMENT
            </span>
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight">
            Leading Manufacturers <span className="text-[#F1171E]">We Service & Support</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our certified technicians carry extensive hands-on expertise with the UAE&apos;s most trusted cooling and appliance brands. From urgent compressor repairs to scheduled plant maintenance, we service all major models.
          </p>
        </div>

        {/* ─── Infinite Smooth Scrolling Marquee (Left to Right Slowly 24/7) ─── */}
        <div className="relative w-full overflow-hidden py-6 mb-16">
          {/* Gradient Edge Masks for Smooth Fade Out */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Moves Left to Right continuously 24/7: x translates from -33.333% to 0% */}
          <motion.div
            className="flex gap-6 md:gap-8 items-center w-max"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {marqueeBrands.map((brand, idx) => {
              const isCurrent = selectedBrand.id === brand.id;
              return (
                <motion.div
                  key={`${brand.id}-${idx}`}
                  onClick={() => handleSelectBrand(idx % BRANDS.length)}
                  className={`cursor-pointer group flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl p-6 border transition-all duration-300 relative ${
                    isCurrent
                      ? "border-[#F1171E] shadow-xl ring-2 ring-[#F1171E]/30 bg-gradient-to-b from-white to-[#F1171E]/5 -translate-y-2"
                      : "border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#133256]/30 hover:-translate-y-1.5"
                  }`}
                >
                  {/* Active Indicator Badge */}
                  {isCurrent && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F1171E] text-white shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Active
                    </span>
                  )}

                  {/* Logo Display Area */}
                  <div className="h-20 flex items-center justify-center mb-4 px-3 bg-[#F8FAFC] rounded-xl group-hover:bg-white transition-colors duration-300">
                    <div className="relative w-full h-12">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        fill
                        sizes="200px"
                        className={`object-contain transition-all duration-300 ${
                          isCurrent
                            ? "filter grayscale-0 scale-105"
                            : "filter grayscale group-hover:grayscale-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Brand Name & Category */}
                  <div className="text-center">
                    <h3 className={`font-bold text-base transition-colors ${
                      isCurrent ? "text-[#F1171E]" : "text-[#133256] group-hover:text-[#F1171E]"
                    }`}>
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {brand.type}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── Auto-Switching Technical Capabilities & Scope Details (Runs 24/7) ─── */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl p-6 sm:p-10 md:p-12 relative">
          {/* Top Control Bar with Status & Interactive Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#F1171E]">
              <Wrench weight="fill" size={18} />
              <span>Technical Capabilities & Scope Details</span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Continuous 24/7 Auto-Rotation Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256] shadow-2xs select-none">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] text-[#133256]">Auto-Switching 24/7 • 0{currentIndex + 1}/0{BRANDS.length}</span>
              </div>

              {/* Prev / Next manual controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Brand"
                  className="w-8 h-8 rounded-lg bg-[#F4F8FB] border border-[#E2E8F0] flex items-center justify-center text-[#133256] hover:bg-[#133256] hover:text-white transition-colors cursor-pointer shadow-2xs"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Brand"
                  className="w-8 h-8 rounded-lg bg-[#F4F8FB] border border-[#E2E8F0] flex items-center justify-center text-[#133256] hover:bg-[#133256] hover:text-white transition-colors cursor-pointer shadow-2xs"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Animated Brand Showcase Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBrand.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Brand Emblem & Quick Status */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 sm:p-8 bg-[#F4F8FB] rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="relative w-48 h-24 mb-6">
                  <Image
                    src={selectedBrand.logo}
                    alt={selectedBrand.name}
                    fill
                    sizes="240px"
                    className="object-contain"
                  />
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#E2E8F0] text-[#133256] shadow-2xs mb-3">
                  <ShieldCheck weight="fill" size={14} className="text-[#F1171E]" />
                  Authorized Care & Repair
                </span>

                <h4 className="text-xl sm:text-2xl font-extrabold text-[#133256]">
                  {selectedBrand.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1 font-medium">
                  {selectedBrand.type}
                </p>

                <div className="mt-6 pt-6 border-t border-[#E2E8F0] w-full flex justify-center gap-3">
                  <a
                    href={`tel:${COMPANY.phones[0].raw}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F1171E] text-white font-bold text-xs hover:bg-[#D61218] transition-colors shadow-sm"
                  >
                    <Phone weight="fill" size={14} />
                    Book Technician
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#133256] text-white font-bold text-xs hover:bg-[#0B1E34] transition-colors"
                  >
                    Inquire
                  </Link>
                </div>
              </div>

              {/* Right: Technical Capabilities & Systems Handled */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#133256]/5 text-[#133256] w-fit mb-3">
                  <span>Brand Scope Profile {currentIndex + 1} of {BRANDS.length}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#133256] mb-4">
                  Full-Lifecycle Support for {selectedBrand.name} Equipment
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {selectedBrand.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Core Equipment & Systems Serviced:
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedBrand.specialties.map((spec, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-[#F4F8FB] border border-[#E2E8F0] rounded-xl flex items-center gap-2.5 shadow-2xs hover:border-[#F1171E]/40 transition-colors"
                      >
                        <Snowflake weight="fill" size={16} className="text-[#F1171E] shrink-0" />
                        <span className="text-xs font-bold text-[#133256] leading-snug">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Selector Buttons */}
                <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-3">
                  <span className="text-xs text-gray-500 font-semibold">
                    Click any brand to inspect service scope:
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {BRANDS.map((b, idx) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => handleSelectBrand(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all relative cursor-pointer ${
                          selectedBrand.id === b.id
                            ? "bg-[#133256] text-white shadow-md ring-2 ring-[#F1171E]/40"
                            : "bg-[#F4F8FB] text-[#133256] hover:bg-[#E2E8F0]"
                        }`}
                      >
                        <span>{b.name}</span>
                        {selectedBrand.id === b.id && (
                          <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#F1171E] rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          All brand names, trademarks, and logos displayed are the property of their respective owners (Godrej, Blue Star, Lloyd/Havells, Whirlpool, and LG) and are used solely to demonstrate technical servicing and maintenance capabilities.
        </div>
      </div>
    </section>
  );
}
