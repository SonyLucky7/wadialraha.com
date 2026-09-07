import { Metadata } from "next";
import { PAGE_SEO } from "@/lib/constants/seo";
import ServicesListContent from "@/components/services/ServicesListContent";

export const metadata: Metadata = {
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  alternates: {
    canonical: PAGE_SEO.services.canonical,
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <ServicesListContent />
    </main>
  );
}
