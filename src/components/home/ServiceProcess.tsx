"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Contact & Consultation",
    description: "Tell us about your cooling issue or MEP project requirement via phone, WhatsApp, or request form.",
  },
  {
    number: "02",
    title: "Engineering Diagnostic",
    description: "Our certified HVAC specialists conduct precision thermal, pressure, and electrical inspection.",
  },
  {
    number: "03",
    title: "Precision Execution",
    description: "Qualified technicians perform repairs, compressor rebuilds, or installation to manufacturer specs.",
  },
  {
    number: "04",
    title: "Quality Verification",
    description: "Post-service airflow, delta-T temperature, and customer satisfaction verified before handoff.",
  },
];

export function ServiceProcess() {
  return (
    <section className="py-20 lg:py-28 bg-white perspective-[1200px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
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

        {/* Process Steps with 3D Pop-Outs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative will-change-transform"
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.025,
                rotateX: -2,
                transition: { duration: 0.25 },
              }}
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+48px)] right-[-24px] h-[2px] bg-gradient-to-r from-[#F1171E]/30 to-gray-200 z-0" />
              )}

              <div className="relative z-10 bg-white border border-gray-border/80 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-[#F1171E]/30 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F1171E]/10 border border-[#F1171E]/20 flex items-center justify-center font-extrabold text-[#F1171E] text-lg mb-4 shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0B1220] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-400">
                  <span>STEP 0{index + 1} OF 04</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F1171E]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServiceProcess;
