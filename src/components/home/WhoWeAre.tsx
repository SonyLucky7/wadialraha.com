"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Certificate } from "@phosphor-icons/react";

export function WhoWeAre() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden perspective-[1200px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - 3D Pop-Out Emblem Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -12, rotateX: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.025,
              rotateY: 3,
              rotateX: -2,
              transition: { duration: 0.25 },
            }}
            className="will-change-transform"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#F4F8FB] via-white to-[#EEF5FB] border border-[#E2E8F0] p-8 sm:p-10 flex flex-col items-center justify-center shadow-xl group">
              {/* Subtle radial glow */}
              <div className="absolute inset-0 bg-radial from-[#00E5FF]/[0.03] to-transparent pointer-events-none" />

              <div className="relative w-64 h-36 mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo-transparent.png"
                  alt="Wadi Al Raha Air Conditioning Contracting Est."
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              <div className="text-center relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1171E]/10 text-[#F1171E] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck weight="fill" size={14} />
                  Est. 1988 • UAE Heritage
                </span>
                <p className="text-sm font-extrabold text-[#133256] tracking-wide uppercase">
                  Wadi Al Raha AC Contracting Est.
                </p>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  500+ UAE Commercial Clients • 417+ Completed HVAC Projects
                </p>
              </div>

              {/* Red geometric accent lines */}
              <div className="absolute bottom-0 left-0 w-28 h-[3px] bg-[#F1171E]" />
              <div className="absolute bottom-0 left-0 h-28 w-[3px] bg-[#F1171E]" />
            </div>
          </motion.div>

          {/* Right - Content with Staggered 3D Pop-In */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
                Who We Are
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight leading-tight">
              Engineering Heritage & <br />
              <span className="text-[#F1171E]">Technical Reliability</span>
            </h2>
            <div className="space-y-4 mb-8 text-gray-600 leading-relaxed text-base">
              <p>
                <strong>Wadi Al Raha Air Conditioning Contracting Est.</strong> is a premier UAE HVAC and MEP engineering contractor operating under the chairmanship of <strong>Suhail Mohammed Saif Al Dhahari</strong>.
              </p>
              <p>
                Anchored in Al Ain since our premise establishment at Al-Manaseer in 2009, we manage large-scale chiller overhauls, commercial cold storage facilities, and MEP contracts. Our field teams utilize the proprietary <strong>Service Man</strong> mobile app for real-time dispatch, SLA tracking, and transparent job reporting.
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-4">
              <Link
                href="/company-profile"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#133256] text-white text-xs font-bold hover:bg-[#0B1E34] hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span>View Full Company Profile</span>
                <ArrowRight weight="bold" size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#133256] font-bold text-xs hover:text-[#F1171E] transition-colors"
              >
                About Our History &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default WhoWeAre;
