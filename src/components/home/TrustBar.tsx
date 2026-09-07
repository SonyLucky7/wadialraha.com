"use client";

import { motion } from "framer-motion";
import { Lightning, CurrencyDollar, Clock } from "@phosphor-icons/react";

const TRUST_ITEMS = [
  {
    icon: Lightning,
    title: "Fast Response",
    badge: "Under 60 Mins Arrival",
    description: "Accurate diagnosis and fast repair for AC issues across the UAE.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Pricing",
    badge: "Transparent Rates",
    description: "Professional service with competitive pricing and customer satisfaction as a priority.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    badge: "Non-Stop Dispatch",
    description: "Round-the-clock technical dispatch ready for urgent requirements.",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-10 bg-[#F8FAFC] py-14 sm:py-16 lg:py-20 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 perspective-[1000px]">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 hover:border-[#F1171E]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden will-change-transform"
              // ─── POP-OUT TYPE 3: DOMINO WAVE & SEQUENTIAL STAGGER ───
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.2 },
              }}
            >
              {/* Subtle top accent highlight bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F1171E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F1171E]/10 border border-[#F1171E]/20 flex items-center justify-center text-[#F1171E] group-hover:bg-[#F1171E] group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon weight="duotone" size={28} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#F1171E]/10 group-hover:text-[#F1171E] transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1E34] mb-2.5 tracking-tight group-hover:text-[#F1171E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom status indicator */}
              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F1171E] animate-pulse" />
                <span className="text-xs font-semibold text-slate-500 group-hover:text-[#0B1E34] transition-colors">
                  Certified Technical Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
