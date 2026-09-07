export interface Service {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  features: string[];
  audiences: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "central-ac",
    number: "01",
    slug: "central-ac",
    title: "Central AC Plants Erection, Repairing & Installation",
    shortTitle: "Central AC",
    description:
      "WADI AL RAHA provides central AC plant erection, installation, maintenance and repair services with technical expertise for cooling systems across the UAE.",
    heroDescription:
      "Professional central AC plant erection, installation, maintenance and repair services for large-scale cooling systems across the UAE.",
    features: [
      "Central AC plant erection and commissioning",
      "System installation and setup",
      "Preventive maintenance programs",
      "Emergency repair services",
      "Performance optimization",
      "System upgrades and retrofitting",
    ],
    audiences: [
      "Commercial buildings",
      "Industrial facilities",
      "Hotels and hospitality",
      "Large residential complexes",
      "Facility management companies",
    ],
    icon: "Snowflake",
  },
  {
    id: "package-ac",
    number: "02",
    slug: "package-ac",
    title: "Package AC Installation & Repairing",
    shortTitle: "Package AC",
    description:
      "Professional installation, maintenance and repair services for packaged air conditioning systems.",
    heroDescription:
      "Expert installation, maintenance and repair for packaged air conditioning systems across residential and commercial environments.",
    features: [
      "Package AC installation",
      "System troubleshooting and diagnosis",
      "Component repair and replacement",
      "Preventive maintenance",
      "Performance testing",
      "Emergency repair services",
    ],
    audiences: [
      "Commercial offices",
      "Retail spaces",
      "Restaurants",
      "Warehouses",
      "Industrial facilities",
    ],
    icon: "Fan",
  },
  {
    id: "split-ac",
    number: "03",
    slug: "split-ac",
    title: "Split AC Repairing & Installation",
    shortTitle: "Split AC",
    description:
      "Dedicated technical support for split and ducted air conditioning systems, including installation, troubleshooting, repair and maintenance.",
    heroDescription:
      "Comprehensive technical support for split and ducted air conditioning systems — from installation to ongoing maintenance and emergency repairs.",
    features: [
      "Split AC installation and setup",
      "Ducted system installation",
      "Troubleshooting and diagnosis",
      "Repair and component replacement",
      "Regular maintenance services",
      "Gas charging and leak detection",
    ],
    audiences: [
      "Residential homes and villas",
      "Apartments",
      "Small offices",
      "Retail shops",
      "Residential buildings",
    ],
    icon: "Wind",
  },
  {
    id: "electrical-plumbing",
    number: "04",
    slug: "electrical-plumbing",
    title: "Electrical & Plumbing Works",
    shortTitle: "Electrical & Plumbing",
    description:
      "Professional electrical and plumbing support for residential, commercial and technical environments.",
    heroDescription:
      "Reliable electrical and plumbing services for residential, commercial and industrial properties across the UAE.",
    features: [
      "Electrical installation and wiring",
      "Electrical maintenance and repairs",
      "Plumbing installation",
      "Plumbing maintenance and repairs",
      "Emergency electrical services",
      "Technical support and consultation",
    ],
    audiences: [
      "Residential properties",
      "Commercial buildings",
      "Industrial facilities",
      "Property management companies",
      "Contractors and developers",
    ],
    icon: "Lightning",
  },
  {
    id: "cold-store",
    number: "05",
    slug: "cold-store",
    title: "Cold Store Installation & Repairing",
    shortTitle: "Cold Store",
    description:
      "Specialized installation, maintenance and repair support for cold storage environments.",
    heroDescription:
      "Specialized cold storage solutions — from installation to ongoing maintenance and emergency repairs for temperature-controlled environments.",
    features: [
      "Cold store design and installation",
      "Temperature control systems",
      "Insulation and panel installation",
      "Refrigeration system maintenance",
      "Emergency repair services",
      "Performance monitoring and optimization",
    ],
    audiences: [
      "Food and beverage companies",
      "Pharmaceutical facilities",
      "Warehouses and logistics",
      "Restaurants and hospitality",
      "Industrial cold storage facilities",
    ],
    icon: "Thermometer",
  },
  {
    id: "ice-machine",
    number: "06",
    slug: "ice-machine",
    title: "Ice Machine Installation & Repairing",
    shortTitle: "Ice Machines",
    description:
      "Professional installation, maintenance and repair support for ice machine systems, including Scotsman systems where applicable.",
    heroDescription:
      "Professional ice machine installation, maintenance and repair — including Scotsman systems and commercial-grade equipment.",
    features: [
      "Ice machine installation and setup",
      "Preventive maintenance programs",
      "Repair and component replacement",
      "Water filtration system checks",
      "Performance optimization",
      "Emergency repair services",
    ],
    audiences: [
      "Hotels and resorts",
      "Restaurants and cafés",
      "Hospitals and clinics",
      "Commercial kitchens",
      "Industrial facilities",
    ],
    icon: "IceCube",
  },
];
