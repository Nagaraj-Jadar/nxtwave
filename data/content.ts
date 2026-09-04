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
  type LucideIcon,
} from 'lucide-react'

export type Strength = {
  title: string
  description: string
  icon: LucideIcon
}

export const strengths: Strength[] = [
  {
    title: 'Deep VLSI Expertise',
    description:
      'Decades of expertise across RTL design, verification, DFT, and physical design—delivering robust silicon solutions from architecture to sign-off.',
    icon: Cpu,
  },
  {
    title: 'Quality-First Approach',
    description:
      'Rigorous verification and milestone-driven quality checks reduce design risk and help deliver reliable first-pass silicon.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Engagement Models',
    description:
      'From complete project execution to specialized engineering support, we tailor our engagement to your goals, timeline, and requirements.',
    icon: Users,
  },
  {
    title: 'Faster Time-to-Market',
    description:
      'Proven workflows and industry-leading EDA tools accelerate development while maintaining engineering quality and reliability.',
    icon: Gauge,
  },
]

export type Capability = {
  title: string
  id: string
  description: string
  points: string[]
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    title: 'Silicon Architecture & Digital Front-End',
    id: 'silicon-architecture',
    description: 'Architecture, RTL, and integration expertise for complex, high-performance silicon systems.',
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
    id: 'functional-verification',
    description: 'Verification expertise that builds confidence from design intent through hardware validation.',
    icon: ShieldCheck,
    points: [
      'Advanced UVM/SystemVerilog Testbench Architecture & Assertion-Based Verification',
      'Hardware Emulation & FPGA Prototyping (Palladium, ZeBu, Zynq UltraScale)',
      'Gate-Level Simulation (GLS) & Power-Aware Verification',
      'Formal Verification & Property Checking (JasperGold / VC Formal)',
    ],
  },
  {
    title: 'Physical Implementation & Sign-off',
    id: 'physical-implementation',
    description: 'Implementation and sign-off expertise for predictable performance, power, area, and manufacturability.',
    icon: LayoutGrid,
    points: [
      'Sub-5nm Hierarchical & Flat Floorplanning, Placement & Route (Innovus / ICC2)',
      'Multi-Corner Multi-Mode (MCMM) Timing Closure & Static Timing Analysis (PrimeTime)',
      'Design for Testability (DFT: ATPG, MBIST, BSCAN, JTAG) & Fault Coverage',
      'Physical Verification (DRC, LVS, Antenna) & IR/EM Drop Power Integrity Sign-off',
    ],
  },
  {
    title: 'Analog & Mixed-Signal (AMS)',
    id: 'analog-mixed-signal',
    description: 'Precision analog, mixed-signal, RF, and custom-layout engineering for demanding interfaces.',
    icon: Waves,
    points: [
      'High-Speed Data Converters (ADC/DAC) & Power Management ICs (PMIC)',
      'Precision Custom Layout & AMS Co-Simulation (Verilog-AMS / RNM)',
      'SerDes PHY & High-Frequency RF Transceiver Design',
      'Standard Cell Library & Custom Memory Layout Optimization',
    ],
  },
  {
    title: 'Silicon Prototyping & System Board',
    id: 'silicon-prototyping',
    description: 'System-level prototyping and board expertise that speeds integration and pre-silicon readiness.',
    icon: SquareStack,
    points: [
      'High-Density Multilayer PCB Design & High-Speed Signal Integrity (SI/PI) Analysis',
      'Hardware/Software Partitioning & Pre-Silicon Firmware Bring-up',
      'Custom FPGA Retargeting & Glue-Logic Acceleration',
      'Multi-GHz Differential Routing & EMI/EMC Compliance Verification',
    ],
  },
  {
    title: 'Post-Silicon Validation & Production',
    id: 'post-silicon-validation',
    description: 'Bring-up, characterization, and production support that carries silicon confidently into volume.',
    icon: Microscope,
    points: [
      'Silicon Bring-up, Characterization & Voltage/Temperature Stress Testing',
      'Automated Test Equipment (ATE) Program Development & Wafer Sort',
      'Root-Cause Failure Analysis (SEM / FIB Diagnostics)',
      'Production Yield Optimization & Reliability Qualification',
    ],
  },
]

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
