"use client";

import React from 'react';
import { DownloadSimple, LockKey } from '@phosphor-icons/react';
import { Button } from './Button';

export interface DocumentCardProps {
  title: string;
  description: string;
  available: boolean;
  downloadUrl?: string;
}

export function DocumentCard({ title, description, available, downloadUrl }: DocumentCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white border border-[#E5E7EB] rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-[#0B1220]">{title}</h4>
        {!available && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F5F6F8] text-[#6B7280]">
            Coming Soon
          </span>
        )}
      </div>
      <p className="text-[#6B7280] mb-6 flex-grow">{description}</p>
      
      {available ? (
        <Button 
          variant="primary" 
          href={downloadUrl || '#'} 
          iconLeft={<DownloadSimple size={20} />}
          className="w-full"
        >
          Download PDF
        </Button>
      ) : (
        <Button 
          variant="secondary" 
          href="/contact" 
          iconLeft={<LockKey size={20} />}
          className="w-full"
        >
          Request Document
        </Button>
      )}
    </div>
  );
}
