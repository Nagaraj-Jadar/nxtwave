export const siteConfig = {
  name: 'NXTwave Semiconductor',
  tagline: 'NEXT TECHNOLOGY. NEXT POSSIBILITIES.',
  description:
    'End-to-end semiconductor design expertise from architecture to GDSII and post-silicon validation. Engineered for first-pass success.',
  contact: {
    address: 'Bengaluru, Karnataka, India',
    email: 'operations@nxtwavesemi.com',
  },
}

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/capabilities' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export const serviceLinks = [
  { title: 'RTL Design & Microarchitecture', id: 'rtl-design-microarchitecture', href: '/capabilities/rtl-design-microarchitecture' },
  { title: 'Design Verification', id: 'design-verification', href: '/capabilities/design-verification' },
  { title: 'Design for Test (DFT)', id: 'design-for-test', href: '/capabilities/design-for-test' },
  { title: 'Physical Design', id: 'physical-design', href: '/capabilities/physical-design' },
  { title: 'Physical Verification', id: 'physical-verification', href: '/capabilities/physical-verification' },
  { title: 'Analog & Mixed-Signal', id: 'analog-mixed-signal', href: '/capabilities/analog-mixed-signal' },
  { title: 'Silicon Validation', id: 'silicon-validation', href: '/capabilities/silicon-validation' },
]

export const featuredServiceLinks = serviceLinks.slice(0, 4)

