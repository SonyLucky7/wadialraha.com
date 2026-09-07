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
    description: "Responsive support for urgent requirements.",
  },
  {
    icon: Users,
    title: "Professional Expertise",
    description: "Experienced technical personnel focused on quality service.",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description: "Customer satisfaction remains a core priority.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Pricing",
    description: "Clear and competitive service pricing.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Emergency support for urgent technical requirements.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Services",
    description:
      "HVAC, cooling, electrical, plumbing and specialized systems.",
  },
];

export function WhyChooseUs() {

  return (
    <section className="py-20 lg:py-28 bg-gray-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white border border-gray-border rounded-xl p-7 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#F1171E]/10 flex items-center justify-center mb-4">
                <reason.icon weight="duotone" size={24} className="text-[#F1171E]" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
