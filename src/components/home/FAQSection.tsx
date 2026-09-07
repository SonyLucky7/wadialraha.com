"use client";

import { motion } from "framer-motion";
import { FAQS } from "@/lib/constants";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection() {

  return (
    <section className="py-20 lg:py-28 bg-gray-light">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
              Got Questions?
            </span>
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-4 tracking-tight">
            Frequently Asked <span className="text-[#F1171E]">Questions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our contracting scope, response times, maintenance protocols, and emergency dispatch.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <FAQAccordion items={FAQS} />
        </motion.div>
      </div>
    </section>
  );
}
