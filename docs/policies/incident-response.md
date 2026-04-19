---
sidebar_position: 3
---

# Policy 3 — Cybersecurity Incident Response and Post-Incident Review Policy

## Document Control

| Field | Details |
|-------|---------|
| **Policy Title** | Cybersecurity Incident Response and Post-Incident Review Policy |
| **Policy ID** | UBP-GOV-003 |
| **Version** | 1.0 |
| **Effective Date** | April 17, 2026 |
| **Review Cycle** | Annual |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Approved By** | Board IT Steering Committee |
| **COBIT 2019 Reference** | DSS02 — Managed Service Requests and Incidents |
| **Regulatory Basis** | BSP Circular No. 982 (2017); Republic Act No. 10173 |

---

## 1. Purpose

This policy establishes a formal, structured process for detecting, reporting, classifying, responding to, and reviewing cybersecurity incidents at UnionBank of the Philippines. It ensures that incidents are managed consistently and effectively, that business impact is minimized, and that lessons learned are systematically incorporated into the bank's security posture.

This policy addresses a critical governance gap: the absence of a **formal post-incident review process**, which was highlighted by the bank's response to the 2021 phishing incidents affecting customers.

---

## 2. Scope

This policy applies to:

- All cybersecurity incidents affecting UnionBank's information systems, networks, applications, and data — whether hosted on-premises or in the cloud
- All employees, contractors, and third-party service providers who use or manage UnionBank systems
- All incidents involving unauthorized access to, disclosure of, or destruction of UnionBank customer data or bank data
- The Computer Security Incident Response Team (CSIRT) and all units that support incident response

---

## 3. Definitions

| Term | Definition |
|------|------------|
| **Cybersecurity Incident** | Any event that compromises or threatens the confidentiality, integrity, or availability of UnionBank's information systems or data |
| **CSIRT** | Computer Security Incident Response Team — the designated group responsible for coordinating the bank's response to cybersecurity incidents |
| **Incident Severity** | A classification of the incident's potential business impact: Low, Medium, High, or Critical |
| **Incident Ticket** | A formal log entry in the Incident Management System documenting an incident from detection through resolution |
| **Containment** | Actions taken to limit the spread or impact of an incident |
| **Eradication** | Actions taken to remove the cause or threat actor from the affected environment |
| **Recovery** | Actions taken to restore affected systems to normal operations |
| **Post-Incident Review (PIR)** | A structured analysis conducted after a significant incident to identify root cause, assess response effectiveness, and derive improvement actions |
| **Root Cause Analysis (RCA)** | A systematic method for identifying the underlying cause of an incident |

---

## 4. Incident Severity Classification

All cybersecurity incidents **shall** be classified according to the following severity levels:

| Severity | Label | Description | Examples |
|----------|-------|-------------|---------|
| **P1** | Critical | Severe and immediate impact on banking operations or customer data; regulatory reporting likely required | Active ransomware attack; mass customer data breach; core banking system compromise |
| **P2** | High | Significant impact on one or more business systems; potential regulatory implications | Phishing campaign affecting multiple customers; unauthorized access to sensitive internal systems; DDoS attack |
| **P3** | Medium | Limited impact; no confirmed data loss; contained within a specific system or unit | Malware detected on an endpoint; failed unauthorized login attempt; suspicious network activity |
| **P4** | Low | Minimal or no business impact; likely policy violation or minor anomaly | Single failed phishing attempt; minor configuration error; suspicious but unconfirmed activity |

---

## 5. Policy Statements

### 5.1 Computer Security Incident Response Team (CSIRT)

5.1.1 UnionBank **shall** maintain a formally designated **Computer Security Incident Response Team (CSIRT)** with the following core roles:

| Role | Responsibility |
|------|---------------|
| **CSIRT Lead** | CISO or designated deputy; overall incident response authority |
| **Incident Coordinator** | Manages incident ticket lifecycle; coordinates communication |
| **Technical Analyst** | Investigates and contains the incident; conducts forensic analysis |
| **Communications Officer** | Manages internal and external communications including customer notifications |
| **Legal and Compliance Liaison** | Advises on regulatory notification requirements; manages legal risk |
| **Business Unit Representative** | Represents affected business unit; supports recovery activities |

5.1.2 CSIRT contact information and escalation paths **shall** be documented and made available to all relevant personnel at all times.

5.1.3 CSIRT members **shall** complete cybersecurity incident response training at least **once per year**.

### 5.2 Incident Detection and Reporting

5.2.1 Any employee, contractor, or system that identifies or suspects a cybersecurity incident **shall** report it to the CSIRT **immediately** upon detection.

5.2.2 All cybersecurity incidents **shall** be logged in the centralized **Incident Management System** within **one (1) hour** of initial detection or report, regardless of severity.

5.2.3 The initial incident log **shall** capture at minimum:
- Date and time of detection
- Reporting person and contact details
- Systems or data potentially affected
- Initial description of the incident
- Preliminary severity classification

### 5.3 Incident Response Procedures

All cybersecurity incidents **shall** be managed through the following phases:

#### Phase 1 — Identification and Classification

5.3.1 Upon receiving an incident report, the CSIRT **shall** verify and classify the incident within the timeframes below:

| Severity | Initial Classification Target |
|----------|------------------------------|
| P1 — Critical | Within **15 minutes** of report |
| P2 — High | Within **1 hour** of report |
| P3 — Medium | Within **4 hours** of report |
| P4 — Low | Within **8 hours** of report |

#### Phase 2 — Containment

5.3.2 The CSIRT **shall** implement containment measures to limit the spread or further impact of the incident. Containment actions **shall** be documented in the incident ticket.

5.3.3 For **P1 and P2** incidents, initial containment **shall** be initiated within **1 hour** of classification.

#### Phase 3 — Eradication

5.3.4 The CSIRT **shall** identify and remove the root cause or threat from the affected environment. Eradication actions **shall** be documented with timestamps.

#### Phase 4 — Recovery

5.3.5 The CSIRT **shall** coordinate with affected business units to restore systems and services to normal operation. Recovery **shall** be verified by the CISO before the incident is closed.

#### Phase 5 — Communication and Notification

5.3.6 Internal communication shall follow the escalation matrix defined in Section 5.1. Senior management **shall** be notified for all P1 and P2 incidents.

5.3.7 **Customer notification:** If an incident involves unauthorized access to or disclosure of customer personal data, affected customers **shall** be notified in accordance with RA 10173 (Data Privacy Act) — within **72 hours** of the bank's awareness of the breach, consistent with NPC requirements.

5.3.8 **Regulatory notification:** Incidents meeting BSP reportable thresholds **shall** be reported to the BSP within the timeframes prescribed by applicable BSP circulars.

#### Phase 6 — Incident Closure

5.3.9 An incident **shall** be formally closed in the Incident Management System only when:
- All affected systems have been restored to normal operation
- The cause has been identified and eradicated
- All required notifications have been completed
- The CISO has reviewed and approved the closure

### 5.4 Post-Incident Review (PIR)

5.4.1 A formal **Post-Incident Review (PIR)** **shall** be conducted for all **P1 (Critical)** and **P2 (High)** incidents.

5.4.2 The PIR **shall** be completed and its report submitted to the CISO within **14 calendar days** of incident closure.

5.4.3 The PIR Report **shall** include:

| Section | Content |
|---------|---------|
| **Incident Summary** | Brief description of the incident, affected systems, and business impact |
| **Timeline of Events** | Chronological sequence from initial detection through resolution |
| **Root Cause Analysis** | Identified underlying cause(s) of the incident |
| **Response Effectiveness Assessment** | Evaluation of how well the CSIRT and affected units responded |
| **Gaps Identified** | Security controls, processes, or training gaps revealed by the incident |
| **Recommendations** | Specific, actionable steps to prevent recurrence and improve response |
| **Responsible Owners** | Person or unit assigned to each recommendation |
| **Target Completion Dates** | Deadline for implementing each recommendation |

5.4.4 The PIR Report **shall** be reviewed by the CISO and, for P1 incidents, presented to the Board IT Steering Committee at the next scheduled meeting.

5.4.5 All recommendations from the PIR **shall** be tracked to completion. Open PIR action items **shall** be included in the Quarterly IT Risk Report (per UBP-GOV-001).

### 5.5 Lessons Learned and Continuous Improvement

5.5.1 Lessons learned from PIRs **shall** be formally incorporated into:
- The **IT Risk Register** (UBP-GOV-001) — as new or updated risk entries
- Security awareness training — distributed to relevant staff through a formal briefing within **30 days** of PIR completion
- Technical controls — where gaps in existing controls are identified

5.5.2 The CISO **shall** prepare an annual **Incident Trend Report** summarizing all incidents by type, severity, and root cause. This report **shall** be presented to the Board IT Steering Committee to inform the IT Risk Appetite review.

---

## 6. Response Time Targets Summary

| Severity | Classification | Initial Containment | Customer Notification | PIR Completion |
|----------|---------------|--------------------|-----------------------|----------------|
| P1 — Critical | 15 minutes | 1 hour | 72 hours (if data breach) | 14 days |
| P2 — High | 1 hour | 4 hours | 72 hours (if data breach) | 14 days |
| P3 — Medium | 4 hours | Next business day | Not required (unless data breach) | Not required |
| P4 — Low | 8 hours | Scheduled maintenance | Not required | Not required |

---

## 7. Roles and Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO / CSIRT Lead** | Overall authority for incident response; approve PIR reports; escalate to board |
| **CSIRT Members** | Respond to and manage incidents per this policy |
| **All Employees** | Report suspected incidents immediately; cooperate with CSIRT investigations |
| **Legal and Compliance** | Advise on notification obligations; manage regulatory communications |
| **Communications Officer** | Draft and deliver customer and public notifications |
| **Board IT Steering Committee** | Receive P1 PIR reports; direct systemic improvements |
| **Internal Audit** | Assess CSIRT effectiveness and PIR quality annually |

---

## 8. Compliance and Enforcement

8.1 Failure to report a known or suspected incident is a **serious policy violation** subject to disciplinary action.

8.2 Failure to complete a required PIR within 14 days of incident closure must be escalated to the CISO with documented justification.

8.3 This policy **shall** be reviewed for compliance with BSP Circular 982 and RA 10173 annually and updated within **60 days** of any relevant regulatory change.

---

## 9. Review and Update Cycle

| Event | Action Required |
|-------|----------------|
| Annual review | CISO reviews; submitted to Board IT Steering Committee for reaffirmation |
| P1 (Critical) incident | Policy review triggered within 30 days of PIR completion |
| New or amended BSP circular or NPC issuance | Policy updated within 60 days |
| CSIRT exercise or drill findings | Updates incorporated into procedures |

---

## 10. Related Documents

- UBP-GOV-001: IT Risk Management and Board Reporting Policy
- UBP-GOV-002: Third-Party and Cloud Vendor Risk Management Policy
- BSP Circular No. 982 — Guidelines on IT Risk Management
- Republic Act No. 10173 — Data Privacy Act of 2012
- NPC Circular No. 16-03 — Security of Personal Data
- UnionBank Business Continuity and Disaster Recovery Plan
