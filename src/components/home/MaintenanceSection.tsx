"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

const CHECKLIST = [
  "System inspection",
  "Coil cleaning",
  "Performance checks",
  "Pressure and temperature checks",
  "Electrical checks",
  "Component inspection",
  "Preventive maintenance recommendations",
];

export function MaintenanceSection() {

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                Preventative Care & Overhauls
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight">
              Keep Your Cooling Systems <span className="text-[#F1171E]">Performing at Their Best</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Regular maintenance maximizes cooling efficiency, reduces energy draw, and prevents unexpected downtime in extreme UAE desert climate conditions.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {CHECKLIST.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <CheckCircle weight="fill" size={20} className="text-[#F1171E] flex-shrink-0" />
                  <span className="text-navy text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 bg-[#F1171E] text-white font-bold rounded-lg hover:bg-[#D61218] transition-colors shadow-md hover:shadow-lg"
            >
              Schedule Maintenance
              <ArrowRight weight="bold" size={18} />
            </Link>
          </motion.div>

          {/* Right - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4F8FB] to-white border border-[#E2E8F0] p-8 flex items-center justify-center shadow-lg">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F1171E]/10 flex items-center justify-center">
                  <CheckCircle weight="duotone" size={38} className="text-[#F1171E]" />
                </div>
                <p className="text-[#133256] font-bold text-base">
                  HVAC Preventive Maintenance
                </p>
                <p className="text-[#64748B] text-xs mt-1 max-w-xs mx-auto">
                  Comprehensive coil cleaning, compressor checks & refrigerant optimization
                </p>
              </div>
              {/* Brand red accent */}
              <div className="absolute top-0 right-0 w-24 h-[3px] bg-[#F1171E]" />
              <div className="absolute top-0 right-0 w-[3px] h-24 bg-[#F1171E]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
