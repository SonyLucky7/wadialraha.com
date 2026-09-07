import { PAGE_SEO } from "@/lib/constants/seo";
import AboutContent from "@/components/about/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  alternates: {
    canonical: PAGE_SEO.about.canonical,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
