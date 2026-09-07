import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  titleAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'text-center items-center flex flex-col' : 'text-left items-start flex flex-col'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2.5 mb-3 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
            {eyebrow}
          </span>
          <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
        </div>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${light ? 'text-white' : 'text-[#133256]'}`}>
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="text-[#F1171E]">{titleAccent}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-1 max-w-2xl text-base md:text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

