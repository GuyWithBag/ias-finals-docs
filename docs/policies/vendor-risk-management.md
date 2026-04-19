---
sidebar_position: 2
---

# Policy 2 — Third-Party and Cloud Vendor Risk Management Policy

## Document Control

| Field | Details |
|-------|---------|
| **Policy Title** | Third-Party and Cloud Vendor Risk Management Policy |
| **Policy ID** | UBP-GOV-002 |
| **Version** | 1.0 |
| **Effective Date** | April 17, 2026 |
| **Review Cycle** | Annual |
| **Document Owner** | Chief Information Officer (CIO) |
| **Approved By** | Board IT Steering Committee |
| **COBIT 2019 Reference** | APO10 — Managed Vendors |
| **Regulatory Basis** | BSP Circular No. 1140 (2022) |

---

## 1. Purpose

This policy establishes a formal framework for identifying, assessing, selecting, monitoring, and managing third-party IT vendors and cloud service providers engaged by UnionBank of the Philippines. It ensures that vendor relationships are governed in a manner that protects the bank's information assets, maintains operational resilience, and complies with BSP Circular No. 1140 on Digital Operations.

---

## 2. Scope

This policy applies to:

- All third-party IT vendors providing software, hardware, infrastructure, or managed services to UnionBank
- All cloud service providers (public, private, or hybrid) used by UnionBank or its subsidiaries including UBX Philippines
- All technology outsourcing arrangements
- All internal units engaged in vendor procurement and management, including IT, Procurement, Legal, and Compliance
- All employees and contractors who initiate, manage, or oversee vendor relationships

This policy does **not** apply to non-IT vendor relationships (e.g., office supplies, facilities management) unless those vendors have access to UnionBank information systems or data.

---

## 3. Definitions

| Term | Definition |
|------|------------|
| **Third-Party Vendor** | Any external organization providing IT-related products or services to UnionBank |
| **Cloud Service Provider (CSP)** | A vendor providing computing resources (infrastructure, platform, or software) over the internet on a pay-as-you-use basis |
| **Critical Vendor** | A vendor whose service failure would materially impact UnionBank's operations, customer service, or regulatory compliance |
| **Approved Vendor Registry** | The centralized list of vendors that have been assessed, approved, and are authorized for engagement |
| **Vendor Risk Assessment** | A structured evaluation of a vendor's security posture, financial stability, compliance status, and operational capability |
| **Right to Audit** | A contractual provision granting UnionBank the right to inspect or commission an inspection of the vendor's systems and controls |
| **Exit Plan** | A documented plan for transitioning services away from a vendor in the event of contract termination, vendor failure, or emergency |

---

## 4. Policy Statements

### 4.1 Vendor Classification

4.1.1 All third-party IT vendors **shall** be classified by criticality upon onboarding and reviewed annually:

| Tier | Criteria | Examples |
|------|----------|---------|
| **Tier 1 — Critical** | Vendor failure would cause material disruption to banking operations or expose customer data | Core banking system providers, cloud infrastructure providers, payment network processors |
| **Tier 2 — Significant** | Vendor failure would impact specific business units or functions | Analytics platforms, HR systems, CRM systems |
| **Tier 3 — Standard** | Vendor provides non-critical services with limited data access | Office productivity tools, non-sensitive SaaS applications |

4.1.2 Tier 1 vendors **shall** be subject to the most rigorous assessment and monitoring requirements under this policy.

### 4.2 Vendor Onboarding and Security Assessment

4.2.1 **No vendor shall be onboarded** without completing a security assessment approved by the CISO.

4.2.2 The security assessment **shall** include, at a minimum:
- Review of the vendor's information security policies and certifications (e.g., ISO 27001, SOC 2 Type II)
- Assessment of the vendor's data handling and encryption practices
- Review of the vendor's business continuity and disaster recovery capabilities
- Background check on the vendor's financial stability
- Review of any known security incidents or regulatory sanctions involving the vendor
- For cloud providers: compliance with BSP Circular 1140 requirements for cloud risk management

4.2.3 For **Tier 1 vendors**, the assessment **shall** also include:
- On-site or virtual security inspection, or review of a third-party audit report (e.g., SOC 2 Type II report)
- Penetration testing results or vulnerability assessment reports (within the past 12 months)

4.2.4 Assessment results **shall** be documented and retained for a minimum of **five (5) years**.

### 4.3 Approved Vendor Registry

4.3.1 The IT Division **shall** maintain a centralized **Approved Vendor Registry** listing all authorized vendors with:
- Vendor name and contact information
- Vendor tier classification
- Services provided
- Date of last security assessment
- Date of next scheduled review
- Certification and compliance status

4.3.2 Only vendors listed in the Approved Vendor Registry may be engaged for IT services. Any engagement with an unapproved vendor requires prior written approval from the CIO and CISO.

### 4.4 Contractual Security Requirements

4.4.1 All IT vendor contracts **shall** include the following provisions:

| Contractual Clause | Requirement |
|-------------------|-------------|
| **Data Protection** | Vendor must comply with RA 10173 (Data Privacy Act) and handle UnionBank data only as directed |
| **Security Standards** | Vendor must maintain security controls equivalent to or exceeding UnionBank's information security standards |
| **Incident Notification** | Vendor must notify UnionBank within **24 hours** of any security incident involving UnionBank data or systems |
| **Right to Audit** | UnionBank reserves the right to audit or commission an audit of the vendor's security controls at any time with reasonable notice |
| **Subcontracting** | Vendor must obtain written approval before subcontracting any services involving UnionBank data |
| **Data Return and Destruction** | Upon contract termination, vendor must return or securely destroy all UnionBank data within **30 days** |
| **Regulatory Compliance** | Vendor must comply with all applicable BSP regulations, including Circular 1140 |

### 4.5 Ongoing Vendor Monitoring

4.5.1 All Tier 1 vendors **shall** be reviewed on a **semi-annual** basis. All Tier 2 and Tier 3 vendors **shall** be reviewed **annually**.

4.5.2 Ongoing monitoring activities **shall** include:
- Review of vendor-provided security reports or certifications
- Assessment of any known incidents, breaches, or regulatory actions involving the vendor
- Review of service level agreement (SLA) performance metrics
- Validation that the vendor's security posture has not materially changed

4.5.3 Any vendor that fails to meet UnionBank's security requirements during a periodic review **shall** be placed on a **Vendor Watch List** and given **60 days** to remediate identified issues. If remediation is not completed, the engagement shall be escalated to the CIO and CISO for a termination decision.

### 4.6 Cloud Service Provider Requirements

4.6.1 In compliance with **BSP Circular No. 1140**, all cloud service providers used by UnionBank **shall**:

- Be listed in the Approved Vendor Registry with cloud-specific risk assessment on file
- Provide documentation of their data center location(s) — UnionBank shall assess regulatory implications of data stored outside the Philippines
- Have documented business continuity and failover capabilities
- Provide audit logs accessible to UnionBank on demand
- Comply with all applicable BSP cloud risk management guidelines

4.6.2 The use of public cloud services for **critical banking data** (as defined under BSP regulations) **shall** require explicit approval from the Board IT Steering Committee.

### 4.7 Vendor Exit Plan

4.7.1 For all **Tier 1 vendors**, a formal **Exit Plan** **shall** be documented and maintained at the time of onboarding and updated annually or whenever there is a material change in the vendor relationship.

4.7.2 The Exit Plan **shall** include:
- Steps and timeline for migrating services to an alternative provider or in-house
- Data recovery and migration procedures
- Communication plan for affected business units and customers
- Regulatory notification requirements (if applicable)
- Responsible persons for each exit activity

4.7.3 The Exit Plan **shall** be tested at least **once every two (2) years** through a tabletop exercise.

---

## 5. Roles and Responsibilities

| Role | Responsibility |
|------|---------------|
| **CIO** | Policy owner; approve Tier 1 vendor onboarding; oversee Approved Vendor Registry |
| **CISO** | Conduct and approve vendor security assessments; review contract security clauses |
| **Procurement Division** | Ensure vendor contracts include required clauses; coordinate onboarding process |
| **Legal Division** | Review and finalize vendor contracts; enforce Right to Audit provisions |
| **Compliance Division** | Ensure vendor arrangements comply with BSP Circular 1140 and RA 10173 |
| **Business Unit Heads** | Identify vendor requirements; participate in vendor reviews; own vendor relationships within their units |
| **Internal Audit** | Independently assess vendor management processes annually |

---

## 6. Compliance and Enforcement

6.1 Engaging a vendor not listed in the Approved Vendor Registry without prior CIO and CISO approval constitutes a **policy violation** subject to disciplinary action.

6.2 Any vendor arrangement that does not include the mandatory contractual clauses in Section 4.4 **shall** be renegotiated or terminated.

6.3 This policy **shall** be reviewed annually for alignment with BSP Circular 1140 and updated within **60 days** of any new or amended regulatory issuance.

---

## 7. Review and Update Cycle

| Event | Action Required |
|-------|----------------|
| Annual review | CIO reviews; submitted to Board IT Steering Committee for reaffirmation |
| New cloud or Tier 1 vendor engagement | Policy compliance check before onboarding |
| Material vendor security incident | Immediate policy review triggered |
| New or amended BSP circular | Policy updated within 60 days |

---

## 8. Related Documents

- UBP-GOV-001: IT Risk Management and Board Reporting Policy
- UBP-GOV-003: Cybersecurity Incident Response and Post-Incident Review Policy
- BSP Circular No. 1140 — Digital Operations Framework
- Republic Act No. 10173 — Data Privacy Act of 2012
- UnionBank Information Security Policy
