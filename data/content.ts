import {
  Cpu,
  ShieldCheck,
  Users,
  Gauge,
  CircuitBoard,
  SquareStack,
  LayoutGrid,
  Waves,
  Microscope,
  Car,
  BrainCircuit,
  RadioTower,
  Wifi,
  Factory,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react'

export type Strength = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const strengths: Strength[] = [
  {
    number: '01',
    title: 'Deep VLSI Expertise',
    description:
      'Our team brings decades of combined experience across RTL design, Functional verification, DFT and Physical Design & Verification. This depth of expertise ensures your silicon architecture is built on a solid foundation from day one, reducing costly redesigns and accelerating design closure.',
    icon: Cpu,
  },
  {
    number: '02',
    title: 'Quality-First Approach',
    description:
      'Quality is embedded into every stage of our design flow. Through rigorous testing, validation, and sign-off checks at each milestone, we minimize risk and maximize first-pass silicon success and yield.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Flexible Engagement Models',
    description:
      'We understand that every project has different needs. Whether you require full turnkey project development or a focused technical partnership for a specific design phase, we tailor our engagement model to fit your goals, timeline, and budget.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Faster Time-to-Market',
    description:
      'By leveraging industry-leading EDA tools and optimized, proven workflows, we help you accelerate your silicon development cycle — without ever compromising on technical excellence or reliability.',
    icon: Gauge,
  },
]

export type Capability = {
  number: string
  title: string
  points: string[]
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Silicon Architecture & Digital Front-End',
    icon: CircuitBoard,
    points: [
      'RTL Microarchitecture Development (SystemVerilog, VHDL, Chisel)',
      'SoC / Subsystem Integration & Multi-Clock Domain Management (CDC, LINT)',
      'Low-Power Architecture Implementation (UPF/CPF, Power-Aware Design)',
      'Protocol IP Integration (PCIe Gen5/6, USB 4, Ethernet, CXL, LPDDR5)',
    ],
  },
  {
    number: '02',
    title: 'Functional Verification & Emulation',
    icon: ShieldCheck,
    points: [
      'Advanced UVM/SystemVerilog Testbench Architecture & Assertion-Based Verification',
      'Hardware Emulation & FPGA Prototyping (Palladium, ZeBu, Zynq UltraScale)',
      'Gate-Level Simulation (GLS) & Power-Aware Verification',
      'Formal Verification & Property Checking (JasperGold / VC Formal)',
    ],
  },
  {
    number: '03',
    title: 'Physical Implementation & Sign-off',
    icon: LayoutGrid,
    points: [
      'Sub-5nm Hierarchical & Flat Floorplanning, Placement & Route (Innovus / ICC2)',
      'Multi-Corner Multi-Mode (MCMM) Timing Closure & Static Timing Analysis (PrimeTime)',
      'Design for Testability (DFT: ATPG, MBIST, BSCAN, JTAG) & Fault Coverage',
      'Physical Verification (DRC, LVS, Antenna) & IR/EM Drop Power Integrity Sign-off',
    ],
  },
  {
    number: '04',
    title: 'Analog & Mixed-Signal (AMS)',
    icon: Waves,
    points: [
      'High-Speed Data Converters (ADC/DAC) & Power Management ICs (PMIC)',
      'Precision Custom Layout & AMS Co-Simulation (Verilog-AMS / RNM)',
      'SerDes PHY & High-Frequency RF Transceiver Design',
      'Standard Cell Library & Custom Memory Layout Optimization',
    ],
  },
  {
    number: '05',
    title: 'Silicon Prototyping & System Board',
    icon: SquareStack,
    points: [
      'High-Density Multilayer PCB Design & High-Speed Signal Integrity (SI/PI) Analysis',
      'Hardware/Software Partitioning & Pre-Silicon Firmware Bring-up',
      'Custom FPGA Retargeting & Glue-Logic Acceleration',
      'Multi-GHz Differential Routing & EMI/EMC Compliance Verification',
    ],
  },
  {
    number: '06',
    title: 'Post-Silicon Validation & Production',
    icon: Microscope,
    points: [
      'Silicon Bring-up, Characterization & Voltage/Temperature Stress Testing',
      'Automated Test Equipment (ATE) Program Development & Wafer Sort',
      'Root-Cause Failure Analysis (SEM / FIB Diagnostics)',
      'Production Yield Optimization & Reliability Qualification',
    ],
  },
]

export type Industry = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const industries: Industry[] = [
  {
    number: '01',
    title: 'Automotive ICs',
    description: 'Compute, Safety, High-Integrity Systems',
    icon: Car,
  },
  {
    number: '02',
    title: 'AI / ML Accelerators',
    description: 'High-Performance Compute, NPU, GPU',
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: '5G / RF Systems',
    description: 'RFIC, mmWave, Connectivity',
    icon: RadioTower,
  },
  {
    number: '04',
    title: 'IoT Solutions',
    description: 'Low-Power, Secure, Connected Devices',
    icon: Wifi,
  },
  {
    number: '05',
    title: 'Industrial Edge',
    description: 'Edge Computing, Control, Automation',
    icon: Factory,
  },
  {
    number: '06',
    title: 'Medical & Biotech',
    description: 'Precision Systems, Embedded Electronics',
    icon: HeartPulse,
  },
]

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'REVIEW',
    description: 'Technical assessment by our lead architects.',
  },
  {
    number: '02',
    title: 'DEEP-DIVE',
    description: 'Architecture and verification discussions.',
  },
  {
    number: '03',
    title: 'DELIVER',
    description: 'Fast-track integration into our engineering nodes.',
  },
]
