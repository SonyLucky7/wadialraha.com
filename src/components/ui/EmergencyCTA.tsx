"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Phone, Headset } from '@phosphor-icons/react';

export function EmergencyCTA() {
  return (
    <section className="bg-[#0B1E34] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F1171E] via-[#FF4D53] to-[#F1171E]"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                24/7 RAPID RESPONSE
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Air Conditioning Emergency? <span className="text-[#F1171E]">We&apos;re Ready.</span>
            </h2>
            <p className="text-lg text-[#F5F6F8] opacity-90">
              Our technical team is on standby to resolve urgent HVAC and mechanical failures across Abu Dhabi and Al Ain. Fast response, expert solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button 
              variant="emergency" 
              size="lg" 
              href="tel:+971569921448"
              iconLeft={<Phone size={24} weight="fill" />}
              className="w-full sm:w-auto"
            >
              Call for Emergency Service
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              href="/contact"
              iconLeft={<Headset size={24} />}
              className="w-full sm:w-auto text-white border-white hover:bg-white/10"
            >
              Request Assistance
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
