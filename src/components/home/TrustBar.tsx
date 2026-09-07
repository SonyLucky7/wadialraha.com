"use client";

import { motion } from "framer-motion";
import { Lightning, CurrencyDollar, Clock } from "@phosphor-icons/react";

const TRUST_ITEMS = [
  {
    icon: Lightning,
    title: "Fast Response",
    description:
      "Accurate diagnosis and fast repair for AC issues.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Pricing",
    description:
      "Professional service with competitive pricing and customer satisfaction as a priority.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description:
      "Support available for urgent technical requirements.",
  },
];

export function TrustBar() {

  return (
    <section className="relative z-10 -mt-1 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-0 border border-gray-border rounded-2xl overflow-hidden shadow-lg -mt-10 sm:-mt-12 lg:-mt-14 bg-white">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              className={`flex items-start gap-4 p-6 lg:p-8 ${
                index < TRUST_ITEMS.length - 1
                  ? "md:border-r md:border-gray-border border-b md:border-b-0"
                  : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#F1171E]/10 flex items-center justify-center">
                <item.icon weight="duotone" size={24} className="text-[#F1171E]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
