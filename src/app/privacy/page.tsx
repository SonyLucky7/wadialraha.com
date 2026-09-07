import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Privacy Policy | WADI AL RAHA",
  description: "Privacy Policy for WADI AL RAHA HVAC & Technical Services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-[100dvh]">
      {/* Hero Section */}
      <section className="bg-[#0B1220] py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#151A24] text-lg leading-relaxed mb-8">
            This privacy policy page is a placeholder. The privacy policy for WADI AL RAHA will be published here. For questions about privacy, please contact us at <a href="mailto:info@wadialraha.com" className="text-[#C9A227] hover:underline font-semibold">info@wadialraha.com</a>.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0B1220] font-semibold hover:text-[#C9A227] transition-colors mt-8 group"
          >
            <ArrowLeft weight="bold" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
