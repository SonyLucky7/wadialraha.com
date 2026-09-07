"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  NavigationArrow,
  PhoneCall,
  ShieldCheck,
  Clock,
  ArrowSquareOut,
  ChatCircleDots,
  Compass,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function ServiceCoverage() {
  const [mapType, setMapType] = useState<"m" | "k">("m"); // 'm' = Roadmap, 'k' = Satellite

  // Realtime Google Maps embed URL centered on Oud Bin Sag-han, Al Ain, UAE
  const embedUrl = `https://maps.google.com/maps?q=Oud+Bin+Sag-han%2C+Al+Ain%2C+United+Arab+Emirates&t=${mapType}&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Oud Bin Sag-han, Al Ain, United Arab Emirates")}`;
  const directMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Oud Bin Sag-han, Al Ain, United Arab Emirates")}`;

  return (
    <section className="py-20 lg:py-28 bg-[#F4F8FB] relative overflow-hidden border-t border-b border-[#E2E8F0]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#133256]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#F1171E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ─── Left Side: Realtime Interactive Google Map ─── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-[#E2E8F0] relative">
              {/* Map Header Bar */}
              <div className="flex items-center justify-between px-3 py-2.5 mb-3 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]/70 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1171E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F1171E]"></span>
                  </span>
                  <span className="text-xs font-extrabold text-[#133256] uppercase tracking-wider">
                    Live Location • Oud Bin Sag-han, Al Ain
                  </span>
                </div>

                {/* Map Mode & Directions Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white border border-[#E2E8F0] rounded-lg p-0.5 shadow-sm text-xs font-bold text-[#133256]">
                    <button
                      type="button"
                      onClick={() => setMapType("m")}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        mapType === "m"
                          ? "bg-[#133256] text-white"
                          : "text-gray-500 hover:text-[#133256]"
                      }`}
                    >
                      Map
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapType("k")}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        mapType === "k"
                          ? "bg-[#133256] text-white"
                          : "text-gray-500 hover:text-[#133256]"
                      }`}
                    >
                      Satellite
                    </button>
                  </div>

                  <a
                    href={directMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-[#133256] hover:text-[#F1171E] hover:border-[#F1171E]/40 text-xs font-bold shadow-sm transition-all"
                    title="Open full map in Google Maps"
                  >
                    <span>Full Map</span>
                    <ArrowSquareOut size={13} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Map Iframe Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-inner bg-gray-100">
                <iframe
                  title="Realtime Google Map - Oud Bin Sag-han, Al Ain, UAE"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Badge at Bottom Left */}
                <div className="absolute bottom-3 left-3 z-10 pointer-events-auto bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/60 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F1171E]/10 flex items-center justify-center shrink-0">
                    <MapPin weight="fill" size={18} className="text-[#F1171E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#133256] leading-tight">
                      Oud Bin Sag-han
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      Al Ain, Abu Dhabi, UAE
                    </div>
                  </div>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F1171E] hover:bg-[#D61218] text-white text-[11px] font-bold transition-colors shadow-sm"
                  >
                    <NavigationArrow weight="bold" size={12} />
                    <span>Navigate</span>
                  </a>
                </div>
              </div>

              {/* Below Map Quick Info Bar */}
              <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2 px-1">
                <div className="flex items-center gap-2">
                  <Compass size={14} className="text-[#133256]" />
                  <span>Realtime interactive navigation enabled</span>
                </div>
                <div className="font-semibold text-[#133256]">
                  GPS: Al Ain • Eastern Region, UAE
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right Side: Coverage & Dispatch Details ─── */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Red Accent Badge */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                OPERATIONAL REACH & FLEET
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-4 tracking-tight leading-tight">
              Technical Support <span className="text-[#F1171E]">Across the UAE</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Headquartered from our operational base in <strong>Oud Bin Sag-han</strong> and technical depot in <strong>New Sanaiya, Al Ain</strong>, WADI AL RAHA delivers rapid-deployment HVAC, refrigeration, electrical, and plumbing engineering across all seven Emirates.
            </p>

            {/* Address & Hub Details Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm mb-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#133256]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin weight="fill" size={20} className="text-[#F1171E]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Primary Service Location
                  </div>
                  <h4 className="text-base font-extrabold text-[#133256]">
                    Oud Bin Sag-han, Al Ain
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Abu Dhabi Emirate, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck weight="fill" size={20} className="text-[#133256]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Workshop & Storage Facility
                  </div>
                  <div className="text-sm font-bold text-[#133256]">
                    New Sanaiya, Al Ain 100553
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Central parts depot & heavy equipment overhaul facility
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Badges */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                Emirates Service Coverage:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Al Ain & Eastern Region",
                  "Abu Dhabi City",
                  "Dubai",
                  "Sharjah",
                  "Ajman & Northern Emirates",
                ].map((area, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border border-[#E2E8F0] text-[#133256] shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F1171E]" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex items-center flex-wrap gap-3 pt-2">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F1171E] hover:bg-[#D61218] text-white font-bold text-sm shadow-md transition-all hover:shadow-lg"
              >
                <NavigationArrow weight="bold" size={16} />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={`tel:${COMPANY.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#133256] hover:bg-[#0B1E34] text-white font-bold text-sm transition-all"
              >
                <PhoneCall weight="fill" size={16} />
                <span>Call Dispatch: {COMPANY.phones[0].number}</span>
              </a>

              <a
                href={COMPANY.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold text-sm transition-all"
                title="Share Location on WhatsApp"
              >
                <ChatCircleDots weight="fill" size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Response Time Guarantee */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-500">
              <Clock weight="fill" size={15} className="text-[#F1171E]" />
              <span>Rapid local dispatch • Emergency technicians on call 24/7</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
