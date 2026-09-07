"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChatText } from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function EmergencyCTASection() {

  return (
    <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 162, 39, 0.8) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
              24/7 Rapid Response
            </span>
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Air Conditioning Emergency?{" "}
            <span className="text-[#F1171E]">We&apos;re Ready.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            When cooling breakdowns threaten comfort, business operations, or perishables in the UAE heat, our mobile emergency teams deploy immediately.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={`tel:${COMPANY.contacts[0].phoneRaw}`}
            className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-hover transition-colors"
          >
            <Phone weight="bold" size={18} />
            Call for Emergency Service
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
          >
            <ChatText weight="bold" size={18} />
            Request Assistance
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
