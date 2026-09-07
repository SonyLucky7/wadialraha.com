"use client";

import React from 'react';
import { Phone, Envelope, MapPin } from '@phosphor-icons/react';
import Link from 'next/link';

export interface ContactCardProps {
  type: 'phone' | 'email' | 'address';
  label: string;
  value: string;
  href?: string;
}

export function ContactCard({ type, label, value, href }: ContactCardProps) {
  const IconComponent = type === 'phone' ? Phone : type === 'email' ? Envelope : MapPin;
  const defaultHref = type === 'phone' ? `tel:${value.replace(/[^0-9+]/g, '')}` : type === 'email' ? `mailto:${value}` : undefined;
  const linkHref = href || defaultHref;

  const content = (
    <div className="flex items-start p-6 bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-[#F5F6F8] flex items-center justify-center mr-4 flex-shrink-0">
        <IconComponent size={24} weight="fill" className="text-[#C9A227]" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-1">{label}</span>
        <span className="text-[#0B1220] font-semibold text-lg">{value}</span>
      </div>
    </div>
  );

  if (linkHref) {
    return (
      <Link href={linkHref} className="block group">
        {content}
      </Link>
    );
  }

  return content;
}
