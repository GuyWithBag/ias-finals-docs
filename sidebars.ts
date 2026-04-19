import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    "company-background",
    "current-it-assessment",
    "cobit-framework",
    {
      type: "category",
      label: "Proposed Policies",
      items: [
        "policies/it-risk-management",
        "policies/vendor-risk-management",
        "policies/incident-response",
      ],
    },
    "references",
  ],
};

export default sidebars;
