"use client";

import { motion } from "framer-motion";
import {
  House,
  Buildings,
  Storefront,
  Bed,
  Package,
  Warehouse,
  Factory,
  UsersThree,
} from "@phosphor-icons/react";

const INDUSTRIES = [
  { icon: House, label: "Residential" },
  { icon: Buildings, label: "Commercial" },
  { icon: Storefront, label: "Offices & Retail" },
  { icon: Bed, label: "Hospitality" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: Package, label: "Cold Storage" },
  { icon: Factory, label: "Industrial" },
  { icon: UsersThree, label: "Property Management" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1E34] perspective-[1200px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
              Sectors & Environments
            </span>
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Industries <span className="text-[#F1171E]">We Support</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Specialized engineering solutions tailored for commercial, healthcare, educational, retail, and industrial facilities across the UAE.
          </p>
        </motion.div>

        {/* ─── POP-OUT TYPE 1: 3D PERSPECTIVE MATRIX POP-OUT ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.label}
              className="text-center p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F1171E]/50 hover:bg-white/[0.06] transition-all duration-300 shadow-lg will-change-transform group cursor-default"
              initial={{ opacity: 0, y: 45, scale: 0.9, rotateX: 14 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.04,
                rotateX: -3,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-14 h-14 mx-auto mb-3.5 rounded-xl bg-[#F1171E]/10 border border-[#F1171E]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                <industry.icon
                  weight="duotone"
                  size={32}
                  className="text-[#F1171E]"
                />
              </div>
              <span className="text-white text-sm sm:text-base font-bold tracking-wide block group-hover:text-[#F1171E] transition-colors">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default IndustriesSection;
