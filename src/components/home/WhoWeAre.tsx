"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export function WhoWeAre() {

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4F8FB] to-white border border-[#E2E8F0] p-8 flex flex-col items-center justify-center shadow-lg">
              <div className="relative w-56 h-32 mb-4">
                <img
                  src="/images/logo-transparent.png"
                  alt="Wadi Al Raha Air Conditioning Contracting Est."
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#133256] tracking-wide uppercase">
                  Wadi Al Raha AC Contracting Est.
                </p>
                <p className="text-xs text-gray-500 mt-1 font-semibold">
                  Est. 1988 • 500+ UAE Clients • 417+ Completed Projects
                </p>
              </div>
              {/* Red accent on corners */}
              <div className="absolute bottom-0 left-0 w-24 h-[3px] bg-[#F1171E]" />
              <div className="absolute bottom-0 left-0 h-24 w-[3px] bg-[#F1171E]" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                Who We Are
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight">
              Engineering Heritage & <span className="text-[#F1171E]">Technical Reliability</span>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#133256] text-white text-xs font-bold hover:bg-[#0B1E34] transition-all shadow-sm"
              >
                View Full Company Profile
                <ArrowRight weight="bold" size={14} />
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
