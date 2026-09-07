import { COMPANY } from "./company";

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
}

const BASE_URL = `https://${COMPANY.website}`;

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "WADI AL RAHA | HVAC, AC & Technical Services in UAE",
    description:
      "WADI AL RAHA provides professional HVAC, AC installation, repair, maintenance, cooling, electrical, plumbing and specialized technical services across the UAE.",
    canonical: BASE_URL,
  },
  about: {
    title: "About Us | WADI AL RAHA - HVAC & Technical Services UAE",
    description:
      "Learn about WADI AL RAHA, an employee-owned company providing dependable HVAC, cooling, electrical and plumbing services across the UAE.",
    canonical: `${BASE_URL}/about`,
  },
  services: {
    title: "Our Services | WADI AL RAHA - HVAC & Technical Solutions UAE",
    description:
      "Comprehensive HVAC, cooling and technical solutions including central AC, package AC, split AC, electrical, plumbing, cold store and ice machine services.",
    canonical: `${BASE_URL}/services`,
  },
  "central-ac": {
    title: "Central AC Plant Services | WADI AL RAHA UAE",
    description:
      "Professional central AC plant erection, installation, maintenance and repair services with technical expertise for cooling systems across the UAE.",
    canonical: `${BASE_URL}/services/central-ac`,
  },
  "package-ac": {
    title: "Package AC Installation & Repair | WADI AL RAHA UAE",
    description:
      "Professional installation, maintenance and repair services for packaged air conditioning systems across the UAE.",
    canonical: `${BASE_URL}/services/package-ac`,
  },
  "split-ac": {
    title: "Split AC Repair & Installation | WADI AL RAHA UAE",
    description:
      "Dedicated technical support for split and ducted air conditioning systems including installation, repair and maintenance in UAE.",
    canonical: `${BASE_URL}/services/split-ac`,
  },
  "electrical-plumbing": {
    title: "Electrical & Plumbing Services | WADI AL RAHA UAE",
    description:
      "Professional electrical and plumbing support for residential, commercial and technical environments across the UAE.",
    canonical: `${BASE_URL}/services/electrical-plumbing`,
  },
  "cold-store": {
    title: "Cold Store Installation & Repair | WADI AL RAHA UAE",
    description:
      "Specialized installation, maintenance and repair support for cold storage environments across the UAE.",
    canonical: `${BASE_URL}/services/cold-store`,
  },
  "ice-machine": {
    title: "Ice Machine Installation & Repair | WADI AL RAHA UAE",
    description:
      "Professional ice machine installation, maintenance and repair services including Scotsman systems in UAE.",
    canonical: `${BASE_URL}/services/ice-machine`,
  },
  contact: {
    title: "Contact Us | WADI AL RAHA - HVAC Services UAE",
    description:
      "Contact WADI AL RAHA for HVAC, AC, electrical, plumbing and technical services. Located in Al Ain, Abu Dhabi, UAE. 24/7 emergency support available.",
    canonical: `${BASE_URL}/contact`,
  },
  "pre-qualification": {
    title: "Pre-Qualification Documents | WADI AL RAHA UAE",
    description:
      "Access pre-qualification documents and company information for business and procurement inquiries from WADI AL RAHA.",
    canonical: `${BASE_URL}/pre-qualification`,
  },
  "company-profile": {
    title: "Company Profile | WADI AL RAHA UAE",
    description:
      "WADI AL RAHA company profile — core services, technical capabilities, service categories and coverage across the UAE.",
    canonical: `${BASE_URL}/company-profile`,
  },
};

export function getServiceSEO(slug: string): PageSEO {
  return PAGE_SEO[slug] || PAGE_SEO.services;
}
