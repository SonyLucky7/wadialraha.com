import { PAGE_SEO } from "@/lib/constants/seo";
import { COMPANY } from "@/lib/constants/company";
import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  alternates: {
    canonical: PAGE_SEO.contact.canonical,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0B1220] py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                GET IN TOUCH • 24/7 TECHNICAL DESK
              </span>
              <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Let&apos;s Talk About Your <span className="text-[#F1171E]">Requirement</span>
            </h1>
            <p className="text-lg text-gray-300">
              For emergency AC services, new installations, or routine maintenance, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F8FB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                  <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                    DIRECT INQUIRY
                  </span>
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133256]">
                  Send Us a <span className="text-[#F1171E]">Message</span>
                </h2>
              </div>
              <ContactForm />
            </div>
            
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                  <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                    DISPATCH HUBS
                  </span>
                  <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133256]">
                  Contact <span className="text-[#F1171E]">Information</span>
                </h2>
              </div>
              <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
                  <div className="mt-1 bg-[#F1171E]/10 p-3 rounded-lg">
                    <MapPin weight="fill" className="w-6 h-6 text-[#F1171E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#133256] mb-1">Head Office</h3>
                    <p className="text-[#64748B] mb-2">{COMPANY.address.full}</p>
                    <a
                      href={COMPANY.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#F1171E] hover:underline inline-flex items-center gap-1"
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
                  <div className="mt-1 bg-[#F1171E]/10 p-3 rounded-lg">
                    <Phone weight="fill" className="w-6 h-6 text-[#F1171E]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#133256] mb-3">Phone Numbers</h3>
                    <div className="space-y-3">
                      {COMPANY.phones.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone.raw}`} className="flex items-center justify-between group">
                          <span className="text-[#64748B]">{phone.name}</span>
                          <span className="font-semibold text-[#133256] group-hover:text-[#F1171E] transition-colors">{phone.number}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
                  <div className="mt-1 bg-[#F1171E]/10 p-3 rounded-lg">
                    <EnvelopeSimple weight="fill" className="w-6 h-6 text-[#F1171E]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#133256] mb-3">Email Addresses</h3>
                    <div className="space-y-3">
                      {COMPANY.emails.list.map((email, idx) => (
                        <a key={idx} href={`mailto:${email}`} className="block text-[#133256] font-semibold hover:text-[#F1171E] transition-colors">
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
