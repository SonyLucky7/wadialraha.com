"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightning,
  Gear,
  Clock,
  Warning,
  Phone,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Subtle Mouse Parallax Tilt for 3D depth
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

  // ─── CONTINUOUS FLUID AIRFLOW PARTICLE SIMULATION ───
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
    const MAX_PARTICLES = isMobile ? 36 : 75;

    const spawnParticle = (): Particle => {
      const rand = Math.random();
      const pType =
        rand < 0.32
          ? "warm"
          : rand < 0.8
          ? "cool"
          : "heat-transfer";

      if (pType === "warm") {
        // Enters from above / room into top intake
        return {
          x: width * 0.28 + Math.random() * (width * 0.32),
          y: height * 0.04 + Math.random() * (height * 0.08),
          vx: (Math.random() - 0.5) * 0.5,
          vy: 0.9 + Math.random() * 1.1,
          size: 2 + Math.random() * 2.2,
          life: 0,
          maxLife: 80 + Math.random() * 35,
          type: "warm",
        };
      } else if (pType === "heat-transfer") {
        // Thermal dissipation flowing toward right condenser
        return {
          x: width * 0.64 + Math.random() * (width * 0.12),
          y: height * 0.18 + Math.random() * (height * 0.22),
          vx: 1.3 + Math.random() * 1.6,
          vy: (Math.random() - 0.5) * 0.7,
          size: 2.2 + Math.random() * 2.4,
          life: 0,
          maxLife: 55 + Math.random() * 25,
          type: "heat-transfer",
        };
      } else {
        // Chilled air cascading down into the room from louver vent
        return {
          x: width * 0.44 + (Math.random() - 0.3) * (width * 0.28),
          y: height * 0.62 + Math.random() * (height * 0.08),
          vx: (Math.random() - 0.7) * 1.3,
          vy: 1.9 + Math.random() * 2.3,
          size: 2.5 + Math.random() * 3.5,
          life: 0,
          maxLife: 105 + Math.random() * 45,
          type: "cool",
        };
      }
    };

    // Initialize initial pool
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

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
          // Warm air intake: soft red/orange
          ctx.fillStyle = `rgba(255, 107, 74, ${alpha * 0.6})`;
          ctx.shadowColor = "rgba(241, 23, 30, 0.65)";
          ctx.shadowBlur = 8;
        } else if (p.type === "heat-transfer") {
          // Heat dissipation: vivid brand red/amber
          ctx.fillStyle = `rgba(241, 23, 30, ${alpha * 0.7})`;
          ctx.shadowColor = "rgba(255, 87, 34, 0.85)";
          ctx.shadowBlur = 10;
        } else {
          // Chilled air: luminous cyan-blue
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.8})`;
          ctx.shadowColor = "rgba(56, 189, 248, 0.95)";
          ctx.shadowBlur = 12;
        }

        ctx.fill();

        // Reset expired particles
        if (p.life >= p.maxLife || p.y > height || p.x > width) {
          particles[i] = spawnParticle();
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
  }, [isMobile]);

  return (
    <section className="relative min-h-screen bg-[#071322] text-white pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-22 overflow-hidden flex flex-col justify-center">
      {/* ─── TECHNICAL ARCHITECTURAL BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Navy Gradients */}
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
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-[#00E5FF]/[0.05] blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F1171E]/[0.05] blur-[150px]" />
      </div>

      {/* ─── MAIN HERO CONTAINER ─── */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDE: HERO CONTENT & VALUE PROPOSITION (40-44% Width)
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

            {/* 2. Main Headline */}
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

            {/* 4. CTA Buttons */}
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

              {/* 24/7 Emergency Service Link */}
              <Link
                href={`tel:${COMPANY.contacts[0].phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-6 sm:px-7 rounded-xl border-2 border-white/25 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all text-sm sm:text-base whitespace-nowrap backdrop-blur-sm active:scale-[0.98]"
              >
                <Warning weight="bold" size={18} className="text-[#F1171E]" />
                <span>24/7 Emergency Service</span>
              </Link>
            </motion.div>

            {/* 5. Trust Points */}
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
              RIGHT SIDE: PURE 3D AC CUTAWAY VISUAL (Clean, Uncluttered)
              ══════════════════════════════════════════════════════════════════ */}
          <div
            id="hero-3d-visual-container"
            className="lg:col-span-7 xl:col-span-7 relative z-10 lg:-mr-6 xl:-mr-12"
          >
            {/* 3D Viewport Frame with Fluid Airflow Simulation & Mouse Parallax */}
            <div
              className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden border border-white/15 bg-[#050E1A] shadow-2xl select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              {/* 3D Model Image with Mouse Parallax Depth */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: isHovered ? 1.03 : 1.01,
                  x: tiltOffset.x,
                  y: tiltOffset.y,
                }}
                transition={{ type: "spring", damping: 25, stiffness: 80 }}
              >
                <Image
                  src="/images/hero/ac-3d-navy-studio.jpg"
                  alt="WADI AL RAHA 3D Split AC Cutaway Engineering Visualization"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center filter contrast-105 saturate-110"
                />
              </motion.div>

              {/* Edge Vignette & Readability Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/70 via-transparent to-[#071322]/30 pointer-events-none lg:block hidden" />

              {/* Continuous Fluid Particle Canvas Overlay (Warm Intake & Luminous Cool Cascades) */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-10 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
