import React from 'react';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  options?: { label: string; value: string }[];
}

export const FormField = React.forwardRef<HTMLElement, FormFieldProps>(
  ({ label, name, type = 'text', required, error, textarea, options, className = '', ...props }, ref) => {
    
    const baseInputStyles = "w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-[#0B1220] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-shadow disabled:bg-[#F5F6F8] disabled:text-[#6B7280]";
    const errorStyles = error ? "border-red-500 focus:ring-red-500" : "";
    
    return (
      <div className={`flex flex-col space-y-1.5 ${className}`}>
        <label htmlFor={name} className="text-sm font-semibold text-[#0B1220]">
          {label} {required && <span className="text-[#C9A227]">*</span>}
        </label>
        
        {textarea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={name}
            name={name}
            required={required}
            className={`${baseInputStyles} ${errorStyles} min-h-[120px] resize-y`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : options ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            id={name}
            name={name}
            required={required}
            defaultValue=""
            className={`${baseInputStyles} ${errorStyles} h-11 appearance-none`}
            {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="" disabled>Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={name}
            name={name}
            type={type}
            required={required}
            className={`${baseInputStyles} ${errorStyles} h-11`}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        
        {error && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
