"use client";

import { motion } from "framer-motion";
import {
  Lightning as LightningIcon,
  Users,
  Handshake,
  CurrencyDollar,
  Clock,
  Wrench,
} from "@phosphor-icons/react";

const REASONS = [
  {
    icon: LightningIcon,
    title: "Fast Response",
    description: "Emergency technical dispatch mobilized immediately for residential and commercial crises.",
  },
  {
    icon: Users,
    title: "Professional Expertise",
    description: "Highly trained, veteran HVAC and MEP engineers with 35+ years of UAE climate expertise.",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description: "Transparent job updates, photo documentation, and SLA compliance via Service Man app.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Pricing",
    description: "Direct, transparent procurement pricing with zero hidden fees or speculative estimates.",
  },
  {
    icon: Clock,
    title: "24/7 Support Desk",
    description: "Round-the-clock emergency assistance covering chillers, package units, and cooling assets.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Scope",
    description: "Full-facility HVAC, chiller overhauls, cold rooms, ice machines, electrical, and plumbing MEP.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] perspective-[1200px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
              Our Competitive Advantage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-4 tracking-tight">
            Why Choose <span className="text-[#F1171E]">Wadi Al Raha</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Over 35+ years of HVAC engineering excellence built on fast SLA dispatch, 80% veteran technicians, and uncompromised customer satisfaction.
          </p>
        </motion.div>

        {/* Cards Grid with 3D Pop-Outs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white border border-gray-border rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#F1171E]/30 transition-all duration-300 will-change-transform flex flex-col justify-between"
              initial={{ opacity: 0, y: 45, scale: 0.93, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -7,
                scale: 1.02,
                rotateX: -2,
                transition: { duration: 0.25 },
              }}
            >
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#F1171E]/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <reason.icon weight="duotone" size={26} className="text-[#F1171E]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1220] mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;
