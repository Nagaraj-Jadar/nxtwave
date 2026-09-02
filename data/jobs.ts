export type Job = {
  slug: string
  title: string
  department: string
  location: string
  workModel: string
  employmentType: string
  experienceLevel: string
  overview: string
  responsibilities: string[]
  requiredQualifications: string[]
  preferredQualifications: string[]
  skills: string[]
  benefits: string[]
}

export const jobs: Job[] = [
  {
    slug: 'sr-rtl-design-engineer',
    title: 'Sr. RTL Design Engineer',
    department: 'VLSI / Logic Design',
    location: 'Remote / Hybrid',
    workModel: 'Remote / Hybrid',
    employmentType: 'Full-time',
    experienceLevel: 'Senior (6+ years)',
    overview:
      'We are looking for a Senior RTL Design Engineer to own microarchitecture and RTL implementation for complex SoC subsystems. You will translate architectural specifications into synthesizable, high-quality RTL and drive design closure alongside verification and physical design teams.',
    responsibilities: [
      'Develop microarchitecture specifications and synthesizable RTL in SystemVerilog.',
      'Own block-level design from specification through synthesis and timing closure.',
      'Implement low-power design techniques (clock gating, power domains, UPF).',
      'Collaborate with verification teams on testbench planning and coverage closure.',
      'Perform lint, CDC, and RDC analysis to ensure clean, robust designs.',
    ],
    requiredQualifications: [
      'Bachelor’s or Master’s in Electrical/Electronics Engineering or related field.',
      '6+ years of hands-on RTL design experience on production silicon.',
      'Strong proficiency in SystemVerilog and digital design fundamentals.',
      'Experience with synthesis, timing constraints (SDC), and STA concepts.',
    ],
    preferredQualifications: [
      'Experience with high-speed protocols (PCIe, USB, Ethernet, LPDDR).',
      'Familiarity with low-power methodologies (UPF/CPF).',
      'Exposure to scripting in Python, Tcl, or Perl for design automation.',
    ],
    skills: ['SystemVerilog', 'RTL Design', 'CDC/LINT', 'Low-Power Design', 'Synthesis', 'STA'],
    benefits: [
      'Work on leading-edge sub-5nm silicon programs.',
      'Flexible remote / hybrid working model.',
      'Competitive compensation and performance incentives.',
      'Continuous learning and EDA tool certification support.',
    ],
  },
  {
    slug: 'physical-design-lead',
    title: 'Physical Design Lead',
    department: 'VLSI / Physical Design',
    location: 'San Jose, CA',
    workModel: 'On-site',
    employmentType: 'Full-time',
    experienceLevel: 'Lead (10+ years)',
    overview:
      'As a Physical Design Lead, you will drive full-chip and block-level physical implementation from floorplanning through final sign-off on advanced process nodes, mentoring a team of PD engineers to first-pass success.',
    responsibilities: [
      'Lead floorplanning, placement, CTS, and routing on advanced nodes.',
      'Own MCMM timing closure and physical verification sign-off.',
      'Manage power integrity (IR/EM) and signal integrity analysis.',
      'Coordinate across front-end, DFT, and packaging teams.',
      'Mentor and review the work of physical design engineers.',
    ],
    requiredQualifications: [
      'Master’s in Electrical Engineering or equivalent experience.',
      '10+ years in physical design with tape-out ownership.',
      'Expertise with Innovus / ICC2 and PrimeTime.',
      'Deep understanding of sub-7nm implementation challenges.',
    ],
    preferredQualifications: [
      'Experience leading distributed engineering teams.',
      'Knowledge of hierarchical design and block partitioning.',
      'Familiarity with EM/IR and reliability sign-off flows.',
    ],
    skills: ['Floorplanning', 'PnR', 'MCMM Timing', 'PrimeTime', 'DRC/LVS', 'Innovus/ICC2'],
    benefits: [
      'Lead high-visibility tape-out programs.',
      'Relocation assistance and comprehensive benefits.',
      'Equity participation for lead roles.',
      'Collaborative, engineering-first culture.',
    ],
  },
  {
    slug: 'soc-architect',
    title: 'SoC Architect',
    department: 'SoC Architecture',
    location: 'Austin, TX',
    workModel: 'Hybrid',
    employmentType: 'Full-time',
    experienceLevel: 'Principal (12+ years)',
    overview:
      'We are seeking an SoC Architect to define next-generation system architectures spanning compute, memory, interconnect, and power. You will set the technical direction that guides design, verification, and implementation teams.',
    responsibilities: [
      'Define SoC micro-architecture, interconnect topology, and memory hierarchy.',
      'Perform performance, power, and area (PPA) trade-off analysis.',
      'Drive IP selection and subsystem partitioning decisions.',
      'Author architecture specifications and design guidelines.',
      'Collaborate with customers to align architecture with product goals.',
    ],
    requiredQualifications: [
      'Master’s or PhD in Computer Engineering or related field.',
      '12+ years of SoC architecture and design experience.',
      'Strong background in bus protocols and interconnect fabrics.',
      'Proven track record of shipped, high-complexity SoCs.',
    ],
    preferredQualifications: [
      'Experience with AI/ML accelerator or automotive architectures.',
      'Knowledge of cache coherency and NoC design.',
      'Modeling experience (SystemC / architectural simulators).',
    ],
    skills: ['SoC Architecture', 'PPA Analysis', 'Interconnect', 'Memory Systems', 'SystemC'],
    benefits: [
      'Shape the technical direction of flagship products.',
      'Hybrid work flexibility.',
      'Principal-level compensation and equity.',
      'Access to advanced research and tooling.',
    ],
  },
  {
    slug: 'dft-engineer',
    title: 'DFT Engineer',
    department: 'VLSI / DFT',
    location: 'Bangalore, IN',
    workModel: 'Hybrid',
    employmentType: 'Full-time',
    experienceLevel: 'Mid–Senior (4+ years)',
    overview:
      'Join our DFT team to architect and implement test strategies that maximize fault coverage while minimizing test cost across our SoC portfolio.',
    responsibilities: [
      'Implement scan insertion, ATPG, MBIST, and boundary scan.',
      'Develop DFT architecture and test compression strategies.',
      'Generate and validate test patterns; analyze fault coverage.',
      'Support wafer sort and final test pattern bring-up.',
      'Collaborate with PD teams on DFT-aware physical implementation.',
    ],
    requiredQualifications: [
      'Bachelor’s or Master’s in ECE or related field.',
      '4+ years of DFT implementation experience.',
      'Hands-on with ATPG tools and scan methodologies.',
      'Understanding of fault models and coverage metrics.',
    ],
    preferredQualifications: [
      'Experience with MBIST and hierarchical DFT.',
      'Familiarity with IEEE 1500/1687 standards.',
      'Scripting proficiency (Python / Tcl).',
    ],
    skills: ['ATPG', 'Scan', 'MBIST', 'BSCAN', 'JTAG', 'Fault Coverage'],
    benefits: [
      'Work across diverse silicon programs.',
      'Hybrid working model in our Bangalore engineering hub.',
      'Structured career growth and mentorship.',
      'Comprehensive health and wellness benefits.',
    ],
  },
  {
    slug: 'analog-layout-designer',
    title: 'Analog Layout Designer',
    department: 'VLSI / Analog',
    location: 'Remote',
    workModel: 'Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Mid–Senior (5+ years)',
    overview:
      'We are hiring an Analog Layout Designer to craft precision custom layouts for high-performance analog and mixed-signal circuits, ensuring matching, isolation, and reliability across process corners.',
    responsibilities: [
      'Create custom analog and mixed-signal layouts on advanced nodes.',
      'Implement matching, shielding, and device isolation techniques.',
      'Run and clean DRC, LVS, antenna, and reliability checks.',
      'Collaborate with circuit designers on floorplan and constraints.',
      'Optimize layout for parasitics, EM, and area.',
    ],
    requiredQualifications: [
      'Diploma / Bachelor’s in Electronics or equivalent experience.',
      '5+ years of analog / custom layout experience.',
      'Proficiency with Cadence Virtuoso layout tools.',
      'Strong grasp of analog layout matching and reliability rules.',
    ],
    preferredQualifications: [
      'Experience with SerDes, PMIC, or RF layouts.',
      'Knowledge of electromigration and IR-drop mitigation.',
      'FinFET / advanced-node custom layout experience.',
    ],
    skills: ['Custom Layout', 'Cadence Virtuoso', 'DRC/LVS', 'Matching', 'EM/Antenna'],
    benefits: [
      'Fully remote role with flexible hours.',
      'Exposure to cutting-edge AMS designs.',
      'Competitive compensation.',
      'Supportive, technically deep team.',
    ],
  },
]

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug)
}
