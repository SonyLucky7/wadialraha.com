"use client";

import React from 'react';
import Link from 'next/link';
import { CaretRight, House } from '@phosphor-icons/react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://wadialraha.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-[#6B7280] hover:text-[#C9A227] transition-colors">
              <House size={18} weight="bold" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.href} className="flex items-center">
                <CaretRight size={14} className="text-[#6B7280] mx-2" />
                {isLast ? (
                  <span className="text-[#0B1220] font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="text-[#6B7280] hover:text-[#C9A227] transition-colors font-medium">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
