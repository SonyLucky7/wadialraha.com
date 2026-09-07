"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
  Phone,
  Eye,
  Sliders,
  Warning,
  ArrowsClockwise,
  CheckCircle,
  Snowflake,
  Fire,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

// ─── 5-STAGE WORKING FLOW CONSTANTS ───
interface FlowStep {
  step: number;
  id: string;
  name: string;
  label: string;
  shortDesc: string;
  fullDesc: string;
  focusArea: { top: string; left: string };
  energyType: "warm" | "cooling" | "circulation" | "heat" | "output";
}

const FLOW_STEPS: FlowStep[] = [
  {
    step: 1,
    id: "intake",
    name: "AIR INTAKE",
    label: "Warm Air Intake",
    shortDesc: "Warm indoor air enters",
    fullDesc:
      "Warm, humid ambient air from the room is drawn through the top intake louvers and multi-stage antimicrobial dust filter.",
    focusArea: { top: "18%", left: "34%" },
    energyType: "warm",
  },
  {
    step: 2,
    id: "cooling",
    name: "COOLING",
    label: "Evaporator Coil",
    shortDesc: "Heat is absorbed during cooling",
    fullDesc:
      "Sub-cooled liquid refrigerant boils within hydrophilic micro-grooved copper fins, absorbing latent indoor heat instantly.",
    focusArea: { top: "28%", left: "34%" },
    energyType: "cooling",
  },
  {
    step: 3,
    id: "circulation",
    name: "AIR CIRCULATION",
    label: "Turbine Blower",
    shortDesc: "Conditioned air is circulated",
    fullDesc:
      "The aerodynamic cross-flow blower fan accelerates the chilled air quietly through sound-dampened acoustic chambers.",
    focusArea: { top: "32%", left: "70%" },
    energyType: "circulation",
  },
  {
    step: 4,
    id: "heat-removal",
    name: "HEAT REMOVAL",
    label: "Refrigeration Circuit",
    shortDesc: "Heat transferred away through lines",
    fullDesc:
      "Superheated vapor is pumped by the hermetic compressor through heavy-gauge copper lines to the outdoor condenser coil.",
    focusArea: { top: "25%", left: "52%" },
    energyType: "heat",
  },
  {
    step: 5,
    id: "cool-air",
    name: "COOL AIR",
    label: "Cool Air Outlet",
    shortDesc: "Cool air returns into room",
    fullDesc:
      "Crisp, purified, climate-controlled cool air is directed evenly across your living space via 4-way motorized swing louvers.",
    focusArea: { top: "66%", left: "55%" },
    energyType: "output",
  },
];

// Technical Callouts positioned precisely on the 3D unit
const TECHNICAL_CALLOUTS = [
  {
    id: "intake-callout",
    title: "AIR INTAKE & FILTER",
    subtitle: "High-density particulate screen",
    top: "16%",
    left: "26%",
    stepIndex: 0,
  },
  {
    id: "evaporator-callout",
    title: "EVAPORATOR COIL",
    subtitle: "Hydrophilic blue fin heat exchanger",
    top: "22%",
    left: "38%",
    stepIndex: 1,
  },
  {
    id: "compressor-callout",
    title: "COMPRESSOR & LINES",
    subtitle: "Inverter drive & copper circuit",
    top: "14%",
    left: "52%",
    stepIndex: 3,
  },
  {
    id: "blower-callout",
    title: "RADIAL BLOWER FAN",
    subtitle: "Ultra-quiet tangential turbine",
    top: "32%",
    left: "72%",
    stepIndex: 2,
  },
  {
    id: "outlet-callout",
    title: "COOL AIR OUTLET",
    subtitle: "Motorized 3D airflow diffuser",
    top: "68%",
    left: "56%",
    stepIndex: 4,
  },
];

export function HeroSection() {
  // Navigation / Step state
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [cutawayMode, setCutawayMode] = useState<"cutaway" | "solid">("cutaway");
  const [environment, setEnvironment] = useState<"studio" | "penthouse">("studio");
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentStep = FLOW_STEPS[activeStepIndex];

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play the cooling process sequence (Requirement 25)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Mouse Parallax / 360 Tilt handler (Requirement 20)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
      setTiltOffset({ x, y });
    },
    []
  );

  const handleMouseLeave = () => {
    setTiltOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // ─── FLUID PARTICLE STREAM CANVAS SIMULATION (Requirement 9 & 10) ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particles system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      type: "warm" | "cool" | "heat-transfer";
    }

    const particles: Particle[] = [];
    const MAX_PARTICLES = isMobile ? 32 : 70;

    const spawnParticle = (type?: "warm" | "cool" | "heat-transfer"): Particle => {
      const pType =
        type ||
        (Math.random() < 0.35
          ? "warm"
          : Math.random() < 0.8
          ? "cool"
          : "heat-transfer");

      if (pType === "warm") {
        // Enters from above / room into top intake
        return {
          x: width * 0.28 + Math.random() * (width * 0.32),
          y: height * 0.05 + Math.random() * (height * 0.1),
          vx: (Math.random() - 0.5) * 0.6,
          vy: 0.8 + Math.random() * 1.2,
          size: 2 + Math.random() * 2.5,
          life: 0,
          maxLife: 80 + Math.random() * 40,
          type: "warm",
        };
      } else if (pType === "heat-transfer") {
        // Thermal dissipation flowing toward right condenser
        return {
          x: width * 0.65 + Math.random() * (width * 0.1),
          y: height * 0.2 + Math.random() * (height * 0.2),
          vx: 1.2 + Math.random() * 1.5,
          vy: (Math.random() - 0.5) * 0.8,
          size: 2.2 + Math.random() * 2.5,
          life: 0,
          maxLife: 60 + Math.random() * 30,
          type: "heat-transfer",
        };
      } else {
        // Chilled air cascading down into the room from louver vent
        return {
          x: width * 0.45 + (Math.random() - 0.3) * (width * 0.25),
          y: height * 0.62 + Math.random() * (height * 0.08),
          vx: (Math.random() - 0.7) * 1.4,
          vy: 1.8 + Math.random() * 2.2,
          size: 2.5 + Math.random() * 3.5,
          life: 0,
          maxLife: 100 + Math.random() * 50,
          type: "cool",
        };
      }
    };

    // Initialize initial pool
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife; // Stagger
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render only in cutaway mode or when airflow is active
      if (cutawayMode === "cutaway") {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life++;

          const progress = p.life / p.maxLife;
          const alpha =
            progress < 0.2
              ? progress / 0.2
              : progress > 0.8
              ? (1 - progress) / 0.2
              : 1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

          if (p.type === "warm") {
            // Warm air: soft red/orange
            ctx.fillStyle = `rgba(255, 107, 74, ${alpha * 0.55})`;
            ctx.shadowColor = "rgba(241, 23, 30, 0.6)";
            ctx.shadowBlur = 8;
          } else if (p.type === "heat-transfer") {
            // Heat dissipation: vivid brand red/amber
            ctx.fillStyle = `rgba(241, 23, 30, ${alpha * 0.65})`;
            ctx.shadowColor = "rgba(255, 87, 34, 0.8)";
            ctx.shadowBlur = 10;
          } else {
            // Chilled air: luminous cyan-blue
            ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.75})`;
            ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
            ctx.shadowBlur = 12;
          }

          ctx.fill();

          // Reset expired particles
          if (p.life >= p.maxLife || p.y > height || p.x > width) {
            particles[i] = spawnParticle();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [cutawayMode, isMobile]);

  // Smooth activate cooling flow when CTA is clicked
  const handleExploreClick = () => {
    setCutawayMode("cutaway");
    setIsPlaying(true);
    setActiveStepIndex(0);
    // Smooth scroll down slightly if on mobile to focus on the 3D unit
    if (isMobile) {
      const el = document.getElementById("hero-3d-visual-container");
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#071322] text-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden flex flex-col justify-between">
      {/* ─── TECHNICAL ARCHITECTURAL BACKGROUND (Requirement 16) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Navy Studio Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E34] via-[#071322] to-[#050C16]" />

        {/* Subtle Engineering Grid Floor Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            transform: "perspective(800px) rotateX(60deg) translateY(20%)",
            transformOrigin: "bottom center",
          }}
        />

        {/* Cinematic Atmospheric Volumetric Glows */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#133256]/30 blur-[140px]" />
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-[#00E5FF]/[0.04] blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F1171E]/[0.05] blur-[150px]" />
      </div>

      {/* ─── MAIN HERO CONTAINER ─── */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDE: HERO CONTENT & VALUE PROPOSITION (38-42% Width)
              ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 xl:col-span-5 z-20 flex flex-col justify-center">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-8 h-[2px] bg-[#F1171E]" />
              <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#F1171E]">
                PROFESSIONAL HVAC SOLUTIONS
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E]" />
            </motion.div>

            {/* 2. Main Headline (Requirement 2) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 sm:mb-5"
            >
              COOLER SPACES. <br />
              <span className="text-[#F1171E] drop-shadow-sm">HAPPIER</span> LIVES.
            </motion.h1>

            {/* 3. Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mb-6 sm:mb-8"
            >
              Professional air conditioning, cooling, electrical and plumbing
              services across the UAE — with fast response and reliable support.
            </motion.p>

            {/* 4. CTA Buttons (Requirement 3) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
            >
              {/* Primary CTA: Request a Quote */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 h-13 px-7 sm:px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg shadow-[#F1171E]/25 hover:shadow-xl hover:shadow-[#F1171E]/40 text-sm sm:text-base whitespace-nowrap active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight weight="bold" size={18} />
              </Link>

              {/* Secondary CTA: Explore How AC Works */}
              <button
                type="button"
                onClick={handleExploreClick}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-6 sm:px-7 rounded-xl border-2 border-white/30 text-white font-bold hover:border-[#F1171E] hover:text-[#F1171E] hover:bg-white/[0.04] transition-all text-sm sm:text-base whitespace-nowrap backdrop-blur-sm active:scale-[0.98]"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Play weight="fill" size={13} className="translate-x-0.5" />
                </div>
                <span>Explore How AC Works</span>
              </button>
            </motion.div>

            {/* 5. Trust Points (Requirement 4) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10"
            >
              {/* Fast Response */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                  <Lightning weight="bold" size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                    FAST RESPONSE
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Quick technical support.
                  </p>
                </div>
              </div>

              {/* Competitive Pricing */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                  <Gear weight="bold" size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                    COMPETITIVE PRICING
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Fair, transparent rates.
                  </p>
                </div>
              </div>

              {/* 24/7 Emergency Service */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#F1171E]/15 flex items-center justify-center text-[#F1171E] shrink-0 mt-0.5">
                  <Clock weight="bold" size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white uppercase tracking-wider">
                    24/7 EMERGENCY
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Urgent assistance desk.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT SIDE: 3D INTERACTIVE AC UNIT VISUALIZATION (58-62% Width)
              ══════════════════════════════════════════════════════════════════ */}
          <div
            id="hero-3d-visual-container"
            className="lg:col-span-7 xl:col-span-7 relative z-10 lg:-mr-6 xl:-mr-12"
          >
            {/* Top Interactive Mode Toggles (Cutaway X-Ray & Environment) */}
            <div className="flex items-center justify-between gap-3 mb-3 px-1">
              {/* Cutaway Morph Selector */}
              <div className="inline-flex items-center p-1 rounded-xl bg-[#0B1E34] border border-white/15 backdrop-blur-md shadow-lg">
                <button
                  type="button"
                  onClick={() => setCutawayMode("cutaway")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    cutawayMode === "cutaway"
                      ? "bg-[#F1171E] text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Eye weight="bold" size={14} />
                  <span>Cutaway Anatomy</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCutawayMode("solid")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    cutawayMode === "solid"
                      ? "bg-[#F1171E] text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span>Closed Casing</span>
                </button>
              </div>

              {/* Environment Selector (Studio Navy vs Penthouse) */}
              <div className="hidden sm:inline-flex items-center p-1 rounded-xl bg-[#0B1E34] border border-white/15 backdrop-blur-md text-xs">
                <button
                  type="button"
                  onClick={() => setEnvironment("studio")}
                  className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                    environment === "studio"
                      ? "bg-white/15 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Studio Navy
                </button>
                <button
                  type="button"
                  onClick={() => setEnvironment("penthouse")}
                  className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                    environment === "penthouse"
                      ? "bg-white/15 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Penthouse Room
                </button>
              </div>

              {/* 360° Interaction Badge (Requirement 13) */}
              <div className="flex items-center gap-2.5 text-right">
                <div className="w-8 h-8 rounded-full border border-white/20 bg-[#0B1E34]/80 flex items-center justify-center text-white font-extrabold text-[10px] shadow-sm">
                  360°
                </div>
                <div className="text-left hidden sm:block">
                  <span className="block text-[11px] font-extrabold text-white tracking-wider uppercase leading-none">
                    360° MODEL
                  </span>
                  <span className="block text-[10px] text-gray-400 leading-none mt-0.5">
                    Rotate • Explore
                  </span>
                </div>
              </div>
            </div>

            {/* ─── 3D VIEWPORT FRAME (with mouse parallax & canvas overlay) ─── */}
            <div
              className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden border border-white/15 bg-[#050E1A] shadow-2xl cursor-grab active:cursor-grabbing select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              {/* 3D Model Image Layer with Smooth Motion Spring Tilt */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: isHovered ? 1.04 : 1.02,
                  x: tiltOffset.x,
                  y: tiltOffset.y,
                }}
                transition={{ type: "spring", damping: 25, stiffness: 80 }}
              >
                {/* Image 1: Studio Navy Cutaway */}
                {environment === "studio" ? (
                  <>
                    <Image
                      src="/images/hero/ac-3d-navy-studio.jpg"
                      alt="WADI AL RAHA 3D Split AC Cutaway in Deep Navy Studio"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className={`object-cover object-center filter contrast-105 transition-opacity duration-700 ${
                        cutawayMode === "cutaway" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <Image
                      src="/images/hero/ac-3d-navy-solid.jpg"
                      alt="WADI AL RAHA 3D Split AC Pristine White Exterior Casing"
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className={`object-cover object-center filter contrast-105 transition-opacity duration-700 ${
                        cutawayMode === "solid" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </>
                ) : (
                  /* Image 2: Penthouse Architecture Environment */
                  <Image
                    src="/images/hero/ac-3d-livingroom-clean.jpg"
                    alt="WADI AL RAHA 3D Split AC in Luxury UAE Penthouse"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center filter contrast-105"
                  />
                )}
              </motion.div>

              {/* Edge Vignette & Readability Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/80 via-transparent to-[#071322]/40 pointer-events-none lg:block hidden" />

              {/* Real-time Fluid Particle Canvas Overlay (Warm & Cool Streams) */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-10 w-full h-full"
              />

              {/* Active Step Camera Focus Ring */}
              <AnimatePresence>
                {cutawayMode === "cutaway" && (
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute pointer-events-none z-15"
                    style={{
                      top: currentStep.focusArea.top,
                      left: currentStep.focusArea.left,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-24 h-24 rounded-full bg-[#F1171E]/20 animate-ping" />
                      <span className="absolute w-16 h-16 rounded-full border border-[#F1171E]/50" />
                      <div className="w-4 h-4 rounded-full bg-[#F1171E] shadow-lg shadow-[#F1171E]" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ─── TECHNICAL FLOATING CALLOUT BEACONS (Requirement 14) ─── */}
              {cutawayMode === "cutaway" && (
                <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
                  {TECHNICAL_CALLOUTS.map((callout) => {
                    const isCalloutActive = activeStepIndex === callout.stepIndex;
                    return (
                      <div
                        key={callout.id}
                        className="absolute transition-all duration-300 pointer-events-auto cursor-pointer"
                        style={{ top: callout.top, left: callout.left }}
                        onClick={() => {
                          setActiveStepIndex(callout.stepIndex);
                          setIsPlaying(false);
                        }}
                      >
                        <div className="relative group flex items-center">
                          {/* Pin Button */}
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-[11px] shadow-lg transition-transform duration-200 ${
                              isCalloutActive
                                ? "bg-[#F1171E] text-white ring-4 ring-[#F1171E]/40 scale-110"
                                : "bg-[#0B1E34]/90 text-white border border-white/40 hover:scale-105"
                            }`}
                          >
                            {callout.stepIndex + 1}
                          </div>

                          {/* Hover / Active Label Card */}
                          <div
                            className={`absolute left-9 px-3 py-1.5 rounded-xl bg-[#0B1E34]/95 backdrop-blur-md border border-white/20 shadow-xl whitespace-nowrap transition-all duration-200 ${
                              isCalloutActive
                                ? "opacity-100 translate-x-0 ring-1 ring-[#F1171E]/50"
                                : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                            }`}
                          >
                            <span className="block text-[11px] font-extrabold text-white leading-tight">
                              {callout.title}
                            </span>
                            <span className="block text-[9px] text-gray-300 leading-tight">
                              {callout.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Active Step Real-time HUD Card (Bottom Left of Canvas) */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 max-w-[280px] sm:max-w-xs p-3 sm:p-3.5 rounded-2xl bg-[#071322]/90 backdrop-blur-md border border-white/15 shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F1171E] animate-pulse" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F1171E]">
                      STAGE 0{currentStep.step} • {currentStep.name}
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">
                    LIVE HUD
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {currentStep.label}
                </h4>
                <p className="text-[11px] text-gray-300 mt-1 leading-snug">
                  {currentStep.fullDesc}
                </p>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                BOTTOM WORKING FLOW TIMELINE (Requirement 11 & 12)
                ══════════════════════════════════════════════════════════════════ */}
            <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-[#0B1E34]/90 backdrop-blur-md border border-white/15 shadow-xl">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                
                {/* Play / Pause Toggle Controller */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-xl bg-[#F1171E] hover:bg-[#D61218] text-white flex items-center justify-center transition-all shadow-md shadow-[#F1171E]/30 shrink-0"
                    title={isPlaying ? "Pause simulation" : "Play simulation"}
                  >
                    {isPlaying ? (
                      <Pause weight="fill" size={17} />
                    ) : (
                      <Play weight="fill" size={17} className="translate-x-0.5" />
                    )}
                  </button>
                  <div>
                    <span className="block text-xs font-extrabold text-white leading-none">
                      Cooling Process Flow
                    </span>
                    <span className="block text-[10px] text-gray-400 mt-1 leading-none">
                      {isPlaying ? "Auto-cycling stages" : "Paused — click stage"}
                    </span>
                  </div>
                </div>

                {/* 5-Stage Stepper Buttons (Requirement 11) */}
                <div className="flex-1 grid grid-cols-5 gap-1 sm:gap-2">
                  {FLOW_STEPS.map((step, idx) => {
                    const isStepActive = idx === activeStepIndex;
                    const isCompleted = idx < activeStepIndex;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => {
                          setActiveStepIndex(idx);
                          setIsPlaying(false);
                          setCutawayMode("cutaway");
                        }}
                        className={`group relative flex flex-col items-center py-2 px-1 rounded-xl transition-all text-center cursor-pointer ${
                          isStepActive
                            ? "bg-[#F1171E]/15 border border-[#F1171E]"
                            : "bg-white/[0.02] border border-white/5 hover:border-white/20"
                        }`}
                      >
                        {/* Stage Number */}
                        <span
                          className={`text-[10px] sm:text-[11px] font-extrabold transition-colors ${
                            isStepActive
                              ? "text-[#F1171E]"
                              : isCompleted
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          0{step.step}
                        </span>

                        {/* Step Name */}
                        <span
                          className={`text-[9px] sm:text-[10px] font-bold tracking-tight mt-0.5 transition-colors line-clamp-1 ${
                            isStepActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-200"
                          }`}
                        >
                          {step.name}
                        </span>

                        {/* Bottom Indicator Bar */}
                        <div
                          className={`w-full h-[2px] mt-1.5 rounded-full transition-all ${
                            isStepActive
                              ? "bg-[#F1171E]"
                              : isCompleted
                              ? "bg-white/40"
                              : "bg-transparent"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
