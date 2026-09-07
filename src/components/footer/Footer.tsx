"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from "@/lib/constants/navigation";
import { COMPANY } from "@/lib/constants/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1E34] text-white pt-16 lg:pt-20 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group w-fit">
              <div className="relative h-12 w-[88px] shrink-0 transition-transform group-hover:scale-105 duration-200">
                <Image
                  src="/images/logo-white.png"
                  alt="WADI AL RAHA Logo"
                  fill
                  sizes="88px"
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-white tracking-tight text-xl lg:text-2xl leading-none">
                  WADI AL RAHA
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#F1171E] mt-1">
                  HVAC & Technical Services
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mt-1 text-sm leading-relaxed">
              Professional HVAC, cooling, electrical, plumbing and specialized technical services across the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F1171E] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F1171E]"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F1171E] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F1171E]"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-gray-400 hover:text-[#F1171E] transition-colors">
                <MapPin className="text-[#F1171E] w-5 h-5 shrink-0 mt-0.5" />
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  title="View on Google Maps"
                >
                  {COMPANY.address.full}
                </a>
              </li>
              {COMPANY.phones.map((phone, idx) => (
                <li key={idx} className="flex gap-3">
                  <Phone className="text-[#F1171E] w-5 h-5 shrink-0 mt-0.5" />
                  <a href={`tel:${phone.raw}`} className="text-sm text-gray-400 hover:text-[#F1171E] transition-colors">
                    {phone.name} {phone.number}
                  </a>
                </li>
              ))}
              {COMPANY.emails.list.map((email, idx) => (
                <li key={idx} className="flex gap-3">
                  <Envelope className="text-[#F1171E] w-5 h-5 shrink-0 mt-0.5" />
                  <a href={`mailto:${email}`} className="text-sm text-gray-400 hover:text-[#F1171E] transition-colors">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} WADI AL RAHA. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-[#F1171E] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="hover:text-[#F1171E] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
