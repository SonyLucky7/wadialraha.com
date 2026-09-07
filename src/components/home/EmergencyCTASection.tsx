"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChatText, Warning } from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function EmergencyCTASection() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#071322] overflow-hidden perspective-[1200px]">
      {/* Background Gradients & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E34] to-[#071322]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F1171E]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0B1E34]/90 border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-md will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1171E]/15 border border-[#F1171E]/30 text-[#F1171E] text-xs font-extrabold uppercase tracking-wider mb-6">
            <Warning weight="fill" size={16} />
            <span>24/7 UAE Rapid Response Desk</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
            Air Conditioning Emergency? <br className="hidden sm:inline" />
            <span className="text-[#F1171E]">Our Certified Engineers Are Ready.</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            When cooling breakdowns threaten comfort, business operations, or perishables in the UAE heat, our mobile emergency response teams deploy within 60 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`tel:${COMPANY.contacts[0].phoneRaw}`}
              className="group inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg shadow-[#F1171E]/30 hover:shadow-xl hover:shadow-[#F1171E]/50 hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto"
            >
              <Phone weight="fill" size={18} className="group-hover:scale-110 transition-transform" />
              <span>Call Emergency Hotline: {COMPANY.contacts[0].phone}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 h-13 px-8 border-2 border-white/25 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm"
            >
              <ChatText weight="bold" size={18} />
              <span>Request Online Assistance</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default EmergencyCTASection;
