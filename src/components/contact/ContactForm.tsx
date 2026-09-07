"use client";

import React, { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  if (success) {
    return (
      <div className="bg-[#F5F6F8] border border-[#E5E7EB] rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-[#F1171E]/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#F1171E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0B1220] mb-2">Message Sent Successfully</h3>
        <p className="text-[#6B7280] mb-6">Thank you for contacting WADI AL RAHA. We will get back to you shortly.</p>
        <Button onClick={() => setSuccess(false)}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB] shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Full Name" name="name" required />
        <FormField label="Company Name" name="company" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Phone Number" name="phone" type="tel" required />
        <FormField label="Email" name="email" type="email" required />
      </div>
      <FormField
        label="Service Required"
        name="service"
        options={[
          { label: "Central AC", value: "central-ac" },
          { label: "Package AC", value: "package-ac" },
          { label: "Split AC", value: "split-ac" },
          { label: "Electrical & Plumbing", value: "electrical-plumbing" },
          { label: "Cold Store", value: "cold-store" },
          { label: "Ice Machine", value: "ice-machine" },
          { label: "Other", value: "other" },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Location" name="location" />
        <FormField
          label="Preferred Contact Method"
          name="contactMethod"
          options={[
            { label: "Phone", value: "phone" },
            { label: "Email", value: "email" },
            { label: "WhatsApp", value: "whatsapp" },
          ]}
        />
      </div>
      <FormField label="Message" name="message" textarea />
      <Button type="submit" loading={loading} className="w-full" size="lg">
        Send Inquiry
      </Button>
    </form>
  );
}
