"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Lightning, CaretDown, Phone } from "@phosphor-icons/react";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { COMPANY } from "@/lib/constants/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "h-16 shadow-md" : "h-20"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-2 xl:gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group py-1 shrink-0">
          <div className="relative h-10 sm:h-12 w-[72px] sm:w-[88px] shrink-0 transition-transform group-hover:scale-105 duration-200">
            <Image
              src="/images/logo-transparent.png"
              alt="WADI AL RAHA Logo"
              fill
              priority
              sizes="(max-width: 640px) 72px, 88px"
              className="object-contain object-left"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-[#0B1220] tracking-tight text-base sm:text-lg xl:text-xl leading-none group-hover:text-[#F1171E] transition-colors whitespace-nowrap">
              WADI AL RAHA
            </span>
            <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-semibold tracking-wider text-[#6B7280] uppercase mt-1 whitespace-nowrap">
              HVAC & Technical Services
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 shrink min-w-0">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div
                key={item.label}
                className="relative h-full flex items-center py-6"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive ? "text-[#F1171E]" : "text-[#133256] hover:text-[#F1171E]"
                  }`}
                >
                  {item.label}
                  {hasChildren && <CaretDown weight="bold" className="w-3.5 h-3.5 xl:w-4 xl:h-4" />}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-4 left-0 right-0 h-[2px] bg-[#F1171E]"
                  />
                )}

                {/* Dropdown */}
                {hasChildren && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80%] left-0 mt-2 w-64 bg-white shadow-xl rounded-xl border border-[#E5E7EB] p-4 grid gap-1 z-50"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-[#FFF1F2] text-[#F1171E] font-semibold"
                                : "text-[#133256] hover:bg-[#F4F8FB] hover:text-[#F1171E]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <a
            href={`tel:${COMPANY.phones[0].raw}`}
            className="flex items-center gap-1.5 px-3 py-2 xl:px-4 xl:py-2 bg-[#F1171E] text-white rounded-lg font-bold text-xs xl:text-sm hover:bg-[#D61218] transition-colors shadow-sm whitespace-nowrap"
          >
            <Lightning weight="fill" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white shrink-0" />
            <span>Emergency Service</span>
          </a>
          <Link
            href="/contact"
            className="px-3 py-2 xl:px-4 xl:py-2 bg-[#133256] text-white rounded-lg font-semibold text-xs xl:text-sm hover:bg-[#0B1E34] transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#0B1220]"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <List className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative h-10 w-[74px] shrink-0">
                  <Image
                    src="/images/logo-transparent.png"
                    alt="WADI AL RAHA Logo"
                    fill
                    sizes="74px"
                    className="object-contain object-left"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-extrabold text-[#0B1220] tracking-tight text-lg leading-none">
                    WADI AL RAHA
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-[#6B7280] uppercase mt-1">
                    HVAC & Technical Services
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#0B1220]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                  const hasChildren = item.children && item.children.length > 0;

                  return (
                    <div key={item.label} className="flex flex-col gap-2">
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && setMobileMenuOpen(false)}
                        className={`text-lg font-semibold ${
                          isActive ? "text-[#F1171E]" : "text-[#133256]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#E2E8F0] mt-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`text-base py-1 ${
                                pathname === child.href ? "text-[#F1171E] font-semibold" : "text-[#64748B]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="p-6 border-t border-[#E2E8F0] flex flex-col gap-4">
              <a
                href={`tel:${COMPANY.phones[0].raw}`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#F1171E] text-white rounded-xl font-bold text-lg shadow-sm"
              >
                <Lightning weight="fill" className="w-5 h-5 text-white" />
                Emergency Service
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-[#133256] text-white rounded-xl font-semibold text-lg"
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].raw}`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#F4F8FB] text-[#133256] border border-[#E2E8F0] rounded-xl font-semibold text-lg"
              >
                <Phone weight="fill" className="w-5 h-5 text-[#F1171E]" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
