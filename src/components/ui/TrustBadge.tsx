"use client";

import React from 'react';
import { Icon } from '@phosphor-icons/react';

export interface TrustBadgeProps {
  icon: Icon;
  title: string;
  description: string;
}

export function TrustBadge({ icon: IconComponent, title, description }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
        <IconComponent size={24} weight="fill" className="text-[#C9A227]" />
      </div>
      <h4 className="font-semibold text-[#0B1220] mb-2">{title}</h4>
      <p className="text-sm text-[#6B7280] max-w-[250px]">{description}</p>
    </div>
  );
}
