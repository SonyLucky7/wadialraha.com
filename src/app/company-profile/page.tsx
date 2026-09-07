import { PAGE_SEO } from "@/lib/constants/seo";
import { Metadata } from "next";
import CompanyProfileContent from "@/components/company-profile/CompanyProfileContent";

export const metadata: Metadata = {
  title: PAGE_SEO["company-profile"].title,
  description: PAGE_SEO["company-profile"].description,
  alternates: {
    canonical: PAGE_SEO["company-profile"].canonical,
  },
};

export default function CompanyProfilePage() {
  return <CompanyProfileContent />;
}
