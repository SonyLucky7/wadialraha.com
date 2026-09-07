"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Lightning,
  Gear,
  Clock,
  Warning,
  Sparkle,
  Snowflake,
} from "@phosphor-icons/react";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 3D Motion & Interactive States
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 }); // Normalized 0-1
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [shockwaves, setShockwaves] = useState<Array<{ x: number; y: number; radius: number; maxRadius: number; opacity: number }>>([]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ─── SCROLL-DRIVEN 3D DEPTH PARALLAX ───
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  const acScrollY = useTransform(smoothScroll, [0, 1], [0, 140]);
  const acScrollScale = useTransform(smoothScroll, [0, 0.4, 1], [1, 1.06, 0.94]);
  const acScrollRotateX = useTransform(smoothScroll, [0, 1], [0, 10]);
  const contentScrollY = useTransform(smoothScroll, [0, 1], [0, 70]);
  const contentOpacity = useTransform(smoothScroll, [0, 0.8, 1], [1, 0.9, 0.2]);

  // ─── MOUSE INTERACTIVE 3D PERSPECTIVE & SPECULAR GLARE ───
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    setMousePos({ x: nx, y: ny });

    // Calculate dynamic 3D tilt angles
    const rotX = (ny - 0.5) * -18; // Degrees
    const rotY = (nx - 0.5) * 22;
    const transX = (nx - 0.5) * 25;
    const transY = (ny - 0.5) * 20;

    setTilt({ rotateX: rotX, rotateY: rotY, x: transX, y: transY });
  }, []);

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
    setMousePos({ x: 0.5, y: 0.5 });
    setIsHovered(false);
  };

  // Click Trigger Shockwave (Interactive Air Burst)
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    setShockwaves((prev) => [
      ...prev,
      { x: clickX, y: clickY, radius: 10, maxRadius: 180, opacity: 0.9 },
    ]);
  };

  // ─── 3D AERODYNAMIC AIRFLOW STREAMLINES & FLUID SIMULATION ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Streamline ribbons definition
    interface Streamline {
      startXRatio: number;
      startYRatio: number;
      endXRatio: number;
      endYRatio: number;
      freq: number;
      amp: number;
      speed: number;
      phase: number;
      width: number;
      color: string;
      glowColor: string;
    }

    const streamlines: Streamline[] = [
      { startXRatio: 0.42, startYRatio: 0.62, endXRatio: 0.18, endYRatio: 1.05, freq: 2.2, amp: 26, speed: 1.6, phase: 0, width: 3.5, color: "rgba(0, 229, 255, 0.85)", glowColor: "rgba(0, 229, 255, 0.9)" },
      { startXRatio: 0.48, startYRatio: 0.63, endXRatio: 0.32, endYRatio: 1.05, freq: 2.0, amp: 30, speed: 1.8, phase: 1.2, width: 4.0, color: "rgba(56, 189, 248, 0.8)", glowColor: "rgba(56, 189, 248, 0.95)" },
      { startXRatio: 0.54, startYRatio: 0.63, endXRatio: 0.48, endYRatio: 1.05, freq: 2.4, amp: 24, speed: 2.1, phase: 2.4, width: 4.5, color: "rgba(0, 240, 255, 0.9)", glowColor: "rgba(0, 229, 255, 1.0)" },
      { startXRatio: 0.60, startYRatio: 0.63, endXRatio: 0.64, endYRatio: 1.05, freq: 2.1, amp: 28, speed: 1.7, phase: 3.6, width: 3.8, color: "rgba(56, 189, 248, 0.75)", glowColor: "rgba(56, 189, 248, 0.85)" },
      { startXRatio: 0.66, startYRatio: 0.62, endXRatio: 0.82, endYRatio: 1.05, freq: 2.3, amp: 32, speed: 1.9, phase: 4.8, width: 3.2, color: "rgba(0, 229, 255, 0.7)", glowColor: "rgba(0, 229, 255, 0.8)" },
      // Warm intake streamlines entering the top
      { startXRatio: 0.28, startYRatio: 0.02, endXRatio: 0.38, endYRatio: 0.22, freq: 1.8, amp: 14, speed: 1.4, phase: 0.5, width: 2.4, color: "rgba(255, 107, 74, 0.65)", glowColor: "rgba(241, 23, 30, 0.75)" },
      { startXRatio: 0.42, startYRatio: 0.02, endXRatio: 0.48, endYRatio: 0.22, freq: 2.0, amp: 16, speed: 1.5, phase: 1.8, width: 2.8, color: "rgba(255, 87, 34, 0.7)", glowColor: "rgba(241, 23, 30, 0.85)" },
    ];

    // Flying air particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      life: number;
      maxLife: number;
      type: "cool" | "warm" | "sparkle";
    }

    const particles: Particle[] = [];
    const MAX_PARTICLES = isMobile ? 35 : 70;

    const spawnParticle = (): Particle => {
      const isCool = Math.random() < 0.75;
      if (isCool) {
        // Spawns near louvers and accelerates down
        return {
          x: width * 0.42 + Math.random() * (width * 0.26),
          y: height * 0.61 + Math.random() * (height * 0.06),
          vx: (Math.random() - 0.6) * 1.5,
          vy: 2.2 + Math.random() * 2.6,
          size: 2.0 + Math.random() * 3.2,
          alpha: 0.9,
          life: 0,
          maxLife: 90 + Math.random() * 40,
          type: Math.random() < 0.25 ? "sparkle" : "cool",
        };
      } else {
        // Spawns above and drifts down into intake
        return {
          x: width * 0.26 + Math.random() * (width * 0.35),
          y: height * 0.02 + Math.random() * (height * 0.06),
          vx: (Math.random() - 0.5) * 0.6,
          vy: 1.2 + Math.random() * 1.4,
          size: 1.8 + Math.random() * 2.2,
          alpha: 0.7,
          life: 0,
          maxLife: 70 + Math.random() * 30,
          type: "warm",
        };
      }
    };

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    let time = 0;
    let animId: number;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Aerodynamic Fluid Streamline Ribbons
      streamlines.forEach((s) => {
        const startX = width * s.startXRatio;
        const startY = height * s.startYRatio;
        const endX = width * s.endXRatio;
        const endY = height * s.endYRatio;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        const segments = 24;
        for (let j = 1; j <= segments; j++) {
          const t = j / segments;
          const currX = startX + (endX - startX) * t;
          const currY = startY + (endY - startY) * t;
          // Sine wave oscillation that grows along distance
          const wave = Math.sin(time * s.speed + t * s.freq * Math.PI + s.phase) * s.amp * t;
          ctx.lineTo(currX + wave, currY);
        }

        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;
        ctx.shadowColor = s.glowColor;
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.restore();
      });

      // 2. Draw Flying Energy Particles & Sparkles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha =
          progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (p.type === "cool") {
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.85})`;
          ctx.shadowColor = "rgba(56, 189, 248, 0.95)";
          ctx.shadowBlur = 12;
        } else if (p.type === "sparkle") {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
          ctx.shadowColor = "rgba(0, 240, 255, 1.0)";
          ctx.shadowBlur = 18;
        } else {
          ctx.fillStyle = `rgba(255, 107, 74, ${alpha * 0.65})`;
          ctx.shadowColor = "rgba(241, 23, 30, 0.8)";
          ctx.shadowBlur = 8;
        }

        ctx.fill();
        ctx.restore();

        if (p.life >= p.maxLife || p.y > height || p.x < 0 || p.x > width) {
          particles[i] = spawnParticle();
        }
      }

      // 3. Render Click Shockwaves
      setShockwaves((prevShockwaves) => {
        return prevShockwaves
          .map((sw) => {
            sw.radius += 4.5;
            sw.opacity *= 0.94;

            ctx.save();
            ctx.beginPath();
            ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 229, 255, ${sw.opacity})`;
            ctx.lineWidth = 3;
            ctx.shadowColor = "rgba(0, 229, 255, 0.9)";
            ctx.shadowBlur = 20;
            ctx.stroke();
            ctx.restore();

            return sw;
          })
          .filter((sw) => sw.opacity > 0.03 && sw.radius < sw.maxRadius);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#071322] text-white pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-22 overflow-hidden flex flex-col justify-center perspective-[1400px]"
    >
      {/* ─── CINEMATIC 3D VOLUMETRIC BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Navy Studio Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E34] via-[#071322] to-[#040912]" />

        {/* 3D Perspective Engineering Floor Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, #00E5FF 1px, transparent 1px),
                              linear-gradient(to bottom, #00E5FF 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            transform: "perspective(900px) rotateX(68deg) translateY(22%)",
            transformOrigin: "bottom center",
          }}
        />

        {/* Volumetric Atmosphere & Cold Air Aura */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#133256]/35 blur-[150px]" />
        <div className="absolute top-1/3 right-10 w-[700px] h-[700px] rounded-full bg-[#00E5FF]/[0.07] blur-[170px]" />
        <div className="absolute bottom-10 right-1/3 w-[500px] h-[500px] rounded-full bg-[#F1171E]/[0.06] blur-[150px]" />

        {/* Ambient Floating Dust / Cold Mist Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,229,255,0.06)_0%,transparent_60%)]" />
      </div>

      {/* ─── MAIN HERO CONTAINER ─── */}
      <div className="relative z-10 max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDE: HERO CONTENT & HIGH-CONVERSION ACTIONS (38-42%)
              ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            style={{ y: contentScrollY, opacity: contentOpacity }}
            className="lg:col-span-5 xl:col-span-5 z-20 flex flex-col justify-center"
          >
            {/* 1. Signature Eyebrow */}
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

            {/* 4. Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 h-13 px-7 sm:px-8 bg-[#F1171E] text-white font-bold rounded-xl hover:bg-[#D61218] transition-all shadow-lg shadow-[#F1171E]/30 hover:shadow-xl hover:shadow-[#F1171E]/50 hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight weight="bold" size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>

              {/* 24/7 Hotline CTA */}
              <Link
                href={`tel:${COMPANY.contacts[0].phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-6 sm:px-7 rounded-xl border-2 border-white/25 text-white font-semibold hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base whitespace-nowrap backdrop-blur-sm active:scale-[0.98]"
              >
                <Warning weight="bold" size={18} className="text-[#F1171E]" />
                <span>24/7 Emergency Service</span>
              </Link>
            </motion.div>

            {/* 5. Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10"
            >
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all">
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

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all">
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

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all">
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
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT SIDE: CREATIVE 3D INTERACTIVE AC EXPERIENCE (58-62%)
              ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            ref={containerRef}
            style={{
              y: acScrollY,
              scale: acScrollScale,
              rotateX: acScrollRotateX,
              transformStyle: "preserve-3d",
            }}
            className="lg:col-span-7 xl:col-span-7 relative z-10 lg:-mr-6 xl:-mr-12 will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3D Floating Levitation Anchor */}
            <motion.div
              className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] select-none"
              animate={{
                y: isHovered ? tilt.y : [0, -10, 0],
                x: isHovered ? tilt.x : 0,
                rotateX: isHovered ? tilt.rotateX : 0,
                rotateY: isHovered ? tilt.rotateY : 0,
                rotateZ: isHovered ? (tilt.rotateY * 0.15) : [0, 0.4, 0],
              }}
              transition={
                isHovered
                  ? { type: "spring", stiffness: 90, damping: 20 }
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Volumetric Halo Glow behind the 3D AC */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#00E5FF]/20 via-[#133256]/30 to-[#F1171E]/15 blur-3xl opacity-70 pointer-events-none -z-10" />

              {/* Seamless 3D AC Viewport (Blends smoothly into atmosphere) */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-cyan-400/20 bg-[#050E1A]/95 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85),0_0_50px_rgba(0,229,255,0.15)] group">
                
                {/* 3D AC Image Layer */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/hero/ac-3d-navy-studio.jpg"
                    alt="WADI AL RAHA 3D Split AC Cutaway Engineering Visualization"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center filter contrast-105 saturate-110 transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Dynamic Specular Light Glare (Follows Cursor Position in 3D) */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 360px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.22) 0%, rgba(0,229,255,0.08) 40%, transparent 75%)`,
                      opacity: isHovered ? 1 : 0.4,
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Pulsing Frost Core Glow on Evaporator (Left Side) */}
                  <motion.div
                    className="absolute top-[22%] left-[24%] w-40 h-32 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none"
                    animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.95, 1.08, 0.95] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Pulsing Thermal Dissipation Glow on Condenser (Right Side) */}
                  <motion.div
                    className="absolute top-[26%] right-[16%] w-40 h-32 rounded-full bg-[#F1171E]/20 blur-2xl pointer-events-none"
                    animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.1, 0.95] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />

                  {/* Atmospheric Edge Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/70 via-transparent to-[#071322]/30 pointer-events-none lg:block hidden" />
                </div>

                {/* ─── INTERACTIVE AERODYNAMIC FLUID CANVAS (Fluid Ribbons & Click Shockwaves) ─── */}
                <canvas
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  className="absolute inset-0 z-20 w-full h-full cursor-crosshair"
                  title="Click to emit a 3D cool airflow burst!"
                />

                {/* Micro-Interactive Creative Hint (Discreet bottom pill) */}
                <div className="absolute bottom-4 right-5 z-30 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071322]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-cyan-300 shadow-lg">
                  <Snowflake weight="fill" size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
                  <span className="tracking-wide">3D Interactive Fluid Flow • Click to Burst</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
