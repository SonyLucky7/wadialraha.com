"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Envelope, ArrowRight } from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function ContactCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white perspective-[1200px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* ─── POP-OUT TYPE 2: HOLOGRAPHIC SCALE & DEPTH-ZOOM POP-OUT CONTAINER ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0B1E34] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl will-change-transform"
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(241, 23, 30, 0.8) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
                  Direct Engineering Support
                </span>
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                Let&apos;s Talk About Your <span className="text-[#F1171E]">Requirement</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Whether you need urgent emergency cooling support, turnkey plant installation, planned maintenance contracts, or pre-qualification packages, our engineering team is ready to assist.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 h-13 px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg shadow-[#F1171E]/30 hover:shadow-xl hover:shadow-[#F1171E]/50 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Contact Engineering Team</span>
                <ArrowRight weight="bold" size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Right - Contact Info Cards */}
            <div className="space-y-3.5">
              {COMPANY.contacts.map((contact, idx) => (
                <motion.div
                  key={contact.phoneRaw}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`tel:${contact.phoneRaw}`}
                    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F1171E]/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 group-hover:scale-110 transition-transform">
                      <Phone weight="fill" size={20} />
                    </div>
                    <div>
                      <p className="text-white text-sm sm:text-base font-bold group-hover:text-[#F1171E] transition-colors">
                        {contact.name}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">{contact.phone}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`mailto:${COMPANY.emails.primary}`}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F1171E]/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 group-hover:scale-110 transition-transform">
                    <Envelope weight="fill" size={20} />
                  </div>
                  <div>
                    <p className="text-white text-sm sm:text-base font-bold group-hover:text-[#F1171E] transition-colors">Corporate Email</p>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">
                      {COMPANY.emails.primary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default ContactCTASection;
