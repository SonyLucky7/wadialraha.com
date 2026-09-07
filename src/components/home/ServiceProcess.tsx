"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Contact Us",
    description: "Tell us about your requirement.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "Our team reviews the issue or service requirement.",
  },
  {
    number: "03",
    title: "Professional Service",
    description: "Qualified personnel perform the required work.",
  },
  {
    number: "04",
    title: "Follow-Up",
    description: "Ensure the service requirement has been addressed.",
  },
];

export function ServiceProcess() {

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
              Our Proven Workflow
            </span>
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight">
            How We <span className="text-[#F1171E]">Work</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A straightforward, disciplined engineering process from initial diagnostic inquiry to verified job completion.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative text-center lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-20px] h-[1px] bg-gray-border" />
              )}

              <div className="relative z-10 bg-white">
                <span className="text-5xl font-extrabold text-[#F1171E]/25 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
