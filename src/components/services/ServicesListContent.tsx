"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Snowflake,
  Fan,
  Wind,
  Lightning,
  Thermometer,
  ArrowRight,
  Phone,
  CheckCircle,
  ShieldCheck,
  Wrench,
  Buildings,
  Clock,
  Briefcase,
  UsersThree,
} from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { COMPANY } from "@/lib/constants/company";

// Extended rich service data merging core services with technical contracting data
interface ExtendedService {
  id: string;
  number: string;
  slug: string;
  category: "Cooling & Chillers" | "Cold Chain & Ice" | "MEP & Infrastructure";
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
  equipment: string[];
  audiences: string[];
  icon: React.ElementType;
  badge: string;
}

const EXTENDED_SERVICES: ExtendedService[] = [
  {
    id: "central-ac",
    number: "01",
    slug: "central-ac",
    category: "Cooling & Chillers",
    title: "Central AC Plants Erection, Repair & Overhauls",
    subtitle: "Large-Scale Commercial & Industrial Chillers",
    description:
      "Turnkey central chiller plant erection, air-cooled and water-cooled chiller overhaul, tube cleaning, compressor rebuilds, and preventative maintenance for massive cooling infrastructures.",
    scope: [
      "Chiller plant erection and precision commissioning",
      "Eddy current tube testing & descaling",
      "Heavy semi-hermetic compressor rebuilds",
      "VAV & AHU mechanical airflow balancing",
    ],
    equipment: ["Centrifugal Chillers", "Screw Chillers", "AHU / FCU Networks", "Cooling Towers"],
    audiences: ["Commercial Towers", "Shopping Malls", "Hotels & Resorts", "Industrial Plants"],
    icon: Snowflake,
    badge: "Heavy Industrial HVAC",
  },
  {
    id: "package-ac",
    number: "02",
    slug: "package-ac",
    category: "Cooling & Chillers",
    title: "Package AC Systems Installation & Repair",
    subtitle: "Rooftop Packaged Units & Heat Pumps",
    description:
      "Expert installation, preventative maintenance, and emergency compressor rebuilds for rooftop packaged air conditioners, packaged heat pumps, and commercial gas-electric units across the UAE.",
    scope: [
      "Rooftop package unit rigging & installation",
      "Compressor replacement & electrical contactors",
      "Condenser coil chemical washing & fin restoration",
      "Duct transition sealing and damper adjustment",
    ],
    equipment: ["Rooftop Packaged Units", "Ducted Heat Pumps", "Gas-Electric Units", "Supply Plenums"],
    audiences: ["Supermarkets", "Showrooms", "Warehouses", "Commercial Offices"],
    icon: Fan,
    badge: "Commercial Packaged",
  },
  {
    id: "split-ac",
    number: "03",
    slug: "split-ac",
    category: "Cooling & Chillers",
    title: "Split & Ducted Inverter AC Installation & Repair",
    subtitle: "Precision Cooling for Villas & Commercial Spaces",
    description:
      "Factory-standard split, cassette, and ductable AC installation and diagnostic repairs. Handled by veteran technicians to permanently eliminate refrigerant leakage, repeat compressor tripping, and vibration.",
    scope: [
      "Dual Inverter split unit installation",
      "Pressure holding & high-vacuum pump evacuation",
      "Cassette & concealed ducted AC retrofitting",
      "Digital electronic expansion valve diagnostics",
    ],
    equipment: ["Dual Inverter ACs", "Concealed Ducted Units", "Cassette Systems", "Multi-Split VRF"],
    audiences: ["Residential Villas", "Luxury Palaces", "Offices", "Retail Outlets"],
    icon: Wind,
    badge: "Residential & Commercial",
  },
  {
    id: "cold-store",
    number: "04",
    slug: "cold-store",
    category: "Cold Chain & Ice",
    title: "Cold Storage Installation, Refurbishment & Repair",
    subtitle: "Blast Freezers, Walk-In Rooms & Refrigeration Plants",
    description:
      "Comprehensive design, erection, PIR insulated panel installation, hermetic doors, refrigeration condensing units, and blast freezer systems for hypermarkets, poultry farms, and food distribution.",
    scope: [
      "PIR / Polyurethane insulated cold room panels",
      "Blast freezer & chiller condensing units",
      "Hermetic sliding doors, heaters, and tracks",
      "Microprocessor temperature controllers & alarms",
    ],
    equipment: ["Walk-in Coolers", "Blast Freezers", "Holding Freezers", "Insulated Cold Doors"],
    audiences: ["Food & Beverage", "Poultry & Meat Plants", "Hypermarket Chains", "Pharma Logistics"],
    icon: Thermometer,
    badge: "Cold Chain Logistics",
  },
  {
    id: "ice-machine",
    number: "05",
    slug: "ice-machine",
    category: "Cold Chain & Ice",
    title: "Commercial Ice Machine Systems",
    subtitle: "Industrial Flake, Cube & Scale Ice Makers",
    description:
      "Certified installation, sanitization, and electro-mechanical repairs for commercial and industrial ice makers, including Scotsman and major global refrigeration brands.",
    scope: [
      "Commercial ice machine installation & leveling",
      "Multi-stage water filtration & scale inhibitor setups",
      "Evaporator grid descaling & sanitization cycles",
      "Hot-gas defrost valve and water pump rebuilds",
    ],
    equipment: ["Cube Ice Makers", "Flake Ice Machines", "Storage Bins", "Water Filter Systems"],
    audiences: ["Hotels & Resorts", "Fisheries & Markets", "Hospitals & Labs", "Commercial Kitchens"],
    icon: Snowflake,
    badge: "Commercial Foodservice",
  },
  {
    id: "electrical-plumbing",
    number: "06",
    slug: "electrical-plumbing",
    category: "MEP & Infrastructure",
    title: "Electrical, Plumbing & Infrastructure Contracting",
    subtitle: "Integrated MEP Infrastructure Support",
    description:
      "High-reliability electrical distribution, control panel wiring, booster pumps, sanitary drainage, and integrated facility MEP engineering delivered with strict compliance to UAE municipal standards.",
    scope: [
      "Main distribution boards (MDB/SMDB) & control wiring",
      "Chilled water booster & circulation pump overhauls",
      "PPR / PEX sanitary plumbing & drainage works",
      "Emergency electrical fault finding & power balancing",
    ],
    equipment: ["Electrical Control Panels", "Chilled Water Pumps", "Booster Sets", "Sanitary Networks"],
    audiences: ["Commercial Buildings", "Industrial Plants", "Educational Campuses", "Government Complexes"],
    icon: Lightning,
    badge: "Turnkey MEP Works",
  },
];

export default function ServicesListContent() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredServices =
    activeTab === "All"
      ? EXTENDED_SERVICES
      : EXTENDED_SERVICES.filter((s) => s.category === activeTab);

  return (
    <div className="bg-white">
      {/* ─── 1. HERO SECTION WITH SIGNATURE HEADINGS & STATS ─── */}
      <section className="bg-[#0B1E34] py-20 lg:py-28 relative overflow-hidden text-white border-b border-[#133256]">
        {/* Ambient glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F1171E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#133256]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />

          <motion.div
            className="mt-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Signature Red Flanking Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                OUR CORE CAPABILITIES & ENGINEERING SOLUTIONS
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Turnkey HVAC & Technical{" "}
              <span className="text-[#F1171E]">Contracting Services</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mb-10">
              Over 35+ years of specialized engineering across the United Arab Emirates. From heavy central chiller plant erection and commercial cold rooms to precision split inverter systems and full-facility MEP maintenance.
            </p>
          </motion.div>

          {/* 4-Stat Metric Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {[
              { label: "Engineering Heritage", val: "35+ Years", sub: "Established in 1988" },
              { label: "Installations Executed", val: "1,000+", sub: "Chillers & Cold Stores" },
              { label: "Landmark Projects", val: "417+", sub: "UAE Government & Retail" },
              { label: "Senior Technicians", val: "80%", sub: "≥10 Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#133256]/50 backdrop-blur-md p-5 rounded-2xl border border-white/10"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-[#F1171E] uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. INTERACTIVE SERVICE DIRECTORY & FILTER TABS ─── */}
      <section className="py-20 lg:py-28 bg-[#F4F8FB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading matching the screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                SPECIALIZED ENGINEERING SCOPES
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#133256] mb-5 tracking-tight">
              Explore Our Core <span className="text-[#F1171E]">Service Divisions</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Select an engineering division below to view technical scopes, specialized equipment handled, and targeted sector solutions.
            </p>

            {/* Filter Switcher Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 bg-white p-2 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-2xl mx-auto">
              {[
                "All",
                "Cooling & Chillers",
                "Cold Chain & Ice",
                "MEP & Infrastructure",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === tab
                      ? "bg-[#133256] text-white shadow-sm"
                      : "text-gray-600 hover:text-[#133256] hover:bg-gray-50"
                  }`}
                >
                  {tab === "All" ? "All Divisions" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Redesigned Service Cards Grid ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComp = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#133256]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 relative"
                >
                  {/* Subtle top accent highlight */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#133256] to-[#F1171E] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-8 relative">
                    {/* Watermark Number */}
                    <span className="absolute top-6 right-6 text-6xl font-extrabold text-gray-100 group-hover:text-[#F1171E]/10 transition-colors pointer-events-none select-none">
                      {service.number}
                    </span>

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4F8FB] border border-[#E2E8F0] text-[#133256] mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F1171E]" />
                      {service.badge}
                    </div>

                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F8FB] border border-[#E2E8F0] flex items-center justify-center mb-6 group-hover:bg-[#133256] text-[#133256] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComp size={28} weight="duotone" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-extrabold text-[#133256] group-hover:text-[#F1171E] transition-colors duration-300 mb-1 leading-snug">
                      {service.title}
                    </h3>
                    <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                      {service.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Technical Scope Checklist */}
                    <div className="mb-6 pt-5 border-t border-[#E2E8F0]/70">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Core Technical Scopes:
                      </div>
                      <ul className="space-y-2">
                        {service.scope.map((s, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#133256] font-medium">
                            <CheckCircle weight="fill" size={15} className="text-[#F1171E] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment Handled Tags */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Equipment Handled:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.equipment.map((eq, eIdx) => (
                          <span
                            key={eIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-semibold text-gray-600"
                          >
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-8 py-5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#133256] group-hover:text-[#F1171E] transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight weight="bold" size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={`tel:${COMPANY.phones[0].raw}`}
                      className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#133256] hover:text-white hover:bg-[#F1171E] hover:border-[#F1171E] transition-all shadow-2xs"
                      title="Call Dispatch"
                    >
                      <Phone weight="fill" size={15} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 3. EQUIPMENT & OEM BRAND MASTERY ─── */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Technology & Field Diagnostics */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  PROPRIETARY DIGITAL DISPATCH
                </span>
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133256] mb-5 tracking-tight">
                Precision Diagnostics & <span className="text-[#F1171E]">Field Telemetry</span>
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Every service call, scheduled overhaul, or emergency repair is coordinated via our in-house <strong>&ldquo;Service Man&rdquo;</strong> mobile application. Technicians log live compressor amp draws, refrigerant pressures, and temperature differentials before and after service.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "SLA Dispatch Tracking", desc: "Real-time fleet GPS routing across all 7 Emirates" },
                  { title: "OEM Spare Parts", desc: "Genuine factory compressors, coils & electronic boards" },
                  { title: "Digital Telemetry Logs", desc: "Before & after diagnostic data with client signature" },
                  { title: "Preventative AMC", desc: "Scheduled periodic filter, coil & electrical checks" },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-[#F4F8FB] rounded-2xl border border-[#E2E8F0]">
                    <div className="text-sm font-bold text-[#133256] mb-1">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#133256] hover:text-[#F1171E] transition-colors"
              >
                <span>Read more about our Employee-Owned Approach</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right: Key Accounts & Client Endorsements Card */}
            <div className="lg:col-span-6 bg-[#0B1E34] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#F1171E]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-red-300 mb-6">
                <ShieldCheck weight="fill" size={15} className="text-[#F1171E]" />
                Contracting Portfolios
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Trusted Across 25+ Hypermarkets & Landmark Facilities
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Wadi Al Raha is the proven cooling and technical maintenance contractor for <strong>Carrefour UAE</strong> (Al Jimi Mall, Al Bawadi Mall, Mirdif, Marina Crown, City Centre Sharjah, etc.), <strong>HH Presidential Palace Works</strong>, <strong>Brighton College</strong>, and commercial facilities.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Carrefour UAE Network Maintenance across 6 Emirates",
                  "Royal Palaces, Majlises & High-Profile Executive Villas",
                  "Educational Campuses & Aviation Flight Academies",
                  "Commercial Poultry Plants & Food Logistics Freezers",
                ].map((cli, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle weight="fill" size={16} className="text-[#F1171E] shrink-0" />
                    <span>{cli}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/company-profile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F1171E] hover:bg-[#D61218] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>View 18 Reference Projects</span>
                  <ArrowRight size={13} />
                </Link>

                <Link
                  href="/pre-qualification"
                  className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
                >
                  Request Pre-Qualification Package &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. SIGNATURE EMERGENCY SUPPORT SECTION ─── */}
      <section className="py-16 lg:py-24 bg-[#0B1E34] text-white relative overflow-hidden border-t border-[#133256]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="max-w-3xl mx-auto mb-10">
            {/* Signature Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                24/7 RAPID RESPONSE DISPATCH
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Need Immediate On-Site <span className="text-[#F1171E]">HVAC Support?</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              When emergency cooling failures threaten commercial operations, residents, or perishable goods in the UAE heat, our mobile technical fleet deploys immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-extrabold text-white bg-[#F1171E] hover:bg-[#D61218] transition-colors rounded-xl shadow-lg hover:shadow-xl"
            >
              <Phone weight="fill" size={18} />
              <span>Call Dispatch: {COMPANY.phones[0].number}</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-xl"
            >
              <span>Submit Formal Inquiry</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-gray-400">
            <Clock weight="fill" size={14} className="text-[#F1171E]" />
            <span>Average On-Site Response Time: Under 60 Minutes in Al Ain & Major UAE Districts</span>
          </div>

        </div>
      </section>
    </div>
  );
}
