"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmergencyCTA } from "@/components/ui/EmergencyCTA";
import { BrandLogosSection } from "@/components/about/BrandLogosSection";
import { COMPANY } from "@/lib/constants";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Wrench,
  Clock,
  ThumbsUp,
  Sparkle,
  Compass,
  Handshake,
  BookOpen,
  Gauge,
  ThermometerCold,
  Certificate,
  ChartLineUp,
} from "@phosphor-icons/react";

export default function AboutContent() {
  return (
    <>
      {/* ─── 1. HERO SECTION (Balanced 2-Column Layout) ─── */}
      <section className="bg-[#0B1E34] py-20 lg:py-28 relative overflow-hidden text-white border-b border-[#133256]">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F1171E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#133256]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-10">
            {/* Left Column: Narrative, Category Bar, Title, CTAs */}
            <div className="lg:col-span-7">
              <FadeUp>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                  <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                    ABOUT WADI AL RAHA • EST. 1988
                  </span>
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
                  Reliable Technical Service. <span className="text-[#F1171E]">Professional Results.</span>
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  Operating continuously across the UAE since 1988, Wadi Al Raha provides turnkey air conditioning contracting, commercial refrigeration, and MEP engineering. Headquartered in Al Ain, we serve residential, retail, commercial, and industrial facilities with uncompromised quality.
                </p>

                {/* Trust Badges Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
                    <ShieldCheck weight="fill" size={16} className="text-[#F1171E]" />
                    <span>100% Employee-Owned Ethos</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
                    <Clock weight="fill" size={16} className="text-[#F1171E]" />
                    <span>24/7 Rapid Emergency Dispatch</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
                    <Certificate weight="fill" size={16} className="text-[#F1171E]" />
                    <span>Al Ain & UAE Nationwide</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${COMPANY.phones[0].raw}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#F1171E] text-white font-bold text-sm sm:text-base hover:bg-[#D61218] transition-all shadow-lg hover:shadow-red-600/30"
                  >
                    <Phone weight="fill" size={18} />
                    <span>Call Technical Dispatch</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-bold text-sm sm:text-base hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <span>Inquire Online</span>
                    <ArrowRight weight="bold" size={16} />
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: High-Impact Credential Showcase Card */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.15}>
                <div className="bg-gradient-to-br from-[#133256]/90 to-[#0B1E34]/95 backdrop-blur-md rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative">
                  {/* Glowing Corner Indicator */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#F1171E]/20 rounded-full blur-xl pointer-events-none" />

                  {/* Logo Centerpiece */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <div className="relative w-40 h-16">
                      <Image
                        src="/images/logo-white.png"
                        alt="Wadi Al Raha Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#F1171E] text-white shadow-sm">
                      SINCE 1988
                    </span>
                  </div>

                  {/* Company Legal Identity */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {COMPANY.legalName}
                  </h3>
                  <p className="text-xs text-gray-400 mb-6">
                    Al-Sanaiyya & Oud Bin Sag-han, Al Ain, United Arab Emirates
                  </p>

                  {/* 4-Metric Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#F1171E]/50 transition-colors">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#F1171E]">
                        {COMPANY.stats.yearStarted}
                      </div>
                      <div className="text-xs text-gray-300 font-semibold mt-1">
                        Founded in UAE (35+ Yrs)
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#F1171E]/50 transition-colors">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        {COMPANY.stats.installations}
                      </div>
                      <div className="text-xs text-gray-300 font-semibold mt-1">
                        Total Installations
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#F1171E]/50 transition-colors">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        {COMPANY.stats.projectsCompleted}
                      </div>
                      <div className="text-xs text-gray-300 font-semibold mt-1">
                        Completed Projects
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#F1171E]/50 transition-colors">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#F1171E]">
                        {COMPANY.stats.veteranWorkforcePct}
                      </div>
                      <div className="text-xs text-gray-300 font-semibold mt-1">
                        10+ Yr Veteran Techs
                      </div>
                    </div>
                  </div>

                  {/* Leadership Endorsement Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider">Executive Chairman</span>
                      <span className="font-bold text-white">{COMPANY.chairman}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider">Premise Established</span>
                      <span className="font-semibold text-gray-300">Al-Manaseer, 2009</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY & HERITAGE (Balanced 2-Column Grid) ─── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative History */}
            <div className="lg:col-span-7">
              <FadeUp>
                <SectionHeading
                  eyebrow="ESTABLISHED 1988 • UAE ENGINEERING HERITAGE"
                  title="Our Story &"
                  titleAccent="Heritage"
                />

                <div className="prose prose-lg text-[#151A24] mt-6 space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    <strong>Wadi Al Raha Air Conditioning Contracting Est.</strong> was founded in 1988, establishing a dedicated operating base at Al-Manaseer in 2009 under the executive chairmanship of <strong>Suhail Mohammed Saif Al Dhahari</strong>.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Over more than 35+ years of continuous service across the Emirates, we have built an enduring reputation for engineering discipline, fast-response mobilization, and long-term diagnostic accuracy. We have successfully completed over <strong>1,000+ HVAC and commercial refrigeration installations</strong> and managed more than <strong>417+ major facility projects</strong>.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Our verified track record encompasses high-stakes cooling contracts for <strong>Carrefour UAE hypermarkets across 25+ retail locations</strong>, Presidential Palace works in Al Ain, commercial industrial plants, flight academies, and residential villa communities.
                  </p>
                </div>

                {/* Key Credentials Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-[#E2E8F0]">
                  <div className="p-3 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0] text-center">
                    <div className="text-xs font-bold text-[#133256]">35+ Years</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">UAE Heritage</div>
                  </div>
                  <div className="p-3 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0] text-center">
                    <div className="text-xs font-bold text-[#F1171E]">500+ Clients</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Satisfied in UAE</div>
                  </div>
                  <div className="p-3 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0] text-center">
                    <div className="text-xs font-bold text-[#133256]">25+ Sites</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Carrefour UAE</div>
                  </div>
                  <div className="p-3 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0] text-center">
                    <div className="text-xs font-bold text-[#F1171E]">80% Veteran</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Senior Techs</div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Service Man Proprietary Mobile Dispatch Showcase */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.15}>
                <div className="bg-[#F4F8FB] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#133256] text-white flex items-center justify-center shadow-sm">
                      <ChartLineUp weight="bold" size={24} className="text-[#F1171E]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F1171E] block">
                        PROPRIETARY FIELD TECHNOLOGY
                      </span>
                      <h4 className="text-lg font-bold text-[#133256]">
                        {COMPANY.technology.app}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {COMPANY.technology.description}
                  </p>

                  {/* Workflow Features Checklist */}
                  <div className="space-y-3 mb-6">
                    {[
                      "Real-time GPS technician tracking & SLA response routing",
                      "Digital manifold pressure & electronic telemetry logging",
                      "Standardized OEM checklist verification before job sign-off",
                      "Direct coordination with client facility managers & engineers",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-2xs">
                        <CheckCircle weight="fill" size={18} className="text-[#F1171E] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-[#133256] leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Philosophy Quote Callout */}
                  <div className="p-4 bg-white rounded-2xl border-l-4 border-[#F1171E] border-r border-t border-b border-[#E2E8F0]">
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                      &ldquo;Trustworthiness and Hard-work guide our daily operations. Over 80% of our technical workforce carries over 10 years of field engineering expertise.&rdquo;
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. PHILOSOPHY, VISION & OWNERSHIP (Balanced 2-Column Grid) ─── */}
      <section className="py-20 lg:py-28 bg-[#F4F8FB] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Vision & Chairman Statement */}
            <div className="lg:col-span-5">
              <FadeUp>
                <SectionHeading
                  eyebrow="TRUSTWORTHINESS & HARD-WORK"
                  title="Philosophy, Vision &"
                  titleAccent="Ownership"
                />

                <p className="text-base sm:text-lg text-[#151A24] mt-6 leading-relaxed mb-6">
                  Guided by our founding philosophy of <strong>&ldquo;{COMPANY.philosophy}&rdquo;</strong> and our vision of <strong>&ldquo;{COMPANY.vision}&rdquo;</strong>, Wadi Al Raha operates with an aligned employee-ownership culture.
                </p>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  When you partner with our team, you work directly with dedicated engineers and site technicians who hold personal investment and deep accountability in every installation, repair, and ongoing maintenance contract.
                </p>

                {/* Chairman Statement Card */}
                <div className="p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#133256]/5 rounded-bl-full pointer-events-none" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#133256] text-white flex items-center justify-center font-bold text-sm">
                      SM
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#133256]">{COMPANY.chairman}</h4>
                      <p className="text-xs text-gray-500">Executive Chairman</p>
                    </div>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-gray-700 italic leading-relaxed border-t border-[#E2E8F0] pt-4">
                    &ldquo;Meeting needs. Exceeding expectations. We believe true client loyalty is earned through prompt diagnostic accuracy, honest pricing, and durable engineering that stands up to the UAE climate.&rdquo;
                  </blockquote>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: The 4 Core Corporate Commitments (2x2 Grid) */}
            <div className="lg:col-span-7">
              <FadeUp delay={0.15}>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F1171E] block mb-1">
                    OUR CORE PRINCIPLES
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#133256]">
                    Four Pillars of Professional Execution
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Commitment 1 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#F1171E]/40 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] text-[#F1171E] flex items-center justify-center mb-4">
                      <Compass weight="fill" size={22} />
                    </div>
                    <h4 className="font-bold text-base text-[#133256] mb-2">
                      {COMPANY.commitments[0].title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {COMPANY.commitments[0].desc}
                    </p>
                  </div>

                  {/* Commitment 2 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#F1171E]/40 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256] flex items-center justify-center mb-4">
                      <Handshake weight="fill" size={22} />
                    </div>
                    <h4 className="font-bold text-base text-[#133256] mb-2">
                      {COMPANY.commitments[1].title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {COMPANY.commitments[1].desc}
                    </p>
                  </div>

                  {/* Commitment 3 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#F1171E]/40 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] text-[#F1171E] flex items-center justify-center mb-4">
                      <BookOpen weight="fill" size={22} />
                    </div>
                    <h4 className="font-bold text-base text-[#133256] mb-2">
                      {COMPANY.commitments[2].title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {COMPANY.commitments[2].desc}
                    </p>
                  </div>

                  {/* Commitment 4 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#F1171E]/40 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256] flex items-center justify-center mb-4">
                      <ShieldCheck weight="fill" size={22} />
                    </div>
                    <h4 className="font-bold text-base text-[#133256] mb-2">
                      {COMPANY.commitments[3].title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {COMPANY.commitments[3].desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. OUR WORKING APPROACH (Full-Width 5 Pillars Grid) ─── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="CUSTOMER-FIRST ETHICS"
              title="Our Working"
              titleAccent="Approach"
              align="center"
              subtitle="Five fundamental operating standards that govern every installation, diagnostic visit, and maintenance contract across the UAE."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
              {[
                {
                  step: "01",
                  title: "Fair Treatment",
                  icon: ShieldCheck,
                  desc: "Transparent scopes of work and honest upfront quotations without hidden fees or unnecessary part replacements.",
                },
                {
                  step: "02",
                  title: "Accurate Diagnosis",
                  icon: Wrench,
                  desc: "Precision electronic testing and 10+ year veteran technicians isolate root mechanical and electrical failures fast.",
                },
                {
                  step: "03",
                  title: "Professional Work",
                  icon: Sparkle,
                  desc: "Rigorous brazing, vacuum holding, neat wiring, and OEM-approved parts meeting exact manufacturer specifications.",
                },
                {
                  step: "04",
                  title: "Fast Response",
                  icon: Clock,
                  desc: "Rapid dispatch from regional hubs in Al Ain, Oud Bin Sag-han, and New Sanaiya with 24/7 on-call readiness.",
                },
                {
                  step: "05",
                  title: "Customer Satisfaction",
                  icon: ThumbsUp,
                  desc: "Documented commissioning telemetry, post-repair testing, and long-term maintenance follow-ups on every contract.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4F8FB] p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#F1171E]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#F1171E] bg-white px-2.5 py-1 rounded-lg border border-[#E2E8F0] shadow-2xs">
                        {item.step}
                      </span>
                      <item.icon
                        weight="fill"
                        size={24}
                        className="text-[#133256] group-hover:text-[#F1171E] transition-colors"
                      />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#133256] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#133256] group-hover:text-[#F1171E] transition-colors">
                    <span>Standard Protocol</span>
                    <CheckCircle weight="fill" size={14} className="text-[#F1171E]" />
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 5. BRANDS WE SERVICE & SUPPORT (Continuous 24/7 Marquee + Technical Capabilities) ─── */}
      <BrandLogosSection />

      {/* ─── 6. AC MAINTENANCE APPROACH (Balanced 2-Column Grid) ─── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Comprehensive Maintenance Protocols */}
            <div className="lg:col-span-7">
              <FadeUp>
                <SectionHeading
                  eyebrow="PREVENTATIVE CARE STANDARDS"
                  title="AC Maintenance"
                  titleAccent="Approach"
                />

                <p className="text-base sm:text-lg text-gray-700 mt-6 mb-8 leading-relaxed">
                  Depending on your facility&apos;s system design and OEM manufacturer specifications, our certified HVAC maintenance contracts encompass rigorous mechanical, thermodynamic, and electrical checkpoints:
                </p>

                {/* 6-Point Technical Inspection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "Cleaning condensing unit coils & aluminum fins",
                    "Checking compressor amp draw & voltage stability",
                    "Oiling fan motors & bearing lubrication where applicable",
                    "Inspecting & aligning drive belts and pulleys",
                    "Calibrating system operating pressures (high/low)",
                    "Verifying supply & return delta temperatures against specs",
                  ].map((task, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#F4F8FB] border border-[#E2E8F0] rounded-xl flex items-start gap-3 shadow-2xs hover:border-[#133256]/30 transition-colors"
                    >
                      <CheckCircle weight="fill" size={18} className="text-[#F1171E] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[#133256] leading-snug">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#133256] text-white font-bold text-xs sm:text-sm hover:bg-[#0B1E34] transition-colors"
                  >
                    <span>Request Preventative Maintenance Plan</span>
                    <ArrowRight weight="bold" size={16} />
                  </Link>
                  <a
                    href={`tel:${COMPANY.phones[0].raw}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256] font-bold text-xs sm:text-sm hover:bg-white transition-colors"
                  >
                    <Phone weight="fill" size={16} className="text-[#F1171E]" />
                    <span>Speak to Service Engineer</span>
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Refrigerant & Thermodynamic Health Card */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.15}>
                <div className="bg-[#133256] text-white rounded-3xl p-6 sm:p-8 border border-[#133256] shadow-xl relative overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F1171E]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F1171E] text-white flex items-center justify-center shadow-md">
                      <Gauge weight="fill" size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F1171E] bg-white/10 px-2 py-0.5 rounded">
                        THERMODYNAMIC SPECIFICATION
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1">
                        Refrigerant Charge & Efficiency
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Maintaining the exact refrigerant charge is critical for cooling efficiency and equipment longevity. An incorrect charge forces compressors to draw excessive current, shortens component lifespans, and inflates commercial power costs by up to 30%.
                  </p>

                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3 mb-6">
                    <div className="flex items-center gap-2.5 text-xs text-gray-200">
                      <ThermometerCold weight="fill" size={16} className="text-[#F1171E]" />
                      <span>Electronic halogen & ultrasonic leak inspection</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-gray-200">
                      <Gauge weight="fill" size={16} className="text-[#F1171E]" />
                      <span>Precision micron vacuum holding & moisture removal</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-gray-200">
                      <ShieldCheck weight="fill" size={16} className="text-[#F1171E]" />
                      <span>OEM-specified superheat & sub-cooling calibration</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400">Emergency Leak Detection?</span>
                    <a
                      href={`tel:${COMPANY.phones[0].raw}`}
                      className="font-bold text-[#F1171E] hover:underline flex items-center gap-1"
                    >
                      Call Technician <ArrowRight size={14} weight="bold" />
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. EMERGENCY CTA SECTION ─── */}
      <div className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyCTA />
        </div>
      </div>
    </>
  );
}
