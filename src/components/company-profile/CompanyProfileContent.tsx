"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarBlank,
  UsersThree,
  Wrench,
  Buildings,
  CheckCircle,
  DeviceMobile,
  Quotes,
  MapPin,
  ShieldCheck,
  Briefcase,
  Certificate,
  ArrowRight,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants/company";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function CompanyProfileContent() {
  const [activeEmirate, setActiveEmirate] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");

  // Filter Carrefour Locations
  const filteredCarrefour =
    activeEmirate === "All"
      ? COMPANY.carrefourMaintenance.locations
      : COMPANY.carrefourMaintenance.locations.filter(
          (l) => l.emirate.toLowerCase() === activeEmirate.toLowerCase()
        );

  // Filter Reference Projects
  const filteredProjects =
    projectFilter === "All"
      ? COMPANY.referenceProjects
      : projectFilter === "Royal & Landmark"
      ? COMPANY.referenceProjects.filter(
          (p) =>
            p.client.includes("Sheikh") ||
            p.scope.includes("Palace") ||
            p.scope.includes("Majlis")
        )
      : projectFilter === "Villas"
      ? COMPANY.referenceProjects.filter((p) =>
          p.scope.toLowerCase().includes("villa")
        )
      : COMPANY.referenceProjects.filter(
          (p) =>
            !p.client.includes("Sheikh") &&
            !p.scope.includes("Palace") &&
            !p.scope.toLowerCase().includes("villa")
        );

  return (
    <div className="bg-white">
      {/* ─── 1. HERO & CORPORATE SNAPSHOT ─── */}
      <section className="bg-[#0B1E34] pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 relative overflow-hidden text-white border-b border-[#133256]">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F1171E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#133256]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Company Profile", href: "/company-profile" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                EST. 1988 • OFFICIAL CORPORATE PROFILE
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {COMPANY.legalName}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mb-10">
              Over 35+ years of engineering heritage delivering turnkey HVAC
              contracting, industrial chiller maintenance, cold storage
              facilities, and MEP technical infrastructure across the United
              Arab Emirates.
            </p>
          </div>

          {/* 5-Metric Executive Scorecard */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8 border-t border-white/10">
            {[
              {
                label: "Business Started",
                val: COMPANY.stats.yearStarted,
                sub: "35+ Years in UAE",
                icon: CalendarBlank,
              },
              {
                label: "Satisfied Clients",
                val: COMPANY.stats.satisfiedCustomers,
                sub: "Commercial & Retail",
                icon: UsersThree,
              },
              {
                label: "Total Installations",
                val: COMPANY.stats.installations,
                sub: "AC & Cold Storage",
                icon: Wrench,
              },
              {
                label: "Projects Executed",
                val: COMPANY.stats.projectsCompleted,
                sub: "Landmark Deliveries",
                icon: Buildings,
              },
              {
                label: "Senior Technicians",
                val: COMPANY.stats.veteranWorkforcePct,
                sub: "≥ 10 Yrs Experience",
                icon: Certificate,
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#133256]/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                      {stat.val}
                    </span>
                    <Icon size={22} className="text-[#F1171E] shrink-0" />
                  </div>
                  <div className="text-xs font-bold text-gray-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. EXECUTIVE GOVERNANCE & PROPRIETARY APP ─── */}
      <section className="py-16 lg:py-24 bg-[#F4F8FB] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left: Leadership & Governance Profile */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                  <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                    LEADERSHIP & CORPORATE STRUCTURE
                  </span>
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#133256] mb-6 tracking-tight">
                  Executive Governance & <span className="text-[#F1171E]">Operational Roots</span>
                </h2>

                <div className="prose prose-gray text-base leading-relaxed space-y-4 text-gray-600 mb-8">
                  <p>
                    <strong>Wadi Al Raha Air Conditioning Contracting Est.</strong>{" "}
                    stands as an established benchmark in the UAE cooling and MEP
                    contracting landscape. With our headquarters and main
                    operations anchored in <strong>Al Ain</strong>, our technical
                    portfolio spans complex commercial central plants, retail
                    hypermarket maintenance, and specialized residential palace
                    contracts.
                  </p>
                  <p>
                    Under the visionary chairmanship of{" "}
                    <strong>{COMPANY.chairman}</strong>, the enterprise has
                    grown from its premise establishment at Al-Manaseer in 2009
                    into a trusted multi-emirate engineering contractor.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0]">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Chairman of the Establishment
                    </span>
                    <div className="font-extrabold text-[#133256] text-base">
                      {COMPANY.chairman}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Executive Stewardship & Vision
                    </div>
                  </div>

                  <div className="p-4 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0]">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Operational Headquarters
                    </span>
                    <div className="font-extrabold text-[#133256] text-base">
                      Al-Sanaiyya & Oud Bin Sag-han
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Al Ain 100553, Abu Dhabi, UAE
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
                <span>Premise Origin: Al-Manaseer (2009)</span>
                <span className="font-semibold text-[#133256]">
                  100% Employee-Invested Operational Model
                </span>
              </div>
            </div>

            {/* Right: Technology Advantage - Service Man Mobile App */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#133256] to-[#0B1E34] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#F1171E]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-red-300 mb-6">
                  <DeviceMobile weight="fill" size={16} className="text-[#F1171E]" />
                  Proprietary Digital Dispatch
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                  Modern Technology: <br />
                  <span className="text-[#F1171E]">Service Man App</span>
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {COMPANY.technology.description}
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Instant GPS routing to customer premises across UAE",
                    "Digital checklist for compressor & refrigerant telemetry",
                    "Before & after job photo capture with customer signature",
                    "Preventative maintenance reminders & asset history log",
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-gray-200"
                    >
                      <CheckCircle
                        weight="fill"
                        size={16}
                        className="text-[#F1171E] shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Zero Paper Lag</span>
                <span className="text-white font-bold">Faster Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. PHILOSOPHY, VISION & WORKING COMMITMENTS ─── */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                VALUES THAT DRIVE US
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-4 tracking-tight">
              Philosophy, Vision & <span className="text-[#F1171E]">Commitments</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Built on our bedrock philosophy of <em>&ldquo;{COMPANY.philosophy}&rdquo;</em> and driven by our corporate vision of <em>&ldquo;{COMPANY.vision}&rdquo;</em>
            </p>
          </div>

          {/* 4 Working Approach Commitments */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {COMPANY.commitments.map((comm, idx) => (
              <div
                key={idx}
                className="bg-[#F4F8FB] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#133256]/30 transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#F1171E] font-extrabold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-[#133256] text-lg mb-2">
                  {comm.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {comm.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Core Values Strip */}
          <div className="bg-[#0B1E34] p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F1171E] block mb-1">
                Guiding Principles
              </span>
              <h4 className="text-xl sm:text-2xl font-bold">
                Core Values Embedded in Every Project
              </h4>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-end">
              {COMPANY.values.map((val, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-bold tracking-wide hover:bg-[#F1171E] hover:border-[#F1171E] transition-colors"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. EIGHT CORE SERVICES DETAILED ─── */}
      <section className="py-16 lg:py-24 bg-[#F4F8FB] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  COMPREHENSIVE CAPABILITIES
                </span>
                <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133256] tracking-tight">
                Eight Core Contracting & <span className="text-[#F1171E]">Service Lines</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#133256] hover:text-[#F1171E] font-bold text-xs shadow-sm transition-colors"
            >
              <span>Explore Services Portal</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.services8.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F4F8FB] border border-[#E2E8F0] flex items-center justify-center text-[#133256] group-hover:text-white group-hover:bg-[#F1171E] transition-colors mb-4">
                    <Wrench size={18} weight="bold" />
                  </div>
                  <h3 className="text-lg font-bold text-[#133256] mb-2 group-hover:text-[#F1171E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Technical Scope:
                  </div>
                  <div className="space-y-1.5">
                    {service.scope.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#133256]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F1171E] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. MAJOR CLIENTS & CARREFOUR NETWORK ─── */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                PROVEN TRACK RECORD
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-4 tracking-tight">
              Major Clients & <span className="text-[#F1171E]">Maintenance Portfolio</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Wadi Al Raha is the trusted cooling and technical services partner
              for leading retail giants, royal institutions, colleges, and
              industrial plants across the UAE.
            </p>
          </div>

          {/* Carrefour Feature Box */}
          <div className="bg-gradient-to-br from-[#F4F8FB] to-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#133256] text-white mb-2">
                  Key Account Spotlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#133256]">
                  Carrefour Hypermarkets & Malls Across UAE
                </h3>
                <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                  {COMPANY.carrefourMaintenance.description}
                </p>
              </div>

              {/* Emirate Switcher Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                {[
                  "All",
                  "Al Ain",
                  "Abu Dhabi",
                  "Dubai",
                  "Sharjah",
                  "Ajman",
                  "Umm Al Quwain",
                ].map((em) => (
                  <button
                    key={em}
                    onClick={() => setActiveEmirate(em)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeEmirate.toLowerCase() === em.toLowerCase()
                        ? "bg-[#F1171E] text-white shadow-sm"
                        : "text-gray-600 hover:text-[#133256] hover:bg-gray-50"
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCarrefour.map((loc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-2xs"
                >
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F1171E] mb-3">
                    <MapPin weight="fill" size={15} />
                    <span>{loc.emirate}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.sites.map((site, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-[#F4F8FB] border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#133256]"
                      >
                        {site}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Broader Roster of Commercial & Institutional Clients */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-gray-400 text-center mb-6">
              Institutional, Commercial, Educational & Industrial Clients:
            </h4>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
              {COMPANY.majorClients.map((client, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 bg-[#F4F8FB] rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#133256] hover:border-[#133256]/40 transition-colors"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. REFERENCE PROJECT LIST (18 SAMPLE JOBS) ─── */}
      <section className="py-16 lg:py-24 bg-[#F4F8FB] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  HISTORICAL TRACK RECORD
                </span>
                <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133256] tracking-tight">
                Sample Reference <span className="text-[#F1171E]">Projects</span>
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Selected contract deliveries across royal palaces, residential
                villas, clinical facilities, and commercial complexes.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-white p-1 rounded-xl border border-[#E2E8F0]">
              {[
                "All",
                "Royal & Landmark",
                "Villas",
                "Commercial & Clinics",
              ].map((f) => (
                <button
                  key={f}
                  onClick={() => setProjectFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    projectFilter === f
                      ? "bg-[#133256] text-white shadow-sm"
                      : "text-gray-600 hover:text-[#133256]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Reference Projects Table */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#133256] text-white text-xs uppercase tracking-wider font-bold">
                    <th className="py-4 px-6">No.</th>
                    <th className="py-4 px-6">Scope of Work</th>
                    <th className="py-4 px-6">Client / Authority</th>
                    <th className="py-4 px-6">Location</th>
                    <th className="py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm text-gray-700">
                  {filteredProjects.map((p) => (
                    <tr
                      key={p.sl}
                      className="hover:bg-[#F8FAFC] transition-colors"
                    >
                      <td className="py-4 px-6 font-bold text-[#133256]">
                        {p.sl}
                      </td>
                      <td className="py-4 px-6 font-semibold text-[#133256]">
                        {p.scope}
                      </td>
                      <td className="py-4 px-6 text-gray-600">{p.client}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 font-medium text-gray-500">
                          <MapPin size={13} className="text-[#F1171E]" />
                          {p.location}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256]">
                          <CheckCircle
                            size={13}
                            weight="fill"
                            className="text-green-600"
                          />
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. ORGANIZATION & VETERAN TECHNICAL TEAM ─── */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                HUMAN CAPITAL & EXPERTISE
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-4 tracking-tight">
              Organizational Leadership & <span className="text-[#F1171E]">Key Specialists</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Over <strong>80% of our employees possess at least 10 years</strong>{" "}
              of hands-on HVAC contracting, heavy chiller maintenance, and MEP
              execution experience in the Gulf region.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY.teamLeadership.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#F4F8FB] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#133256]/30 transition-all flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F1171E] bg-white px-2.5 py-1 rounded-lg border border-[#E2E8F0]">
                      {member.experience} Experience
                    </span>
                    <Briefcase size={18} className="text-[#133256]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#133256]">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-gray-500 mt-0.5 mb-3">
                    {member.designation}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] text-xs text-gray-600">
                  <span className="font-bold text-[#133256]">
                    Core Discipline:
                  </span>{" "}
                  {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CLIENT TESTIMONIALS ─── */}
      <section className="py-16 lg:py-24 bg-[#0B1E34] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                VERIFIED FEEDBACK
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              What Our <span className="text-[#F1171E]">Clients Say</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Direct praise from commercial partners and studio founders who rely
              on Wadi Al Raha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {COMPANY.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#133256]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-xl relative"
              >
                <Quotes
                  weight="fill"
                  size={36}
                  className="text-[#F1171E] opacity-70 mb-4"
                />
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-base">{t.author}</h5>
                    <p className="text-xs text-gray-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-green-400 bg-green-950/60 border border-green-800/40 px-2.5 py-1 rounded-full">
                    Verified Client
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CALL TO ACTION & PRE-QUALIFICATION ─── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#133256] via-[#0B1E34] to-[#133256] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#F1171E] block mb-2">
                Procurement & Tenders
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                Need Our Pre-Qualification Dossier or Formal Proposal?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We provide complete corporate registration, trade licenses,
                insurance certificates, and references for developers,
                facilities managers, and general contractors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/pre-qualification"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#F1171E] hover:bg-[#D61218] text-white font-bold text-sm shadow-md transition-all text-center"
              >
                Request Pre-Qualification
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all text-center"
              >
                Contact Engineering Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
