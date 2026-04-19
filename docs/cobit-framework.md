---
sidebar_position: 4
---

# COBIT 2019 Framework

## Overview and Application to This Proposal

---

### 1. What is COBIT?

**COBIT** (Control Objectives for Information and Related Technologies) is an IT governance and management framework published by **ISACA** (Information Systems Audit and Control Association). It provides a comprehensive set of principles, practices, and tools that organizations can use to align IT with business goals, manage IT-related risks, and ensure regulatory compliance.

COBIT is used by organizations worldwide — including banks, government agencies, and multinational corporations — as the authoritative reference for IT governance.

---

### 2. COBIT 2019 — The Current Version

**COBIT 2019** is the latest edition of the framework, released in late 2018. It superseded COBIT 5 (2012) and introduced significant improvements:

| Feature | COBIT 5 | COBIT 2019 |
|---------|---------|------------|
| Governance objectives | 37 processes | **40 governance & management objectives** |
| Design approach | Fixed model | **Flexible design factors** (tailored to organization size, risk profile, etc.) |
| Performance management | Capability levels | **Maturity levels** (0–5) aligned to CMMI |
| Focus areas | General IT governance | Adds **focus areas** (e.g., cybersecurity, DevOps, cloud) |

COBIT 2019 is the standard referenced in this proposal.

---

### 3. COBIT 2019 Structure

COBIT 2019 organizes all governance and management objectives into **five domains**:

| Domain | Code | Focus |
|--------|------|-------|
| Evaluate, Direct and Monitor | **EDM** | Board-level governance — setting direction, evaluating performance, monitoring compliance |
| Align, Plan and Organize | **APO** | Strategic alignment of IT with business goals, planning, risk management |
| Build, Acquire and Implement | **BAI** | IT project delivery, change management, asset management |
| Deliver, Service and Support | **DSS** | IT operations, service delivery, incident management |
| Monitor, Evaluate and Assess | **MEA** | Performance monitoring, internal controls, compliance assessment |

---

### 4. The Three COBIT 2019 Objectives Used in This Proposal

This proposal applies three specific COBIT 2019 objectives that directly correspond to the governance gaps identified in UnionBank's current IT posture.

---

#### 4.1 EDM03 — Ensured Risk Optimization

**Domain:** EDM (Evaluate, Direct and Monitor)
**Purpose:** Ensure that IT-related risks are identified, managed, and kept within the enterprise's agreed risk appetite.

**Key activities under EDM03:**
- The board evaluates and approves the enterprise's IT risk tolerance and appetite
- Management provides regular, structured risk reports to the board
- Risk thresholds are defined and monitored continuously
- The board directs risk management activities — not just receives incident reports

**Why it applies to UnionBank:**
UnionBank's board-level IT risk reporting is reactive. EDM03 requires a **proactive, structured** risk governance process where the board actively sets and monitors risk appetite — not just responds to incidents.

---

#### 4.2 APO10 — Managed Vendors

**Domain:** APO (Align, Plan and Organize)
**Purpose:** Manage IT-related services and service levels from third-party suppliers to meet business requirements.

**Key activities under APO10:**
- Identify and categorize all IT vendors by criticality
- Conduct security assessments before onboarding vendors
- Establish contractual controls (right to audit, security requirements, SLAs)
- Continuously monitor vendor performance and security posture
- Maintain an exit strategy for each critical vendor

**Why it applies to UnionBank:**
UnionBank's extensive use of cloud services and fintech integrations through UBX creates a broad vendor risk surface. APO10 provides the structure to govern this risk — which also aligns directly with **BSP Circular 1140**.

---

#### 4.3 DSS02 — Managed Service Requests and Incidents

**Domain:** DSS (Deliver, Service and Support)
**Purpose:** Provide timely and effective response to all IT incidents and service requests, minimizing business impact and enabling continuous learning.

**Key activities under DSS02:**
- Define and implement an incident classification scheme (severity levels)
- Establish a Computer Security Incident Response Team (CSIRT)
- Log, track, and resolve all incidents within defined SLAs
- Conduct **post-incident reviews** for significant events
- Feed lessons learned back into risk management and security controls

**Why it applies to UnionBank:**
The 2021 phishing incidents exposed the absence of a formal post-incident review process. DSS02 requires not just incident response, but structured **learning and improvement** after each significant event.

---

### 5. COBIT 2019 Maturity Levels

COBIT 2019 uses a **0–5 maturity scale** to assess how well an organization performs each governance objective:

| Level | Label | Description |
|-------|-------|-------------|
| 0 | Incomplete | Process is not implemented or does not achieve its purpose |
| 1 | Initial | Process achieves its purpose through ad hoc, unmanaged activity |
| 2 | Managed | Process is planned, monitored, and adjusted |
| 3 | Defined | Process is documented and follows a standard procedure |
| 4 | Quantitatively Managed | Process is measured and controlled using metrics |
| 5 | Optimizing | Process is continuously improved based on data |

**Estimated current maturity for UnionBank:**

| Objective | Current Estimated Level | Target Level (Proposed) |
|-----------|------------------------|-------------------------|
| EDM03 — Risk Optimization | Level 1 (Initial) | Level 3 (Defined) |
| APO10 — Managed Vendors | Level 1 (Initial) | Level 3 (Defined) |
| DSS02 — Incident Management | Level 2 (Managed) | Level 3 (Defined) |

The proposed policies in this document are designed to move UnionBank from its current state to **Level 3 (Defined)** — where processes are formally documented, standardized, and consistently followed across the organization.

---

### 6. Why COBIT 2019 Over ITIL

Both COBIT 2019 and ITIL (IT Infrastructure Library) are widely used IT frameworks, but they serve different purposes:

| | COBIT 2019 | ITIL 4 |
|---|------------|--------|
| Primary focus | **IT governance and management** | IT service management |
| Who uses it | Boards, executives, auditors | IT operations teams |
| Best for | Policy, risk, compliance, audit | Service delivery, helpdesk, SLAs |
| Regulatory alignment | Strong (referenced in BSP, SEC frameworks) | Limited |
| Scope of this project | **Governance document** | Service operations |

Since the deliverable of this project is an **IT Policy and Governance Document**, COBIT 2019 is the appropriate framework. ITIL could supplement operational procedures but does not address the governance and board-level concerns that are central to this proposal.
