"use client";

import { motion } from "framer-motion";
import { Lightning, CurrencyDollar, Clock } from "@phosphor-icons/react";

const TRUST_ITEMS = [
  {
    icon: Lightning,
    title: "Fast Response",
    description: "Accurate diagnosis and fast repair for AC issues across the UAE.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Pricing",
    description: "Professional service with competitive pricing and customer satisfaction as a priority.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock technical dispatch ready for urgent requirements.",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-1 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-0 border border-gray-border rounded-2xl overflow-hidden shadow-xl -mt-10 sm:-mt-12 lg:-mt-14 bg-white perspective-[1000px]">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              className={`flex items-start gap-4 p-6 lg:p-8 transition-colors duration-300 hover:bg-[#F8FAFC] will-change-transform ${
                index < TRUST_ITEMS.length - 1
                  ? "md:border-r md:border-gray-border border-b md:border-b-0"
                  : ""
              }`}
              // ─── POP-OUT TYPE 3: DOMINO WAVE & SEQUENTIAL STAGGER ───
              initial={{ opacity: 0, y: 45, x: -18, scale: 0.9, rotateZ: -1.5 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotateZ: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F1171E]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <item.icon weight="duotone" size={26} className="text-[#F1171E]" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#0B1220] text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
export default TrustBar;
