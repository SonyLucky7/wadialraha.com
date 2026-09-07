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
    <section className="py-20 lg:py-28 bg-[#0B1E34]">
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
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
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

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.label}
              className="text-center p-6 lg:p-8 rounded-xl border border-white/10 hover:border-[#F1171E]/40 hover:bg-white/[0.03] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <industry.icon
                weight="duotone"
                size={36}
                className="text-[#F1171E] mx-auto mb-3"
              />
              <span className="text-white text-sm font-medium">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
