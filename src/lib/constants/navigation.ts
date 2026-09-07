export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', children: [
    { label: 'Central AC', href: '/services/central-ac' },
    { label: 'Package AC', href: '/services/package-ac' },
    { label: 'Split AC', href: '/services/split-ac' },
    { label: 'Electrical & Plumbing', href: '/services/electrical-plumbing' },
    { label: 'Cold Store', href: '/services/cold-store' },
    { label: 'Ice Machines', href: '/services/ice-machine' },
  ]},
  { label: 'Pre Qualification Doc', href: '/pre-qualification' },
  { label: 'Company Profile', href: '/company-profile' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Company Profile', href: '/company-profile' },
  { label: 'Pre Qualification', href: '/pre-qualification' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_SERVICE_LINKS = [
  { label: 'Central AC', href: '/services/central-ac' },
  { label: 'Package AC', href: '/services/package-ac' },
  { label: 'Split AC', href: '/services/split-ac' },
  { label: 'Electrical & Plumbing', href: '/services/electrical-plumbing' },
  { label: 'Cold Store', href: '/services/cold-store' },
  { label: 'Ice Machines', href: '/services/ice-machine' },
];
