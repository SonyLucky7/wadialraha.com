"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

const CHECKLIST = [
  "Comprehensive evaporator & condenser coil deep-chemical cleaning",
  "Hermetic & scroll compressor amp draw and vibration diagnostics",
  "High & low operating pressure verification vs manufacturer specs",
  "Refrigerant leak detection & sub-cooling / superheat balancing",
  "Centrifugal fan motor bearing lubrication & drive belt alignment",
  "Digital thermostat calibration & airflow CFM balancing across zones",
  "Full preventive maintenance health certification report",
];

export function MaintenanceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white perspective-[1200px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
                Preventative Care & Overhauls
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight leading-tight">
              Keep Your Cooling Systems <br />
              <span className="text-[#F1171E]">Performing at Peak Efficiency</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Regular maintenance maximizes cooling efficiency, reduces energy draw by up to 30%, and prevents unexpected breakdowns in extreme UAE desert climate conditions.
            </p>

            {/* Checklist with Staggered 3D Reveal */}
            <ul className="space-y-3.5 mb-9">
              {CHECKLIST.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <CheckCircle weight="fill" size={20} className="text-[#F1171E] flex-shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-[#0B1220] text-sm font-semibold">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 h-13 px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg shadow-[#F1171E]/25 hover:shadow-xl hover:shadow-[#F1171E]/40 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Schedule Preventive Maintenance</span>
              <ArrowRight weight="bold" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - 3D Pop-Out Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 12, rotateX: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.025,
              rotateY: -3,
              rotateX: 2,
              transition: { duration: 0.25 },
            }}
            className="will-change-transform"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F4F8FB] via-white to-[#EEF5FB] border border-[#E2E8F0] p-8 sm:p-12 flex items-center justify-center shadow-xl group">
              <div className="text-center p-6 relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-[#F1171E]/10 border border-[#F1171E]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <CheckCircle weight="duotone" size={48} className="text-[#F1171E]" />
                </div>
                <h3 className="text-[#133256] font-extrabold text-xl sm:text-2xl mb-2">
                  HVAC Preventive Maintenance
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                  Comprehensive coil descaling, compressor thermodynamic checks, electrical testing & refrigerant balance certification.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#133256] text-white text-xs font-bold shadow-sm">
                  <span>99.4% First-Time Fix SLA</span>
                </div>
              </div>

              {/* Brand red corner accents */}
              <div className="absolute top-0 right-0 w-28 h-[3px] bg-[#F1171E]" />
              <div className="absolute top-0 right-0 w-[3px] h-28 bg-[#F1171E]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default MaintenanceSection;
