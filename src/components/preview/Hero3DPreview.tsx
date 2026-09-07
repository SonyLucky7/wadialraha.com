"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  ArrowRight,
  Lightning,
  Gear,
  Clock,
  ArrowsClockwise,
  CheckCircle,
  Eye,
  Sliders,
  Sparkle,
  Phone,
  Warning,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

interface StepDetail {
  step: number;
  id: string;
  name: string;
  pinLabel: string;
  description: string;
  position: { top: string; left: string };
  color: string;
  badge: string;
}

const COOLING_STEPS: StepDetail[] = [
  {
    step: 1,
    id: "intake",
    name: "Intake",
    pinLabel: "Air Intake",
    description: "Warm indoor air is drawn in through the top filtration grill.",
    position: { top: "18%", left: "42%" },
    color: "#38BDF8",
    badge: "Stage 01",
  },
  {
    step: 2,
    id: "cooling",
    name: "Cooling",
    pinLabel: "Evaporator Coil",
    description: "Absorbs heat from indoor air as cold liquid refrigerant boils into vapor.",
    position: { top: "14%", left: "55%" },
    color: "#00E5FF",
    badge: "Stage 02",
  },
  {
    step: 3,
    id: "compression",
    name: "Compression",
    pinLabel: "Compressor",
    description: "Increases refrigerant pressure and temperature, circulating it through the cycle.",
    position: { top: "14%", left: "75%" },
    color: "#F1171E",
    badge: "Stage 03",
  },
  {
    step: 4,
    id: "heat-release",
    name: "Heat Release",
    pinLabel: "Condenser Coil",
    description: "Releases heat to the outside atmosphere, turning high-pressure vapor to liquid.",
    position: { top: "60%", left: "62%" },
    color: "#FF9900",
    badge: "Stage 04",
  },
  {
    step: 5,
    id: "cool-air",
    name: "Cool Air",
    pinLabel: "Cool Air Output",
    description: "Delivers crisp, purified cool air uniformly across your living space.",
    position: { top: "66%", left: "83%" },
    color: "#00F0FF",
    badge: "Stage 05",
  },
];

export default function Hero3DPreview() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [tiltEnabled, setTiltEnabled] = useState<boolean>(true);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [imageVariant, setImageVariant] = useState<"clean-8k" | "reference">("clean-8k");

  const currentStep = COOLING_STEPS[activeStepIndex];

  // Auto-play the cooling process journey like a 3D animated video
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % COOLING_STEPS.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  return (
    <div className="min-h-screen bg-[#071322] text-white pt-24 pb-20 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Preview Control & Approval Bar */}
        <div className="bg-[#0B1E34] border border-[#133256] rounded-2xl p-4 sm:p-5 mb-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F1171E] animate-ping" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F1171E]">
                3D AC SYSTEM HERO VIDEO SIMULATION • CLIENT PREVIEW
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Interactive 3D Cutaway & Cooling Process Video
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
            {/* Image Variant Selector */}
            <div className="bg-[#071322] p-1 rounded-xl border border-white/10 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setImageVariant("clean-8k")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  imageVariant === "clean-8k"
                    ? "bg-[#F1171E] text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Pristine 8K Clean Render
              </button>
              <button
                type="button"
                onClick={() => setImageVariant("reference")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  imageVariant === "reference"
                    ? "bg-[#F1171E] text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Exact Reference Image
              </button>
            </div>

            {/* Tilt Control */}
            <button
              type="button"
              onClick={() => setTiltEnabled(!tiltEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                tiltEnabled
                  ? "bg-[#133256] border-cyan-400 text-cyan-300"
                  : "bg-[#071322] border-white/10 text-gray-400"
              }`}
            >
              360° Tilt: {tiltEnabled ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        {/* ─── MAIN HERO SECTION (Pixel-Perfect Matching Your Reference) ─── */}
        <section
          className="relative min-h-[720px] lg:min-h-[820px] rounded-3xl overflow-hidden border border-white/15 bg-[#081524] shadow-2xl flex flex-col justify-between"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
        >
          {/* Background 3D Image Layer with Smooth Camera Tilt */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="relative w-full h-full"
              animate={
                tiltEnabled
                  ? {
                      scale: 1.04,
                      x: `${mouseOffset.x}px`,
                      y: `${mouseOffset.y}px`,
                    }
                  : { scale: 1, x: 0, y: 0 }
              }
              transition={{ type: "spring", damping: 30, stiffness: 90 }}
            >
              <Image
                src={
                  imageVariant === "clean-8k"
                    ? "/images/hero/ac-3d-livingroom-clean.jpg"
                    : "/images/hero/ac-3d-reference.jpg"
                }
                alt="3D AC Cutaway in Penthouse Living Room"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center filter contrast-105 saturate-110"
              />
            </motion.div>

            {/* Cinematic Gradient Overlays for Zero-Pixel-Loss Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#071322]/60 to-transparent w-full lg:w-[65%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/50" />

            {/* Glowing animated cooling air beam */}
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* ─── INTERACTIVE 3D CALLOUT PINS (Only shown on clean render) ─── */}
          {imageVariant === "clean-8k" && (
            <div className="absolute inset-0 pointer-events-none z-20">
              {COOLING_STEPS.map((s, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <div
                    key={s.id}
                    className="absolute transition-all duration-500 pointer-events-auto cursor-pointer"
                    style={{ top: s.position.top, left: s.position.left }}
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsPlaying(false);
                    }}
                  >
                    {/* Pin Beacon */}
                    <div className="relative flex items-center justify-center group">
                      {isActive && (
                        <motion.span
                          className="absolute w-10 h-10 rounded-full bg-cyan-400/40"
                          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-extrabold text-xs shadow-lg transition-transform duration-300 ${
                          isActive
                            ? "bg-white text-[#0B1E34] ring-4 ring-cyan-400 scale-110"
                            : "bg-[#0B1E34]/80 text-white border border-white/40 hover:scale-105"
                        }`}
                      >
                        {s.step}
                      </div>

                      {/* Tooltip Card */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-[#0B1E34]/95 backdrop-blur-md rounded-2xl border border-white/20 p-3.5 shadow-2xl text-left pointer-events-none z-30"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                                {s.badge}
                              </span>
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            </div>
                            <h4 className="font-bold text-sm text-white">{s.pinLabel}</h4>
                            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                              {s.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── HERO CONTENT LAYER (LEFT COLUMN) ─── */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl pt-16 sm:pt-20">
            {/* Signature Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                PROFESSIONAL HVAC SOLUTIONS
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]"></span>
            </div>

            {/* Exact Reference Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.12]">
              Cooler Spaces <br />
              <span className="text-[#C9A227] sm:text-[#C9A227] drop-shadow-sm">Happier</span> Lives
            </h1>

            {/* Supporting Value Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              WADI AL RAHA provides professional air conditioning, cooling, electrical and plumbing services across the UAE with fast response and reliable support.
            </p>

            {/* 3 Reference Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227]/20 flex items-center justify-center text-[#C9A227] shrink-0">
                  <Lightning weight="bold" size={18} />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Fast Response</div>
                  <div className="text-[10px] text-gray-400">Under 60 Mins</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227]/20 flex items-center justify-center text-[#C9A227] shrink-0">
                  <Gear weight="bold" size={18} />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Competitive</div>
                  <div className="text-[10px] text-gray-400">Fair Pricing</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227]/20 flex items-center justify-center text-[#C9A227] shrink-0">
                  <Clock weight="bold" size={18} />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">24/7 Service</div>
                  <div className="text-[10px] text-gray-400">Emergency Desk</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-[#C9A227] text-[#0B1220] font-extrabold rounded-xl hover:bg-[#B8911F] transition-all shadow-lg hover:shadow-yellow-500/20 text-sm sm:text-base whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight weight="bold" size={18} />
              </Link>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap backdrop-blur-sm"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                  {isPlaying ? <Pause weight="fill" size={14} /> : <Play weight="fill" size={14} />}
                </div>
                <span>{isPlaying ? "Pause AC Video" : "Watch How AC Works"}</span>
              </button>
            </div>
          </div>

          {/* ─── BOTTOM COOLING PROCESS VIDEO TIMELINE CONTROLLER ─── */}
          <div className="relative z-20 m-4 sm:m-6 p-4 sm:p-5 rounded-2xl bg-[#0B1E34]/90 backdrop-blur-md border border-white/15 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Play/Pause Controller & Title */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-[#C9A227] text-[#0B1220] flex items-center justify-center hover:scale-105 transition-transform shrink-0 shadow-lg"
                  title={isPlaying ? "Pause simulation" : "Play simulation"}
                >
                  {isPlaying ? (
                    <Pause weight="fill" size={20} />
                  ) : (
                    <Play weight="fill" size={20} className="translate-x-0.5" />
                  )}
                </button>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white">
                    See the Cooling Process
                  </h4>
                  <p className="text-xs text-gray-400">
                    Explore the journey of air inside your AC ({currentStep.pinLabel})
                  </p>
                </div>
              </div>

              {/* Center: 5-Stage Step Progress Bar (Matches Reference) */}
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between relative">
                  {/* Background Track Line */}
                  <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-white/15" />

                  {/* Active Progress Fill */}
                  <div
                    className="absolute top-1/2 left-4 -translate-y-1/2 h-[2px] bg-[#C9A227] transition-all duration-500"
                    style={{
                      width: `${(activeStepIndex / (COOLING_STEPS.length - 1)) * 90}%`,
                    }}
                  />

                  {/* 5 Step Indicator Dots */}
                  {COOLING_STEPS.map((step, idx) => {
                    const isStepActive = idx === activeStepIndex;
                    const isCompleted = idx <= activeStepIndex;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => {
                          setActiveStepIndex(idx);
                          setIsPlaying(false);
                        }}
                        className="relative z-10 flex flex-col items-center group cursor-pointer"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                            isStepActive
                              ? "bg-[#C9A227] text-[#0B1E34] ring-4 ring-[#C9A227]/30 scale-125"
                              : isCompleted
                              ? "bg-white text-[#0B1E34]"
                              : "bg-[#071322] text-gray-400 border border-white/20 group-hover:border-white/50"
                          }`}
                        >
                          0{step.step}
                        </div>
                        <span
                          className={`text-[11px] font-semibold mt-1.5 transition-colors whitespace-nowrap ${
                            isStepActive
                              ? "text-[#C9A227] font-bold"
                              : "text-gray-400 group-hover:text-gray-200"
                          }`}
                        >
                          {step.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: 360 Interactive Model Badge */}
              <div className="lg:col-span-2 flex items-center justify-start lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-white/10 text-xs">
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 font-bold text-[11px]">
                  360°
                </div>
                <div>
                  <span className="font-bold text-white block text-xs">Interactive 3D</span>
                  <span className="text-[10px] text-gray-400 block">Rotate • Explore</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── APPROVAL / NEXT ACTIONS CARD ─── */}
        <div className="mt-8 bg-[#0B1E34] border border-[#133256] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F1171E] block mb-1.5">
              READY FOR HOMEPAGE INTEGRATION
            </span>
            <h3 className="text-xl font-extrabold text-white mb-2">
              Does this 3D AC Cutaway & Video Simulation match your vision?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Upon your confirmation, I will transfer this exact 3D hero experience directly into the live homepage (<code className="text-[#C9A227]">src/components/home/HeroSection.tsx</code>) with zero pixel loss and smooth 60 FPS animation.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm text-center border border-white/15 transition-colors"
            >
              Current Homepage
            </Link>
            <a
              href="#approved"
              onClick={(e) => {
                e.preventDefault();
                alert("Approved! Let your assistant know to apply this hero section to your live homepage.");
              }}
              className="px-6 py-3 rounded-xl bg-[#F1171E] hover:bg-[#D61218] text-white font-bold text-xs sm:text-sm text-center shadow-lg transition-colors whitespace-nowrap"
            >
              Approve for Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
