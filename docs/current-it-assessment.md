---
sidebar_position: 3
---

# Current IT Assessment

## Assessment of UnionBank's Existing IT Processes and Policies

---

### 1. Overview

This section evaluates UnionBank's current IT governance state based on publicly available information including annual reports, integrated reports, BSP regulatory disclosures, and documented security incidents. The assessment is organized around three areas: regulatory compliance, internal governance practices, and identified gaps.

---

### 2. Existing IT Governance Strengths

UnionBank has several established IT governance structures that demonstrate a baseline level of maturity:

#### 2.1 Board-Level IT Oversight

UnionBank maintains a **Board IT Steering Committee** responsible for approving IT strategies, overseeing major technology investments, and reviewing IT risk. The existence of a board-level committee indicates that IT governance is recognized at the highest organizational level.

#### 2.2 Dedicated Security Leadership

The bank has a designated **Chief Information Security Officer (CISO)** and a **Data Protection Officer (DPO)**, both of which are positions required under BSP Circular 982 and RA 10173 respectively. These roles indicate an institutional commitment to information security and data privacy governance.

#### 2.3 BSP Regulatory Compliance Baseline

UnionBank operates within the BSP's supervised financial institutions framework. Their disclosures indicate compliance with:

- **BSP Circular 982** — IT Risk Management (including IT risk assessment, IT audit, and business continuity requirements)
- **BSP Circular 1140** — Digital Operations Framework (cloud risk management, outsourcing risk, operational resilience)
- **RA 10173** — Data Privacy Act (privacy notices, consent mechanisms, data subject rights management)

#### 2.4 Third-Party IT Audit

UnionBank undergoes regular external IT audits by independent third parties, as required by BSP. This provides periodic validation of their IT controls.

#### 2.5 Business Continuity Planning

The bank maintains documented business continuity and disaster recovery plans for its critical IT systems, including core banking, digital channels, and data centers.

---

### 3. Identified Governance Gaps

Despite the strengths above, a COBIT 2019-based evaluation reveals three significant governance gaps:

---

#### Gap 1 — Reactive Board-Level IT Risk Reporting

**Description:**
While UnionBank has a Board IT Steering Committee, publicly available disclosures do not indicate a formalized, structured, and **proactive** IT risk reporting process. Board-level reporting in many Philippine banks — including those subject to BSP audit — has been noted to be event-driven (i.e., triggered by incidents) rather than systematic and forward-looking.

**Evidence:**
BSP's own Supervisory Assessment Framework has cited IT risk governance reporting as a recurring improvement area across supervised banks. UnionBank's annual report mentions IT risk management but does not describe a formal **Risk Register** or **Risk Appetite Statement** specifically for IT.

**COBIT 2019 Objective Violated:**
> **EDM03 — Ensured Risk Optimization**: The board should set the enterprise risk appetite, direct risk management activities, and monitor that IT-related risks do not exceed acceptable thresholds.

**Impact:**
Without proactive reporting, the board cannot make informed decisions on IT risk until after an incident has occurred — reducing the organization's ability to prevent or mitigate risks.

---

#### Gap 2 — No Formalized Third-Party and Cloud Vendor Risk Management Policy

**Description:**
UnionBank relies extensively on third-party technology providers and cloud platforms — both directly and through its fintech subsidiary UBX Philippines. However, there is no publicly documented policy that formally governs the **security assessment, ongoing monitoring, and contractual risk controls** applied to these vendors.

**Evidence:**
BSP Circular 1140 (2022) specifically mandates that banks establish a **technology risk management framework for outsourced and cloud-based services**. While UnionBank is expected to comply, no public-facing vendor risk management policy has been disclosed. The 2022 circular was issued precisely because this gap was widespread across the industry.

**COBIT 2019 Objective Violated:**
> **APO10 — Managed Vendors**: The organization should identify, evaluate, select, monitor, and manage vendors and their associated risks throughout the relationship lifecycle.

**Impact:**
Unmanaged vendor risk can result in supply chain attacks, data breaches through third-party access, and regulatory penalties for non-compliance with BSP Circular 1140.

---

#### Gap 3 — Absence of Formal Post-Incident Review Process

**Description:**
In 2021, UnionBank customers experienced phishing attacks that resulted in unauthorized transactions. The bank responded by strengthening its one-time password (OTP) systems. However, there was no public disclosure of a **formal post-incident review** — a structured process to analyze the root cause, assess the effectiveness of the response, and implement systemic improvements.

**Evidence:**
Customer reports and media coverage from 2021 document the phishing incidents. UnionBank's public response focused on technical remediation (OTP enhancements) but did not reference a formal incident review or lessons-learned process.

**COBIT 2019 Objective Violated:**
> **DSS02 — Managed Service Requests and Incidents**: Incidents must be classified, escalated, resolved, and reviewed. Post-incident reviews must be conducted to identify root causes and prevent recurrence.

**Impact:**
Without a formal post-incident review process, the organization risks repeating the same vulnerabilities, failing to identify systemic weaknesses, and missing the opportunity to improve security controls based on real-world events.

---

### 4. Gap Summary Table

| # | Gap | Area Affected | COBIT 2019 Objective | Severity |
|---|-----|---------------|----------------------|----------|
| 1 | Reactive board IT risk reporting | Governance | EDM03 | High |
| 2 | No vendor/cloud risk management policy | Risk Management | APO10 | High |
| 3 | No post-incident review process | Operations | DSS02 | Medium–High |

---

### 5. Assessment Conclusion

UnionBank demonstrates a **foundational level** of IT governance maturity, driven primarily by BSP regulatory requirements. However, there are clear gaps between their current state and the structured governance model prescribed by COBIT 2019. The three gaps identified represent areas where formal policies do not exist or are not publicly enforced — and where incidents have already demonstrated the real-world consequences of those gaps.

The proposed policies in this document directly address each identified gap.
