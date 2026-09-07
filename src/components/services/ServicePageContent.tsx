"use client";

import React from "react";
import Link from "next/link";
import { Service } from "@/lib/constants/services";
import { motion } from "framer-motion";
import * as PhosphorIcons from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServicePageContentProps {
  service: Service;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-[#F4F8FB] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0B1E34] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F1171E] to-transparent opacity-50" />
        
        {/* Service Number Watermark */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[200px] lg:text-[300px] font-extrabold text-white opacity-5 pointer-events-none select-none leading-none">
          {service.number}
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                TECHNICAL SERVICE • CONTRACTING DIVISION
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-jakarta leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {service.heroDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#F1171E] hover:bg-[#D61218] transition-colors duration-300 rounded min-h-[44px] shadow-md"
            >
              Request Service
              <PhosphorIcons.ArrowRight size={20} weight="bold" className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-4xl"
          >
            <SectionHeading
              eyebrow="ENGINEERING SCOPE"
              title="Service"
              titleAccent="Overview"
              subtitle={service.description}
            />
          </motion.div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20 bg-[#F4F8FB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-12"
          >
            <SectionHeading
              eyebrow="DELIVERABLES & STANDARDS"
              title="What We"
              titleAccent="Provide"
              subtitle="Our comprehensive approach ensures all aspects of your system are covered with professional expertise."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0]"
              >
                <PhosphorIcons.CheckCircle
                  size={26}
                  weight="fill"
                  className="text-[#F1171E] mr-4 shrink-0 mt-0.5"
                />
                <span className="text-lg text-gray-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-12"
          >
            <SectionHeading
              eyebrow="TARGET SECTORS"
              title="Who Benefits"
              titleAccent="From This Service"
              subtitle="We tailor our solutions to meet the specific requirements of various industries and sectors."
            />
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {service.audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.05 }}
                className="bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256] px-6 py-3 rounded-full font-semibold"
              >
                {audience}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WADI AL RAHA */}
      <section className="py-20 bg-[#0B1E34]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-center mb-16"
          >
            <SectionHeading
              eyebrow="OUR TECHNICAL ADVANTAGE"
              title="Why Choose"
              titleAccent="WADI AL RAHA"
              subtitle="We deliver excellence through our dedicated teams, technical expertise, and commitment to quality."
              align="center"
              light={true}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Response", icon: "Lightning", desc: "Quick deployment for critical issues" },
              { title: "Expert Technicians", icon: "UserGear", desc: "Trained professionals for complex systems" },
              { title: "Competitive Pricing", icon: "Coins", desc: "Transparent and fair cost structures" },
              { title: "Ongoing Support", icon: "Wrench", desc: "Reliable maintenance and after-service care" },
            ].map((benefit, index) => {
              // @ts-ignore
              const IconComp = PhosphorIcons[benefit.icon] as React.ElementType;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                  className="bg-[#133256] p-8 rounded-xl border border-white/10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#F1171E]/15 rounded-full flex items-center justify-center mb-6">
                    {IconComp && <IconComp size={32} weight="duotone" className="text-[#F1171E]" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4F8FB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-white rounded-2xl p-10 md:p-16 shadow-lg border border-[#E2E8F0] text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                GET STARTED TODAY
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#133256] mb-4">
              Need Professional <span className="text-[#F1171E]">Technical Service?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact WADI AL RAHA today to discuss your requirements or schedule a service visit from our technical team.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+971569921448"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#133256] hover:bg-[#0B1E34] transition-colors duration-300 rounded min-h-[44px]"
              >
                <PhosphorIcons.Phone size={20} weight="fill" className="mr-2" />
                Call +971 56 992 1448
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#F1171E] hover:bg-[#D61218] transition-colors duration-300 rounded min-h-[44px] shadow-md"
              >
                Request Service
                <PhosphorIcons.EnvelopeSimple size={20} weight="bold" className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
