"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, WhatsappLogo, ChatText } from '@phosphor-icons/react';
import Link from 'next/link';

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe bg-[#0B1E34] shadow-[0_-4px_16px_rgba(11,30,52,0.3)] border-t border-[#133256]"
        >
          <div className="grid grid-cols-3 gap-1 p-2">
            <a 
              href="tel:+971569921448" 
              className="flex flex-col items-center justify-center py-2 text-white hover:text-[#F1171E] transition-colors"
            >
              <Phone size={24} weight="fill" className="mb-1 text-[#F1171E]" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
            </a>
            
            <a 
              href="https://wa.me/971569921448" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center py-2 text-white hover:text-[#25D366] transition-colors"
            >
              <WhatsappLogo size={28} weight="fill" className="mb-1 text-[#25D366]" />
              <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
            
            <Link 
              href="/contact" 
              className="flex flex-col items-center justify-center py-2 text-white hover:text-[#F1171E] transition-colors"
            >
              <ChatText size={24} weight="fill" className="mb-1 text-[#F1171E]" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Get Quote</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
