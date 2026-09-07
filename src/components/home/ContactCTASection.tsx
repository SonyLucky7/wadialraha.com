"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Envelope, ArrowRight } from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function ContactCTASection() {

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="relative bg-[#0B1E34] rounded-2xl p-10 lg:p-16 overflow-hidden">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(241, 23, 30, 0.8) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  Direct Engineering Support
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
                Let&apos;s Talk About Your <span className="text-[#F1171E]">Requirement</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Whether you need urgent emergency cooling support, turnkey plant installation, planned maintenance contracts, or pre-qualification packages, our engineering team is ready to assist.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 bg-[#F1171E] text-white font-bold rounded-lg hover:bg-[#D61218] transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us
                <ArrowRight weight="bold" size={18} />
              </Link>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {COMPANY.contacts.map((contact) => (
                <Link
                  key={contact.phoneRaw}
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-[#F1171E]/40 hover:bg-white/[0.03] transition-all"
                >
                  <Phone weight="fill" size={20} className="text-[#F1171E] flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">
                      {contact.name}
                    </p>
                    <p className="text-gray-400 text-sm">{contact.phone}</p>
                  </div>
                </Link>
              ))}
              <Link
                href={`mailto:${COMPANY.emails.primary}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-[#F1171E]/40 hover:bg-white/[0.03] transition-all"
              >
                <Envelope weight="fill" size={20} className="text-[#F1171E] flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Email</p>
                  <p className="text-gray-400 text-sm">
                    {COMPANY.emails.primary}
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
