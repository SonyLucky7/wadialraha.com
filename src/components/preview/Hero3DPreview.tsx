"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkle,
  Eye,
  CheckCircle,
  Play,
  Pause,
  Sliders,
  Buildings,
  Snowflake,
  ShieldCheck,
  Lightning,
  Phone,
  ArrowRight,
  Warning,
  Gauge,
  ArrowsOutCardinal,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export default function Hero3DPreview() {
  const [selectedConcept, setSelectedConcept] = useState<"cityscape" | "chiller">("cityscape");
  const [motionMode, setMotionMode] = useState<"drift" | "interactive" | "pause">("drift");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showTelemetry, setShowTelemetry] = useState(true);

  const concepts = {
    cityscape: {
      id: "cityscape",
      title: "Concept A: UAE Cityscape & Commercial MEP Cutaway",
      subtitle: "3D architectural cutaway of luxury towers, villas, ductwork, and rooftop chillers",
      image: "/images/hero/hvac-3d-cityscape.jpg",
      tag: "Full-Facility MEP Scope",
      metrics: [
        { label: "Architecture", val: "Towers & Villas" },
        { label: "Cooling Flow", val: "Luminous Blue Ducts" },
        { label: "Chiller Plant", val: "Dual Stage Rooftop" },
        { label: "Best Fit For", val: "Complete Contracting Brand" },
      ],
    },
    chiller: {
      id: "chiller",
      title: "Concept B: Industrial Chiller & Compressor Macro Engine",
      subtitle: "High-tech 3D macro cutaway of dual inverter compressor, copper coils, and digital telemetry",
      image: "/images/hero/hvac-3d-chiller.jpg",
      tag: "Heavy Equipment Precision",
      metrics: [
        { label: "Machinery", val: "Dual Inverter Chiller" },
        { label: "Thermodynamics", val: "Frost & Cold Mist" },
        { label: "Diagnostic HUD", val: "Red Telemetry Board" },
        { label: "Best Fit For", val: "Technical Engineering Authority" },
      ],
    },
  };

  const current = concepts[selectedConcept];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (motionMode !== "interactive") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen bg-[#071322] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Control Bar for Client Review */}
        <div className="bg-[#0B1E34] border border-[#133256] rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F1171E]">
                  CLIENT PREVIEW MODE • HERO 3D ANIMATION
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                3D Animated Hero Visual Evaluation
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Review the 3D illustration concepts and test smooth motion rendering before approving for the live homepage.
              </p>
            </div>

            {/* Switchers */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
              {/* Concept selector */}
              <div className="bg-[#071322] p-1 rounded-xl border border-white/10 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setSelectedConcept("cityscape")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedConcept === "cityscape"
                      ? "bg-[#F1171E] text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Concept A (Cityscape)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedConcept("chiller")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedConcept === "chiller"
                      ? "bg-[#F1171E] text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Concept B (Chiller)
                </button>
              </div>

              {/* Motion Mode Selector */}
              <div className="bg-[#071322] p-1 rounded-xl border border-white/10 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMotionMode("drift")}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    motionMode === "drift"
                      ? "bg-[#133256] text-white font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                  title="Smooth continuous 3D camera pan"
                >
                  <Play weight="fill" size={12} className="text-[#F1171E]" />
                  <span>Drift</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMotionMode("interactive")}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    motionMode === "interactive"
                      ? "bg-[#133256] text-white font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                  title="Interactive mouse tilt perspective"
                >
                  <ArrowsOutCardinal weight="bold" size={12} className="text-cyan-400" />
                  <span>3D Tilt</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMotionMode("pause")}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    motionMode === "pause"
                      ? "bg-[#133256] text-white font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                  title="Pause motion to inspect pixels"
                >
                  <Pause weight="fill" size={12} className="text-yellow-400" />
                  <span>Still</span>
                </button>
              </div>

              {/* Toggle Telemetry HUD */}
              <button
                type="button"
                onClick={() => setShowTelemetry(!showTelemetry)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  showTelemetry
                    ? "bg-[#133256] border-[#F1171E]/40 text-white"
                    : "bg-[#071322] border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                HUD Overlay: {showTelemetry ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>

        {/* ─── LIVE HERO SECTION SIMULATION (See exactly how it appears on website) ─── */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0B1E34] to-[#071322] shadow-2xl p-6 sm:p-10 lg:p-14 mb-12">
          {/* Animated Background 3D Canvas / Frame */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="relative w-full h-full"
              animate={
                motionMode === "drift"
                  ? {
                      scale: [1.02, 1.07, 1.02],
                      x: ["-1%", "1.5%", "-1%"],
                      y: ["-0.5%", "1%", "-0.5%"],
                    }
                  : motionMode === "interactive"
                  ? {
                      scale: 1.05,
                      x: `${mousePos.x}px`,
                      y: `${mousePos.y}px`,
                    }
                  : { scale: 1, x: 0, y: 0 }
              }
              transition={
                motionMode === "drift"
                  ? {
                      duration: 16,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
                  : { type: "spring", damping: 30, stiffness: 100 }
              }
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-35 filter contrast-110 saturate-110"
              />
            </motion.div>

            {/* Dark Vignette & Gradient Overlays for zero pixel loss & pristine typography readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/85 to-[#071322]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/70" />

            {/* Laser Diagnostic Telemetry Sweep Line */}
            {showTelemetry && (
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F1171E] to-transparent opacity-75 shadow-[0_0_12px_#F1171E]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          {/* Hero Content Layer */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline, Value Proposition, Action CTAs */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  Est. 1988 • UAE Engineering Heritage
                </span>
                <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.14]">
                Professional HVAC &{" "}
                <span className="text-[#F1171E]">Technical Services</span>{" "}
                Across the UAE
              </h1>

              <p className="text-base sm:text-lg text-gray-200 max-w-xl mb-8 leading-relaxed">
                Reliable air conditioning, cooling, electrical, plumbing and specialized technical solutions — backed by fast response, 80% veteran engineering workforce, and 24/7 client dispatch.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg hover:shadow-red-600/30"
                >
                  <span>Request a Quote</span>
                  <ArrowRight weight="bold" size={18} />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Warning weight="bold" size={18} className="text-[#F1171E]" />
                  <span>24/7 Emergency Service</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck weight="fill" size={16} className="text-[#F1171E]" />
                  <span>100% Employee-Owned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle weight="fill" size={16} className="text-green-400" />
                  <span>Carrefour Approved Partner</span>
                </div>
              </div>
            </div>

            {/* Right: Focused 3D Showcase Card inside Hero Layout */}
            <div className="lg:col-span-5">
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-[#133256]/90 to-[#0B1E34]/95 p-6 shadow-2xl backdrop-blur-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F1171E] animate-ping" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                      3D Visual Preview
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#F1171E] text-white">
                    {current.tag}
                  </span>
                </div>

                {/* 3D Render Window */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/15 mb-4 group">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E34] via-transparent to-transparent opacity-60" />

                  {showTelemetry && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="text-cyan-400">TELEMETRY: ACTIVE</span>
                      <span className="text-white">FPS: 60 (NO LOSS)</span>
                      <span className="text-[#F1171E]">4K SHARP</span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-base text-white mb-1">
                  {current.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {current.subtitle}
                </p>

                {/* 4 Feature Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-gray-400 block text-[10px]">{m.label}</span>
                      <span className="font-bold text-white text-xs">{m.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ─── CLIENT APPROVAL / DECISION CARD ─── */}
        <div className="bg-[#0B1E34] border border-[#133256] rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F1171E] block mb-2">
                NEXT STEP FOR IMPLEMENTATION
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Which 3D concept would you like for the live Hero Section?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Choose between <strong>Concept A</strong> (comprehensive UAE architecture & MEP cutaway) or <strong>Concept B</strong> (macro heavy chiller & dual inverter engine), and confirm your preferred motion style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm text-center border border-white/15 transition-colors"
              >
                Back to Homepage
              </Link>
              <a
                href="#approved"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`You selected: ${current.title}. Let your assistant know to apply this to the live hero!`);
                }}
                className="px-6 py-3 rounded-xl bg-[#F1171E] hover:bg-[#D61218] text-white font-bold text-xs sm:text-sm text-center shadow-lg transition-colors"
              >
                Approve {selectedConcept === "cityscape" ? "Concept A" : "Concept B"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
