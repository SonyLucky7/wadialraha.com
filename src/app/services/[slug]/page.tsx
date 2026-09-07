import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants/services";
import { getServiceSEO } from "@/lib/constants/seo";
import { COMPANY } from "@/lib/constants/company";
import ServicePageContent from "@/components/services/ServicePageContent";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const seo = getServiceSEO(slug);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Schema.org structured data for the service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "telephone": COMPANY.phones[0].number,
      "email": COMPANY.emails.primary,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY.address.full,
        "addressCountry": "AE"
      }
    },
    "description": service.description,
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent service={service} />
    </main>
  );
}
