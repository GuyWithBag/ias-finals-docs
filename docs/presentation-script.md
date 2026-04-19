---
sidebar_position: 7
---

# Presentation Script

<!-- ============================================================
     This is your recording script. Use this as a guide when
     presenting and recording your final project submission.

     - Regular text = what you SAY out loud
     - [Bracketed text] = stage directions
     - HTML comments = reminders for you only (not shown on screen)
     - Estimated runtime: ~12–15 minutes
     ============================================================ -->

---

## Part 1 — Introduction

<!-- [START RECORDING] -->

Good day. For our Information Assurance and Security 2 final project, we are presenting an IT Policy and Governance proposal for **UnionBank of the Philippines**, developed using the **COBIT 2019 framework**.

This proposal is structured as a formal governance document covering four main areas: company background, a current IT assessment, the COBIT 2019 framework, and three proposed IT policies.

Let's begin.

---

## Part 2 — Company Background

<!-- [Navigate to: Company Background page] -->

UnionBank of the Philippines, or UBP, is one of the country's top universal banks, founded in 1968 and listed on the Philippine Stock Exchange. It is a member of the Aboitiz Group.

What makes UnionBank particularly relevant for this topic is its reputation as the **most digitally transformed bank in the Philippines**. They operate a fully digital banking platform, use cloud computing and AI in their operations, and run a fintech subsidiary called **UBX Philippines** that connects them to third-party developers and financial technology providers.

Because of this heavy digital footprint, IT governance is not just a best practice for UnionBank — it is **business-critical**.

---

## Part 3 — Current IT Assessment

<!-- [Navigate to: Current IT Assessment page] -->

UnionBank already has a baseline IT governance structure. They have a Board IT Steering Committee, a dedicated CISO and Data Protection Officer, and they comply with BSP regulations including **Circular 982** on IT Risk Management and **Circular 1140** on Digital Operations. They also conduct third-party IT audits regularly.

However, when we evaluate their current state against COBIT 2019, we identified **three governance gaps**:

**Gap 1** — IT risk reporting to the board is reactive, not proactive. There is no formalized Risk Register or IT Risk Appetite Statement.

**Gap 2** — Despite heavy use of cloud services and fintech integrations through UBX, there is no publicly documented third-party and cloud vendor risk management policy — which is specifically required under BSP Circular 1140.

**Gap 3** — In 2021, UnionBank customers experienced phishing attacks. The bank fixed the technical issue by improving OTP systems, but there was no formal post-incident review — meaning no documented root cause analysis or lessons-learned process.

These three gaps directly drive our three proposed policies.

---

## Part 4 — COBIT 2019 Framework

<!-- [Navigate to: COBIT 2019 Framework page] -->

COBIT 2019 is published by ISACA and is the current, latest version of the framework — it superseded COBIT 5 in 2018. It provides 40 governance and management objectives organized into five domains: EDM, APO, BAI, DSS, and MEA.

For this proposal, we used three specific objectives:

- **EDM03** — Ensured Risk Optimization, which governs how the board sets and monitors IT risk appetite
- **APO10** — Managed Vendors, which governs third-party and cloud vendor risk
- **DSS02** — Managed Service Requests and Incidents, which governs incident response and post-incident review

We chose COBIT over ITIL because COBIT is a **governance framework** — it covers policy, risk, and board-level direction — while ITIL focuses on IT service management and operations. Since our deliverable is a governance document, COBIT is the right fit.

---

## Part 5 — Proposed Policies

<!-- [Navigate to: Proposed Policies section] -->

We are proposing three formal policy documents, each with a standard structure including purpose, scope, definitions, policy statements, roles and responsibilities, and a review cycle.

---

### Policy 1 — IT Risk Management and Board Reporting Policy (UBP-GOV-001)

<!-- [Navigate to: Policy 1 page] -->

This policy addresses Gap 1. It establishes a formal, proactive IT risk governance process.

Key provisions:
- The board approves an **IT Risk Appetite Statement** annually
- The CISO maintains a centralized **IT Risk Register** updated every quarter
- A **Quarterly IT Risk Report** is submitted to the Board IT Steering Committee
- Any High or Critical risk must be escalated to the board **within 48 hours**

This transforms the bank's risk governance from reactive — where the board only hears about IT problems after they happen — to **proactive**, where risks are systematically tracked and reported.

---

### Policy 2 — Third-Party and Cloud Vendor Risk Management Policy (UBP-GOV-002)

<!-- [Navigate to: Policy 2 page] -->

This policy addresses Gap 2 and aligns with BSP Circular 1140.

Key provisions:
- All vendors are classified into three tiers by criticality — Tier 1 being the most critical
- **No vendor can be onboarded without a security assessment** approved by the CISO
- An **Approved Vendor Registry** is maintained for all authorized vendors
- Contracts must include a Right to Audit clause, data return requirements, and security standards
- Tier 1 vendors are reviewed **every six months**; all others annually
- Cloud providers must comply with BSP Circular 1140
- An **Exit Plan** must be documented for every Tier 1 vendor

---

### Policy 3 — Cybersecurity Incident Response and Post-Incident Review Policy (UBP-GOV-003)

<!-- [Navigate to: Policy 3 page] -->

This policy addresses Gap 3 and directly responds to the 2021 phishing incident.

Key provisions:
- A formal **CSIRT** — Computer Security Incident Response Team — is established with defined roles
- Incidents are classified into four severity levels: P1 Critical down to P4 Low
- All incidents must be logged in the Incident Management System **within one hour**
- Response time targets are defined for each severity level
- For P1 and P2 incidents, a **Post-Incident Review Report** must be completed within **14 days** of closure, including root cause analysis, response assessment, and actionable recommendations
- Lessons learned are fed back into the IT Risk Register and staff training

Had this policy been in place in 2021, the phishing incident would have produced a formal review, documented root causes, and systemic improvements — not just a technical patch.

---

## Part 6 — Conclusion

<!-- [Navigate back to intro or stay on final policy page] -->

In summary, UnionBank has a solid regulatory foundation but has clear governance gaps between what exists and what COBIT 2019 prescribes.

Our three proposed policies directly close those gaps:

1. **UBP-GOV-001** — Makes IT risk governance proactive at the board level
2. **UBP-GOV-002** — Formalizes vendor and cloud risk management in line with BSP Circular 1140
3. **UBP-GOV-003** — Institutionalizes incident response and post-incident learning

Together, these three policies move UnionBank from a **Level 1 (Initial)** to a **Level 3 (Defined)** maturity under COBIT 2019 — where IT governance is formally documented, standardized, and consistently enforced.

For the complete policy documents and all references, please see the written documentation. Thank you.

<!-- [STOP RECORDING] -->
