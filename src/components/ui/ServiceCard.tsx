"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  iconName?: string;
}

export function ServiceCard({ number, title, description, href, iconName }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 flex flex-col h-full transition-shadow duration-300"
    >
      <div className="text-5xl font-extrabold text-[#F1171E] mb-6">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-[#133256] mb-4">
        {title}
      </h3>
      <p className="text-[#64748B] mb-8 flex-grow">
        {description}
      </p>
      <Link href={href} className="inline-flex items-center text-[#133256] font-semibold hover:text-[#F1171E] transition-colors mt-auto">
        Explore Service <ArrowRight className="ml-2 w-5 h-5 text-[#F1171E]" />
      </Link>
    </motion.div>
  );
}
