export type Job = {
  slug: string
  domain: string
  title: string
  jobType: string
  serviceId: string
  aboutRole: string
  whatYoullDo: string[]
  requiredSkills: string[]
  goodToHave: string[]
  educationalQualification: string
  whatWeLookFor: string[]
  whatYouWillWorkOn: string[]
  closingStatement: string
}

export const jobs: Job[] = [
  {
    slug: 'rtl-design-engineer',
    domain: 'RTL Design & Microarchitecture',
    title: 'RTL Design Engineer',
    jobType: 'Full-time',
    serviceId: 'rtl-design-microarchitecture',
    aboutRole: 'We are looking for a motivated RTL Design Engineer to join our semiconductor engineering team. The candidate will contribute to digital design activities across IP, subsystem, and SoC development, from microarchitecture and RTL implementation through integration and design closure.\n\nThe role involves developing synthesizable RTL, integrating reusable IPs and interfaces, supporting design quality checks, and collaborating with verification and implementation teams.',
    whatYoullDo: ['Understand architecture and specifications and translate requirements into microarchitecture and synthesizable RTL.', 'Develop and integrate Verilog/SystemVerilog RTL for IPs, blocks, subsystems, and SoC-level designs.', 'Design control logic, datapaths, FSMs, pipelines, memories, interconnects, and interface logic.', 'Integrate reusable internal and third-party IPs into larger subsystems or SoCs.', 'Define and manage interfaces, registers, clock/reset behavior, interrupts, and connectivity.', 'Perform RTL simulation, lint, CDC/RDC, and design-quality checks.', 'Analyze performance, power, area, and timing considerations at RTL.', 'Support synthesis, equivalence, and implementation teams by resolving RTL issues.', 'Collaborate with architecture, DV, DFT, physical design, firmware, and system teams.', 'Participate in design reviews, integration, documentation, and sign-off activities.'],
    requiredSkills: ['Good understanding of Digital Logic and Digital System Design.', 'Strong fundamentals in Verilog/SystemVerilog and synthesizable RTL coding.', 'Understanding of FSMs, pipelining, clocking, reset, memories, interfaces, and timing.', 'Understanding of IP integration and SoC design concepts.', 'Good problem-solving and analytical skills.'],
    goodToHave: ['Experience with AMBA, PCIe, DDR/HBM, Ethernet, CXL, USB, MIPI, NoC, or SerDes-related designs.', 'Low-power/UPF, CDC/RDC, lint, formal verification, or equivalence checking.', 'IP-XACT or reusable IP packaging/integration flows.', 'Python, TCL, Perl, or shell scripting.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['IP Design', 'Subsystem Design', 'SoC Integration', 'IP Integration', 'PCIe', 'DDR', 'HBM', 'Ethernet', 'CXL', 'AMBA', 'USB', 'MIPI', 'NoC', 'SerDes', 'RTL Simulation', 'Lint', 'CDC/RDC'],
    closingStatement: 'Build reliable and scalable RTL for next-generation semiconductor products, from reusable IP through complex SoC integration.',
  },
  {
    slug: 'design-verification-engineer',
    domain: 'Design Verification',
    title: 'Design Verification (DV) Engineer',
    jobType: 'Full-time',
    serviceId: 'design-verification',
    aboutRole: 'We are looking for a motivated Design Verification (DV) Engineer to join our semiconductor engineering team. The candidate will contribute to verification activities across IP, subsystem, and SoC levels, ensuring that designs meet functional, protocol, performance, and specification requirements.\n\nThe role involves developing reusable verification environments, integrating verification IP (VIP), creating test scenarios, debugging simulation and regression failures, and contributing to verification closure using industry standard methodologies and tools.',
    whatYoullDo: ['Develop and maintain SystemVerilog/UVM-based verification environments for IP, subsystem, and SoC-level verification.', 'Understand design specifications and translate them into verification plans, test scenarios, and coverage goals.', 'Develop testbenches, sequences, drivers, monitors, scoreboards, reference models, assertions, and functional coverage.', 'Integrate and configure protocol and memory VIPs for block, subsystem, and SoC-level verification.', 'Create and execute directed, constrained-random, protocol, error, performance, and regression tests.', 'Perform functional, integration, and system-level verification and debug.', 'Analyze simulation and regression failures and perform root-cause analysis.', 'Track functional and code coverage and identify verification gaps.', 'Support CSR/RAL verification, firmware-driven testing, and system-level scenarios where applicable.', 'Collaborate with RTL, architecture, firmware, emulation, and silicon-validation teams through verification sign off.'],
    requiredSkills: ['Good understanding of Digital Logic and Digital System Design.', 'Strong fundamentals in Verilog/SystemVerilog.', 'Understanding of UVM methodology, OOP, TLM, configuration, and reusable verification components.', 'Understanding of simulation, constrained-random verification, functional coverage, and SVA.', 'Good understanding of verification planning, debugging, and regression methodologies.', 'Basic understanding of communication protocols and interface behavior.'],
    goodToHave: ['VIP development, integration, configuration, and protocol compliance verification.', 'PCIe, DDR, HBM, Ethernet, CXL, AMBA, USB, MIPI, SPI, or I2C verification.', 'CSR/RAL, performance verification, power-aware verification, CDC/RDC, formal verification, emulation, or FPGA-based verification.', 'Python, Perl, TCL, shell, or verification automation.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['IP Verification', 'Subsystem Verification', 'SoC Verification', 'VIP Integration', 'PCIe', 'DDR', 'HBM', 'Ethernet', 'CXL', 'AMBA', 'USB', 'MIPI', 'SPI', 'I2C', 'UVM', 'SVA', 'RAL/CSR', 'Functional Coverage', 'Regression', 'Simulation & Debug'],
    closingStatement: 'Verify complex semiconductor designs from individual IP functionality through integrated subsystem and SoC behavior.',
  },
  {
    slug: 'dft-engineer',
    domain: 'Design for Test (DFT)',
    title: 'DFT Engineer',
    jobType: 'Full-time',
    serviceId: 'design-for-test',
    aboutRole: 'We are looking for a motivated DFT Engineer to join our semiconductor engineering team. The candidate will contribute to DFT activities across IP/block, subsystem, and SoC levels, from test architecture and insertion through pattern generation, verification, coverage analysis, and sign-off.',
    whatYoullDo: ['Understand DFT requirements and contribute to test architecture and methodology development.', 'Implement and integrate scan, test compression, and other DFT structures at block and SoC levels.', 'Develop and analyze ATPG patterns, fault models, and test coverage.', 'Support MBIST, LBIST, boundary scan, and IJTAG methodologies where applicable.', 'Perform DFT insertion, verification, simulation, timing-aware pattern validation, and debug.', 'Integrate DFT logic and test access structures across hierarchical designs.', 'Analyze coverage and test-quality reports and resolve DFT implementation issues.', 'Support DFT sign-off, diagnosis, and silicon-test readiness.', 'Collaborate with RTL, physical design, verification, product, manufacturing, and silicon teams.'],
    requiredSkills: ['Good understanding of Digital Design and DFT fundamentals.', 'Knowledge of scan chains, ATPG, fault models, compression, and test coverage.', 'Understanding of DFT insertion, verification, and hierarchical test concepts.', 'Good analytical and debugging skills.'],
    goodToHave: ['MBIST, LBIST, boundary scan, IJTAG, memory repair, and diagnosis.', 'IEEE 1149.1, IEEE 1500, or IEEE 1687.', 'DFT-aware timing, physical implementation, and low-power test concepts.', 'TCL, Python, Perl, or shell scripting.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['Block-Level DFT', 'SoC DFT Integration', 'Scan', 'ATPG', 'Test Compression', 'MBIST', 'LBIST', 'Boundary Scan', 'IJTAG', 'Memory Test', 'Fault Coverage', 'Diagnosis'],
    closingStatement: 'Develop test solutions that improve semiconductor testability, manufacturing coverage, diagnosis, and silicon readiness.',
  },
  {
    slug: 'physical-design-engineer',
    domain: 'Physical Design',
    title: 'Physical Design (PD) Engineer',
    jobType: 'Full-time',
    serviceId: 'physical-design',
    aboutRole: 'We are looking for a motivated Physical Design (PD) Engineer to join our semiconductor engineering team. The candidate will contribute to physical implementation across IP/block, subsystem, and full-chip/SoC levels, taking designs from synthesized netlists through physical sign-off.\n\nThe role involves physical implementation, optimization, timing closure, integration of macros and IPs, and analysis of power, performance, area, and physical constraints.',
    whatYoullDo: ['Work across floorplanning, power planning, placement, clock tree synthesis, routing, optimization, and physical sign-off.', 'Implement and optimize blocks, IPs, subsystems, and full-chip/SoC designs.', 'Integrate standard cells, memories, hard macros, analog IPs, IOs, and other physical blocks.', 'Analyze and optimize setup/hold timing, congestion, power, area, and signal integrity.', 'Perform multi-corner/multi-mode analysis and support timing closure.', 'Support clock and power distribution, physical constraints, and hierarchical implementation.', 'Perform ECO implementation and resolve physical and timing issues.', 'Analyze implementation and sign-off reports and drive design closure.', 'Collaborate with RTL, STA, DFT, PV, package, and sign-off teams.'],
    requiredSkills: ['Good understanding of the ASIC physical design flow.', 'Knowledge of floorplanning, power planning, placement, CTS, routing, and timing closure.', 'Understanding of setup/hold, clock skew, constraints, parasitics, and PPA.', 'Understanding of block-level and top-level physical integration.', 'Good analytical and debugging skills.'],
    goodToHave: ['Advanced-node implementation and hierarchical SoC implementation.', 'Low-power/UPF, IR drop, EM, signal integrity, and physical sign-off.', 'Integration of HBM, high-speed IO, memories, analog macros, and chiplet-related physical structures.', 'TCL, Python, Perl, or shell scripting.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['IP/Block Implementation', 'Subsystem Implementation', 'Full-Chip/SoC', 'Floorplanning', 'Placement', 'CTS', 'Routing', 'Timing Closure', 'PPA Optimization', 'Advanced Nodes', 'HBM', 'Chiplets'],
    closingStatement: 'Implement high-performance, power-efficient and area-conscious semiconductor designs through physical closure and sign-off.',
  },
  {
    slug: 'physical-verification-engineer',
    domain: 'Physical Verification',
    title: 'Physical Verification (PV) Engineer',
    jobType: 'Full-time',
    serviceId: 'physical-verification',
    aboutRole: 'We are looking for a motivated Physical Verification (PV) Engineer to join our semiconductor engineering team. The candidate will contribute to physical verification and sign-off across IP/block, subsystem, and full-chip levels, ensuring that layouts meet design rules, connectivity, reliability, and foundry requirements.',
    whatYoullDo: ['Perform and analyze physical verification checks for blocks, IPs, subsystems, and full-chip designs.', 'Debug DRC, LVS, ERC, antenna, density, and related physical verification violations.', 'Verify connectivity and physical implementation against design intent and source data.', 'Support parasitic extraction and extraction-based verification flows.', 'Analyze layout integration issues involving standard cells, memories, analog IPs, IOs, and hard macros.', 'Support hierarchical and full-chip physical verification closure.', 'Work with layout, analog, digital, physical design, and foundry-facing teams to resolve issues.', 'Support sign-off, tape-out readiness, methodology development, and verification automation.'],
    requiredSkills: ['Good understanding of CMOS layout and physical verification concepts.', 'Knowledge of DRC, LVS, connectivity, and physical design rules.', 'Understanding of block-level and full-chip verification concepts.', 'Good debugging, analytical, and problem-solving skills.'],
    goodToHave: ['PEX, ERC, antenna, density, reliability, and advanced-node verification.', 'Analog/custom layout and mixed-signal physical verification.', 'Hierarchical/full-chip sign-off and foundry deck understanding.', 'Scripting and physical verification-flow automation.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['IP/Block PV', 'Subsystem PV', 'Full-Chip PV', 'DRC', 'LVS', 'ERC', 'PEX', 'Antenna', 'Density', 'Reliability', 'Advanced Node Sign-Off', 'Tape-Out'],
    closingStatement: 'Help ensure that physical designs are correct, manufacturable, and ready for semiconductor tape-out.',
  },
  {
    slug: 'analog-mixed-signal-engineer',
    domain: 'Analog & Mixed-Signal',
    title: 'Analog & Mixed-Signal (AMS) Engineer',
    jobType: 'Full-time',
    serviceId: 'analog-mixed-signal',
    aboutRole: 'We are looking for a motivated Analog & Mixed-Signal (AMS) Engineer to join our semiconductor engineering team. The candidate will contribute to analog and mixed-signal development across IP, subsystem, and SoC integration levels, including circuit design, verification, modeling, layout, characterization, and sign-off activities.',
    whatYoullDo: ['Understand circuit specifications and contribute to analog/mixed-signal IP development.', 'Design, simulate, optimize, verify, or characterize analog and mixed-signal circuits.', 'Work on IPs such as ADC/DAC, PLL/DLL, SerDes, high-speed IO, power-management, clocking, RF, and sensor interfaces.', 'Support integration of analog IPs into mixed-signal subsystems and SoCs.', 'Perform PVT, process-corner, Monte Carlo, noise, stability, power, and performance analysis.', 'Support behavioral modeling, mixed-signal simulation, and top-level AMS verification.', 'Collaborate with analog/custom layout, digital, verification, package, and system teams.', 'Analyze extracted/parasitic simulation and characterization results and support design closure.'],
    requiredSkills: ['Good understanding of Analog Electronics, CMOS, and semiconductor-device fundamentals.', 'Knowledge of circuit simulation and PVT/corner analysis.', 'Understanding of analog performance parameters and design trade-offs.', 'Understanding of analog IP and mixed-signal integration concepts.', 'Good analytical and debugging skills.'],
    goodToHave: ['ADC/DAC, PLL/DLL, SerDes, high-speed IO, PMIC, RF, or memory-interface design.', 'Verilog-AMS, real-number modeling, or mixed-signal verification.', 'Custom/analog layout and parasitic-aware design.', 'Advanced-node, low-power, or high-speed analog design.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['Analog IP', 'Mixed-Signal IP', 'AMS Subsystem/SoC Integration', 'ADC/DAC', 'PLL/DLL', 'SerDes', 'High-Speed I/O', 'PMIC', 'RF', 'HBM/Memory I/O', 'Mixed-Signal Verification'],
    closingStatement: 'Develop and integrate robust analog and mixed-signal building blocks for advanced semiconductor products.',
  },
  {
    slug: 'silicon-validation-engineer',
    domain: 'Silicon Validation',
    title: 'Silicon Validation Engineer',
    jobType: 'Full-time',
    serviceId: 'silicon-validation',
    aboutRole: 'We are looking for a motivated Silicon Validation Engineer to join our semiconductor engineering team. The candidate will contribute to post-silicon bring-up, functional validation, interface validation, electrical characterization, and performance analysis at chip, subsystem, and system levels.',
    whatYoullDo: ['Develop and execute silicon bring-up, validation, and characterization plans.', 'Perform functional and electrical validation of semiconductor devices and subsystems.', 'Validate interfaces and protocol functionality against specifications.', 'Develop validation tests, firmware-assisted tests, and automation for lab and system environments.', 'Perform power, performance, thermal, and functional characterization where applicable.', 'Analyze failures using hardware, firmware, software, logs, traces, and lab measurements.', 'Perform root-cause analysis and collaborate with design, DV, firmware, system, product, and test teams.', 'Support board-level/system-level validation and regression across silicon revisions.', 'Document validation results, issues, workarounds, and readiness for productization.'],
    requiredSkills: ['Good understanding of Digital Design and semiconductor fundamentals.', 'Knowledge of hardware validation, bring-up, and debugging methodologies.', 'Understanding of communication interfaces and protocol behavior.', 'Ability to analyze test data and perform root-cause analysis.', 'Good problem-solving and analytical skills.'],
    goodToHave: ['PCIe, DDR, HBM, Ethernet, CXL, USB, MIPI, SerDes, or other high-speed interfaces.', 'Python, C/C++, automation frameworks, firmware/software debugging.', 'Oscilloscopes, logic analyzers, protocol analyzers, power measurement, and other lab equipment.', 'Silicon characterization, performance/power validation, and system-level debug.'],
    educationalQualification: 'B.E./B.Tech/M.E./M.Tech in Electronics & Communication Engineering, Electrical Engineering, Computer Engineering, VLSI, Microelectronics, or a related field.',
    whatWeLookFor: ['Strong technical fundamentals and a practical engineering mindset.', 'Ability to understand specifications and solve complex technical problems.', 'Effective debugging, analysis, and communication skills.', 'Ability to work independently and collaboratively across engineering teams.', 'Curiosity and willingness to learn new semiconductor technologies and methodologies.'],
    whatYouWillWorkOn: ['Chip Bring-Up', 'Subsystem/System Validation', 'PCIe', 'DDR', 'HBM', 'Ethernet', 'CXL', 'USB', 'MIPI', 'SerDes', 'Firmware-Assisted Validation', 'Power & Performance Characterization', 'Silicon Debug'],
    closingStatement: 'Validate real silicon and turn measured device behavior into reliable, production-ready semiconductor products.',
  }
]

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug)
}