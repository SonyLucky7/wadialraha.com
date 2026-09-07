import { PAGE_SEO } from "@/lib/constants/seo";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

export const metadata: Metadata = {
  title: PAGE_SEO["pre-qualification"].title,
  description: PAGE_SEO["pre-qualification"].description,
  alternates: {
    canonical: PAGE_SEO["pre-qualification"].canonical,
  },
};

export default function PreQualificationPage() {
  const documents = [
    { title: "Company Pre-Qualification Documents", description: "Comprehensive overview of WADI AL RAHA's technical capabilities, licenses, and organizational structure." },
    { title: "Company Registration Documents", description: "Trade licenses, commercial registration, and official governmental incorporation documents." },
    { title: "Technical Information", description: "Detailed technical specifications, methodology statements, and equipment capability profiles." },
    { title: "Supporting Documents", description: "Insurance certificates, compliance documents, and other supporting business paperwork." },
  ];

  return (
    <>
      <section className="bg-[#0B1E34] pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 relative overflow-hidden border-b border-[#133256]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pre-Qualification", href: "/pre-qualification" }]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#F1171E]">
                  OFFICIAL VENDOR CREDENTIALS
                </span>
                <span className="w-8 h-[2px] bg-[#F1171E] shrink-0"></span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Pre-Qualification <span className="text-[#F1171E]">Documents</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                Access official company dossiers, commercial licenses, engineering pre-qualification documents, and technical compliance certificates for tender and procurement submissions across the UAE.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#133256]/80 backdrop-blur-md rounded-2xl border border-white/15 p-6 shadow-xl">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F1171E] block mb-2">
                  CONTRACTOR SUMMARY
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  Wadi Al Raha Air Conditioning Contracting Est.
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px]">Incorporation</span>
                    <span className="font-bold text-white text-sm">1988 (35+ Yrs)</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px]">Operations Base</span>
                    <span className="font-bold text-white text-sm">Al Ain, UAE</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px]">Projects Delivered</span>
                    <span className="font-bold text-[#F1171E] text-sm">417+ Projects</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px]">Major Client</span>
                    <span className="font-bold text-white text-sm">Carrefour UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F8FB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="DOCUMENTATION & DOSSIERS"
              title="Available"
              titleAccent="Documents"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#0B1220] mb-2">{doc.title}</h3>
                  <p className="text-[#6B7280] mb-6">{doc.description}</p>
                </div>
                <div>
                  <span className="inline-block bg-[#F5F6F8] text-[#6B7280] text-sm font-semibold px-3 py-1 rounded-md mb-4 border border-[#E5E7EB]">
                    Document Coming Soon
                  </span>
                  <Button variant="ghost" className="w-full justify-center" disabled>
                    Request Documents
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionHeading
              align="center"
              eyebrow="TENDER & PROCUREMENT DESK"
              title="Request Corporate"
              titleAccent="Dossier"
              subtitle="Fill out the form below to request our complete pre-qualification package, licenses, or specific compliance documents."
            />
          </div>
          
          <form className="bg-[#F5F6F8] p-6 sm:p-8 rounded-xl border border-[#E5E7EB] shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Company Name" name="company" required />
              <FormField label="Contact Person" name="contact" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Email Address" name="email" type="email" required />
              <FormField label="Phone Number" name="phone" type="tel" />
            </div>
            <FormField label="Message / Specific Requirements" name="message" textarea />
            <Button type="button" className="w-full" size="lg">
              Request Pre-Qualification Package
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
