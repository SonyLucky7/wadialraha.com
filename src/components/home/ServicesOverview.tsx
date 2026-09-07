"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Fan, Wind, Lightning, Thermometer, IceCream } from "@phosphor-icons/react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Snowflake,
  Fan,
  Wind,
  Lightning,
  Thermometer,
  IceCube: IceCream,
};

export function ServicesOverview() {

  return (
    <section className="py-20 lg:py-28 bg-gray-light">
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
              Core Capabilities & Solutions
            </span>
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight">
            Our Engineering <span className="text-[#F1171E]">Services</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive HVAC, chiller overhauls, commercial cold storage, electrical, and plumbing engineering for residential, commercial, and industrial facilities.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Snowflake;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full bg-white border border-gray-border rounded-xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#F1171E]/40">
                    {/* Number */}
                    <span className="text-5xl font-extrabold text-[#F1171E]/15 absolute top-5 right-6 select-none">
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-[#F1171E]/10 flex items-center justify-center mb-5">
                      <IconComponent weight="duotone" size={24} className="text-[#F1171E]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-navy mb-3 pr-12 group-hover:text-[#F1171E] transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-gray-medium text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-[#F1171E] transition-colors">
                      Explore Service
                      <ArrowRight
                        weight="bold"
                        size={14}
                        className="group-hover:translate-x-1 transition-transform text-[#F1171E]"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
