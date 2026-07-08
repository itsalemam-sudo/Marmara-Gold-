/**
 * Marmara Gold Trading LLC — Corporate policy library.
 *
 * All 21 policies from the compliance manual, keyed by document ID.
 * Rendered by <Policies /> as a filterable grid; each card opens a
 * modal with the full policy text.
 *
 * Content is verbatim from the signed PDFs (Chairman, 01.10.2024).
 * When policies are revised, edit here — no JSX change required.
 */

export type PolicyCategory =
  | "governance"
  | "human-rights"
  | "supply-chain"
  | "financial-crime"
  | "environment"
  | "workplace"
  | "safety";

export type PolicySection = {
  heading?: string;
  body?: string;
  bullets?: string[];
};

export type Policy = {
  code: string;                 // Doc ID, e.g. "MGT/POL/COM-01"
  title: string;
  category: PolicyCategory;
  /** One-line summary shown on the card. */
  summary: string;
  intro?: string;               // Opening paragraph inside modal.
  sections: PolicySection[];
  signature: {
    signatory: string;          // "Chairman"
    date: string;               // "01.10.2024"
  };
};

export const policyCategories: { key: PolicyCategory | "all"; label: string }[] = [
  { key: "all",             label: "All Policies"     },
  { key: "governance",      label: "Governance & Ethics" },
  { key: "human-rights",    label: "Human Rights"     },
  { key: "supply-chain",    label: "Supply Chain"     },
  { key: "financial-crime", label: "Financial Crime"  },
  { key: "environment",     label: "Environment"      },
  { key: "workplace",       label: "Workplace"        },
  { key: "safety",          label: "Health & Safety"  },
];

export const policies: Policy[] = [
  /* ------------------------------------------------------------------ */
  /*  COM-01  Responsible Jewellery Council Policy                       */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-01",
    title: "Responsible Jewellery Council Policy",
    category: "governance",
    summary:
      "Alignment with the RJC Code of Practices — responsible gold trading, transparency, traceability and ethical conduct.",
    intro:
      "Marmara Gold Trading LLC is a gold trading company committed to upholding the highest standards of ethics, transparency, and responsible sourcing in all its operations. We recognize our responsibility in ensuring that all gold traded through our business is handled in accordance with responsible and ethical practices. Our commitment aligns with the mission of the Responsible Jewellery Council (RJC), specifically under the RJC Code of Practices (COP), which promotes human rights, ethical business conduct, and environmental responsibility within the precious metals supply chain.",
    sections: [
      {
        heading: "Responsible Gold Trading",
        body:
          "We ensure that all gold traded through our company is sourced from suppliers who operate responsibly, comply with applicable laws, and avoid any association with conflict-affected or high-risk areas.",
      },
      {
        heading: "Transparency and Traceability",
        body:
          "We maintain appropriate due diligence and documentation procedures to ensure traceability of the gold we trade. Provenance claims are supported by documented evidence and reviewed internally.",
      },
      {
        heading: "Human Rights & Labor Practices",
        body:
          "We adhere to fair labor practices and support the rights of all employees. Discrimination, forced labor, and child labor are strictly prohibited in our operations and throughout our supply chain.",
      },
      {
        heading: "Environmental Responsibility",
        body:
          "While our operations have minimal environmental impact, we are committed to reducing waste and promoting sustainability in office and logistics practices.",
      },
      {
        heading: "Anti-Bribery and Ethical Conduct",
        body:
          "We maintain a zero-tolerance approach to bribery and corruption, and our staff are trained to uphold ethical business practices at all times.",
      },
      {
        heading: "Community Engagement",
        body:
          "We support charitable and community-based initiatives aligned with our values and encourage employees to participate in social impact efforts.",
      },
      {
        heading: "Continuous Improvement",
        body:
          "We actively review and improve our policies, procedures, and due diligence processes to remain aligned with evolving RJC standards and global expectations for responsible business conduct.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-02  Human Rights Policy                                        */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-02",
    title: "Human Rights Policy",
    category: "human-rights",
    summary:
      "Respect for human rights across operations and supply chain, aligned with the UN Guiding Principles and RJC Code of Practices.",
    intro:
      "Marmara Gold Trading LLC is fully committed to maintaining its Human Rights policy as below:",
    sections: [
      {
        bullets: [
          "Committed to Responsible Jewellery Council's Code of Practice and UN Guiding Principles on Business and Human Rights.",
          "Respect for human rights across operations and supply chain.",
          "Avoid complicity in human rights abuses, promote rights fulfillment.",
          "Prioritization of human rights impact management in labor.",
          "Committed to continual improvement through employee training programs.",
          "Human rights due diligence in risk assessment, including high-risk markets.",
          "Engage through collaborations, advocacy, and stakeholder dialogues. Work collectively to promote human rights respect.",
          "Committed to maintaining the highest standards of ethical conduct, and adhering to industry-specific guidelines. This includes a firm stance against child labor, forced labor, sexual harassment, and other abuses as outlined in the Responsible Jewellery Council (RJC) Code of Practices (CoP).",
        ],
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-04  Anti-Bribery and Anti-Corruption Policy                    */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-04",
    title: "Anti-Bribery and Anti-Corruption Policy",
    category: "financial-crime",
    summary:
      "Zero-tolerance approach to bribery and corruption, aligned with RJC Code of Practices and applicable laws.",
    intro:
      "Marmara Gold Trading LLC is committed to upholding ethical standards, deterring bribery, and preventing corruption in line with RJC COPs.",
    sections: [
      { heading: "Zero Tolerance",           body: "Firm stands against all forms of bribery and corruption, fostering an environment of integrity." },
      { heading: "Compliance with Laws",     body: "Strict adherence to local and international anti-bribery and anti-corruption laws to ensure lawful operations." },
      { heading: "Risk Assessment",          body: "Regular evaluation of potential bribery and corruption risks to proactively address vulnerabilities." },
      { heading: "Due Diligence",            body: "Thorough examination of partners and third parties to ensure shared commitment to anti-bribery and anti-corruption principles." },
      { heading: "Gifts, Hospitality, Entertainment", body: "Established guidelines and procedures to ensure that giving or receiving gifts, hospitality, or entertainment avoids any perception of bribery." },
      { heading: "Conflicts of Interest",    body: "Transparent reporting of any personal or professional conflicts of interest to uphold organizational integrity." },
      { heading: "Reporting Violations",     body: "Encouragement of confidential reporting by all employees, free from any fear of retaliation." },
      { heading: "Training and Awareness",   body: "Ongoing employee education to promote a culture of integrity and equip them to identify and prevent bribery and corruption." },
      { heading: "Continuous Improvement",   body: "Regular policy reviews to adapt to evolving regulations and risks, aligned with RJC COPs." },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-05  Responsible Global Supply Chain of Minerals Policy         */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-05",
    title: "Responsible Global Supply Chain of Minerals Policy",
    category: "supply-chain",
    summary:
      "OECD-aligned due diligence for sourcing from Conflict-Affected and High-Risk Areas (CAHRA) — full commitment.",
    intro:
      "MARMARA GOLD TRADING LLC, an integrated precious metal and trading solutions provider in the United Arab Emirates, is fully committed to providing high-quality products and services while meeting the highest ethical and moral standards with respect to responsible sourcing. The Company recognizes that risks of significant adverse impacts may be associated with extracting, trading, handling and exporting minerals from conflict-affected and high-risk areas (CAHRA) and other areas. We commit to refrain from any action which contributes to the financing of conflict and to comply with relevant United Nations sanctions resolutions or, where applicable, domestic laws implementing such resolutions.",
    sections: [
      {
        heading: "Serious abuses associated with the extraction, transport or trade of minerals",
        body: "While sourcing from, or operating in, conflict-affected and high-risk areas, we will neither tolerate nor by any means profit from, contribute to, assist with or facilitate the commission by any party of:",
        bullets: [
          "Any forms of torture, cruel, inhuman and degrading treatment.",
          "Any forms of forced or compulsory labor.",
          "The worst forms of child labor (ILO Convention No. 182).",
          "Other gross human rights violations and abuses such as widespread sexual violence.",
          "War crimes or other serious violations of international humanitarian law, crimes against humanity or genocide.",
        ],
      },
      {
        heading: "Direct or indirect support to non-state armed groups",
        body:
          "The Company will not tolerate any direct or indirect support to non-state armed groups through the extraction, transport, trade, handling or export of minerals — including procurement, payments or logistical assistance to any groups that illegally control mine sites, transportation routes, or points where minerals are traded, or that illegally tax or extort money or minerals.",
      },
      {
        heading: "Public or private security forces",
        body:
          "Where we or any company in our supply chain contracts public or private security forces, we require engagement in accordance with the Voluntary Principles on Security and Human Rights. Screening policies ensure individuals or units known to have been responsible for gross human rights abuses will not be hired.",
      },
      {
        heading: "Bribery, fraudulent origin misrepresentation and money laundering",
        body:
          "The Company will not offer, promise, give or demand any bribes to conceal or disguise the origin of minerals, or to misrepresent taxes, fees and royalties. We support efforts to eliminate money laundering and comply with our AML/CFT Policy.",
      },
      {
        heading: "Payment of taxes, fees and royalties to governments",
        body:
          "All taxes, fees, and royalties related to mineral extraction, trade and export from conflict-affected and high-risk areas are paid to governments in accordance with the Extractive Industry Transparency Initiative (EITI).",
      },
      {
        heading: "Environment, health and safety (EHS)",
        body:
          "The Company maintains an EHS Policy and Manual committed to excellence in environmental, health, and safety standards. Health & Safety of the workforce is our foremost priority, ensured through rigorous safety protocols, continuous training, and proactive risk management. Environmental Stewardship minimizes our ecological footprint through responsible resource management, reducing emissions, and implementing sustainable practices.",
      },
      {
        heading: "Management system",
        body: "Consistent implementation of due diligence and risk control is ensured through:",
        bullets: [
          "Scope, clear responsibilities and escalation channels.",
          "Identification, assessment and criteria for high-risk gold supply chain.",
          "Know-Your-Customer (KYC) process.",
          "Monitoring and surveillance of transactions.",
          "Mandatory trainings for relevant staff exposed directly in the supply chain.",
        ],
      },
      {
        heading: "Contact",
        body:
          "For questions or concerns related to the supply chain policy, contact compliance@marmaragold.co. This policy is adapted from Annex II of the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-06  Sustainability Policy                                      */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-06",
    title: "Sustainability Policy",
    category: "environment",
    summary:
      "Environmentally responsible actions across water, energy, paper and e-waste — reviewed and reported annually.",
    intro:
      "Marmara Gold Trading LLC firmly commit to promoting sustainability, recognizing its vital role in our lives and operations. Our Sustainability Policy aims to implement, monitor, and communicate environmentally responsible actions.",
    sections: [
      {
        bullets: [
          "We value the environment, acknowledging human impact and striving to prevent degradation.",
          "We consistently reduce water, energy, and paper consumption, maximizing recycling efforts.",
          "Responsible disposal, including e-waste at designated centers, is a priority.",
          "We communicate our policy internally and externally, while reviewing and reporting our annual overall performance.",
        ],
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-07  Targeted Financial Sanctions Policy                        */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-07",
    title: "Targeted Financial Sanctions Policy and Standard",
    category: "financial-crime",
    summary:
      "Implementation of UN & UAE TFS regimes — screening, asset freezing, GoAML reporting per Cabinet Resolution No. 74 of 2020.",
    intro:
      "As a member of the United Nations, the UAE is mandated to implement UN Security Council Resolutions (UNSCR) relating to the UN's sanctions regimes. Through Cabinet Resolution No. 74 of 2020, the UAE is implementing relevant UNSCRs on the suppression and combating of terrorism, terrorist financing and countering the financing of proliferation of weapons of mass destruction — in particular relating to targeted financial sanctions (TFS). Marmara Gold Trading LLC ensures full compliance with all TFS obligations.",
    sections: [
      {
        heading: "TFS Obligations",
        bullets: [
          "Screen existing, new, and potential clients to verify any positive names matched with any designated person (Entity or Individual).",
          "Upon a new update to the relevant sanctions list, screen the customer database without delay when new names are listed.",
          "Review parties, the nature of the transaction and the source of funds.",
          "Take reasonable measures to verify and confirm the identity of the customer against the designated person.",
          "Maintain appropriate internal controls to ensure compliance with the most recent publication of TFS of the UNSC Consolidated lists and the Local Lists.",
          "Policies and procedures that prohibit staff from, directly or indirectly, informing the customer or any third party that freezing action or any Other Measures are going to be implemented per Cabinet Resolution No. 74 of 2020.",
        ],
      },
      {
        heading: "Legal Framework",
        bullets: [
          "Federal Law: Decree Federal Law No. 20 of 2018 on AML/CFT and Illegal Organizations.",
          "Executive Regulation: Cabinet Decision No. 10 of 2019 (Implementing Regulation of the AML/CFT Federal Law).",
          "Executive Resolution: Cabinet Resolution No. 74 of 2020 concerning the Local Terrorist List and implementation of UN Security Council decisions.",
        ],
      },
      {
        heading: "Screening Operations",
        body:
          "As part of KYC, real-time screening is performed against UN Consolidated List, UAE Local Terrorist List, OFAC, EU, HMT and FPEP lists via the World-Check database. Transactions with a potential match are blocked and investigated. Screening covers customer databases, transaction parties, potential customers, beneficial owners, and persons/organizations with direct or indirect relationships.",
      },
      {
        heading: "Fund Freeze Report (FFR)",
        body:
          "When a Confirmed Match is identified, freeze without delay and prohibit making funds or other assets available. Report measures via the GoAML platform within five business days by selecting the Fund Freeze Report (FFR). Freezing measures remain in effect until the person is de-listed.",
      },
      {
        heading: "Partial Name Match Report (PNMR)",
        body:
          "When a Potential Match is identified, suspend any transaction without delay and refrain from offering funds or services. Report via GoAML within five business days as a Partial Name Match Report (PNMR). Uphold suspension until further instructions are received from the Executive Office or supervisory authority.",
      },
      {
        heading: "High-Risk Countries",
        body:
          "DNFBPs must screen customers against FATF Jurisdictions under Increased Monitoring (Grey List) and High-Risk Jurisdictions Subject to a Call for Action (Black List). Reports include High-Risk Country Transaction Report or High-Risk Country Activity Report (HRC/HRCA).",
      },
      {
        heading: "Non-Proliferation Financing",
        body:
          "North Korea and Iran are subject to TFS related to WMD proliferation. Compliance with UNSC targeted financial sanctions on North Korea and Iran is not optional. The Company assesses PF threats and vulnerabilities including cash-intensive DPMS transactions, high-risk jurisdiction exposure, and inconsistent import volumes.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-08  Provenance Claim Policy                                    */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-08",
    title: "Provenance Claim Policy",
    category: "supply-chain",
    summary:
      "Accurate origin claims backed by reliable evidence; conflict-free sourcing per OECD guidelines.",
    intro:
      "This policy underscores our dedication to ethical trading, transparency, and responsible practices, promoting trust in the trading at Marmara Gold Trading LLC.",
    sections: [
      { heading: "Ethical Commitment",       body: "Dedicated to transparent, ethical, and responsible trading practices." },
      { heading: "Supported Claims",         body: "Ensuring all Provenance Claims are backed by reliable evidence." },
      { heading: "Accurate Representation",  body: "Committed to accurate descriptions of origin and source for precious metals, diamonds and gemstones." },
      { heading: "Responsible Communication",body: "Using symbols and descriptions responsibly to provide transparent product information." },
      { heading: "Avoiding Deception",       body: "Firmly rejecting any misleading attempts through words, symbols, or depictions." },
      { heading: "Concerns Handling",        body: "Established procedure to address concerns through compliance officer." },
      { heading: "Internal Audits",          body: "Regular audits to assess adherence to the Provenance Claim Policy for integrity." },
      { heading: "Employee Awareness",       body: "Ensuring employees understand and uphold the policy's principles." },
      { heading: "Conflict-Free Sourcing",   body: "Warranting sourcing in accordance with OECD guidelines." },
      { heading: "Contact",                  body: "Encouraging communication for queries or feedback at compliance@marmaragold.co." },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-09  Facilitation Payment Policy                                */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-09",
    title: "Facilitation Payment Policy",
    category: "financial-crime",
    summary:
      "Zero facilitation payments. Whistleblower protection. Applies to management, employees, contractors and consultants.",
    intro:
      "At Marmara Gold Trading LLC, we uphold the highest standards of ethics and integrity in all aspects of our business operations. Our commitment to honesty and fairness extends to our stance on facilitation payments. We unequivocally declare that Marmara Gold Trading LLC does not engage in any form of facilitation payments.",
    sections: [
      {
        body:
          "Marmara Gold Trading LLC maintains a strict zero-tolerance approach to bribery and corruption, including facilitation payments. We firmly reject any form of payment made to expedite or influence routine administrative processes.",
      },
      {
        body:
          "We commit to adhering to the legal requirements of the jurisdictions in which we operate. Any form of advantage or payment will be assessed according to the elements of bribery or corruption as defined by applicable laws.",
      },
      {
        body:
          "We encourage and support anyone associated with Marmara Gold Trading LLC who raises genuine concerns in good faith regarding potential violations of this anti-facilitation payment policy. This includes employees, contractors, consultants, and other individuals connected to our business.",
      },
      {
        body:
          "Marmara Gold Trading LLC is fully committed to ensuring that no individual suffers detrimental treatment as a result of refusing to engage in facilitation payments or reporting suspicions of actual or potential bribery or corruption offenses. This commitment extends to protection against actions such as dismissal, disciplinary actions, threats, or any other unfavorable treatment.",
      },
      {
        body:
          "This policy applies to all individuals linked to Marmara Gold Trading LLC, regardless of their role, including management, employees (permanent or temporary), consultants, contractors, and casual workers. This policy reinforces our dedication to ethical conduct and rejects facilitation payments for sustainable trading.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-10  Fair Trade Policy                                          */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-10",
    title: "Fair Trade Policy",
    category: "governance",
    summary:
      "Ethical operations, zero-tolerance for discrimination, and supplier alignment on fair-trade standards.",
    intro:
      "This policy reflects our commitment to ethical trade, employee well-being, and ongoing improvement, contributing to a fair and impartial trading at Marmara Gold Trading LLC.",
    sections: [
      { heading: "Ethical Trading",       body: "Dedicated to ethical and responsible operations, promoting fairness in trade interactions." },
      { heading: "Values and Principles", body: "Reflecting our corporate ethics of respect, trust, and integrity in all dealings." },
      { heading: "Zero-Tolerance",        body: "No tolerance for discrimination, harassment, or unfair treatment, extending to all levels and relationships." },
      { heading: "Supplier Alignment",    body: "Communicating ethical standards to suppliers and expecting fair trade alignment." },
      { heading: "Unfair Competition",    body: "Employees refrain from actions harming company interests, post-employment too." },
      { heading: "Confidentiality",       body: "Employees commit to keep company information confidential, preventing adverse impact." },
      { heading: "Media Conduct",         body: "Employees avoid false information dissemination about partners or associates." },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-11  Gift Policy                                                */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-11",
    title: "Gift Policy",
    category: "financial-crime",
    summary:
      "Gifts of AED 500 or more require disclosure. Employees may not accept gifts for duty performance.",
    intro:
      "This Policy applies to all employees, ensuring ethical practices across the organization. This Gift Policy demonstrates our commitment to maintaining transparency, integrity, and ethical business conduct, preventing conflicts of interest and fostering a principled workplace at Marmara Gold Trading LLC.",
    sections: [
      { heading: "Conflict Prevention",         body: "Aims to prevent conflicts of interest through ethical gift practices." },
      { heading: "Gift Definition",             body: "Defines \"Gift\" as anything of value given or received within policy guidelines." },
      { heading: "Received Gifts Disclosure",   body: "Received gifts valued 500 AED or more require disclosure to immediate supervisor and relevant executive." },
      { heading: "Given Gifts Recording",       body: "Accurate recording and explanation of given gifts in the gift register, following rules and regulations." },
      { heading: "Prohibition on Accepting Gifts", body: "Prohibits employees from accepting gifts from customers, suppliers, colleagues, or community members for duty performance." },
      { heading: "Employee Lending",            body: "Company disclaims responsibility for monetary transactions or loans between employees or third parties." },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-12  Grievances and Whistleblowing Policy                       */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-12",
    title: "Grievances and Whistleblowing Policy",
    category: "governance",
    summary:
      "Transparent framework for grievances and whistleblower reports. Reprisal protection for good-faith reporters.",
    intro:
      "Marmara Gold Trading LLC is committed to ethical standards. This policy ensures transparent, ethical business conduct, and stakeholder well-being. It is applicable to all employees, external parties, and stakeholders linked to Marmara Gold Trading LLC.",
    sections: [
      { heading: "Framework",             body: "Outlines the process for receiving, investigating, and responding to grievances and whistleblower reports, fostering trust and ethical practices." },
      { heading: "Resolution Commitment", body: "Pledged to address complaints transparently, promptly, and fairly, ensuring equitable solutions." },
      { heading: "Fair Investigations",   body: "Investigations of founded grievances will be unbiased and fact-based, ensuring fairness." },
      { heading: "Reprisal Protection",   body: "Protects whistleblowers from reprisals, discrimination, or adverse consequences, except where legal compliance requires disclosure." },
      { heading: "Types of Complaints",   body: "Encompasses a wide range of complaints, from legal contraventions to human rights issues." },
      { heading: "Reporting Process",     body: "Anyone can report concerns via email or letter, initiating an accessible and organized process." },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-13  Confidentiality and Business Ethics Policy                 */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-13",
    title: "Confidentiality and Business Ethics Policy",
    category: "governance",
    summary:
      "Ten pillars — from integrity and confidentiality to anti-corruption, whistleblower protection and compliance.",
    intro:
      "This policy reaffirms our commitment to ethical conduct, confidentiality, and responsible business practices, fostering trust and integrity at Marmara Gold Trading LLC.",
    sections: [
      { heading: "Commitment to Ethics",    body: "Upholding the highest ethical standards in all business operations." },
      { heading: "Integrity and Honesty",   body: "Conducting ourselves with integrity, honesty, and transparency in interactions." },
      { heading: "Conflict of Interest",    body: "Identifying and managing conflicts to ensure unbiased decisions." },
      { heading: "Fair Competition",        body: "Committing to fair competition, adhering to antitrust laws and preventing unfair practices." },
      { heading: "Confidentiality",         body: "Safeguarding sensitive information, refraining from unauthorized disclosure." },
      { heading: "Proper Use of Resources", body: "Ensuring responsible use of company resources for legitimate purposes." },
      { heading: "Anti-Corruption",         body: "Rejecting bribery, corruption, and unethical influence in any form." },
      { heading: "Gifts and Entertainment", body: "Transparently giving or receiving gifts within ethical limits and avoiding conflicts." },
      { heading: "Whistleblower Protection",body: "Ensuring protection for whistleblowers reporting ethical violations." },
      { heading: "Compliance",              body: "Adhering to all laws, regulations, and industry standards to foster ethical business conduct." },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-014  HR Due Diligence Policy                                   */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-014",
    title: "HR Due Diligence Policy",
    category: "workplace",
    summary:
      "UAE Labor Law compliance — background checks, right-to-work verification, WPS, anti-forced/child-labor, quarterly audits.",
    intro:
      "The purpose of this HR Due Diligence Policy is to ensure compliance with UAE labor laws, international best practices, and ethical employment standards. This policy establishes guidelines for verifying employee eligibility, preventing illegal labor practices, and maintaining a safe, fair, and legally compliant workplace. Applies to all employees, contractors, temporary workers, and third-party labor providers.",
    sections: [
      {
        heading: "Recruitment & Hiring",
        bullets: [
          "Background Checks: Verify educational qualifications, work experience, and professional references. Conduct criminal background checks where applicable.",
          "Age Verification: Ensure no underage employment (minimum age: 18). Validate age through passports or government-issued IDs.",
          "Right-to-Work Verification: Confirm valid UAE residency visa and labor card. Ensure no illegal or undocumented workers are employed.",
        ],
      },
      {
        heading: "Employment Contracts & Documentation",
        bullets: [
          "Ensure all employees have signed contracts in compliance with UAE Labor Law.",
          "Maintain records of offer letters, signed contracts, and amendments.",
          "Maintain passport copies, Emirates ID, and visa documents.",
          "Maintain bank account details for salary transfers (WPS compliance).",
        ],
      },
      {
        heading: "Wages & Working Conditions",
        bullets: [
          "Salary Compliance: Timely payment through WPS (Wage Protection System). No unauthorized salary deductions.",
          "Working Hours & Overtime: Monitor compliance with UAE working hours (8 hours/day, 48 hours/week). Overtime is voluntary and compensated per law.",
          "Health & Safety: Regular workplace safety audits. Necessary safety training and equipment provided.",
        ],
      },
      {
        heading: "Prevention of Forced & Child Labor",
        bullets: [
          "Forced Labor: Prohibit retention of passports or personal documents. No bonded or involuntary labor. Employees may resign with proper notice as per UAE law.",
          "Child Labor: Strictly prohibit employment of individuals under 18. Periodic audits to verify age compliance.",
        ],
      },
      {
        heading: "Anti-Discrimination & Harassment",
        bullets: [
          "Non-Discrimination: Equal opportunity regardless of nationality, gender, religion, or disability.",
          "Sexual Harassment Prevention: Zero-tolerance policy. Confidential reporting channels. Investigations and disciplinary actions where necessary.",
        ],
      },
      {
        heading: "Employee Benefits & Compliance",
        bullets: [
          "Leave & Benefits: Compliance with annual leave, sick leave, and maternity/paternity leave policies.",
          "End-of-Service Benefits: Accurately calculate gratuity as per UAE Labor Law. Final settlements processed without delay.",
        ],
      },
      {
        heading: "Termination & Exit",
        bullets: [
          "Resignations and terminations follow contractual notice periods.",
          "Exit interviews to identify potential compliance issues.",
          "Final settlements verified, including gratuity and repatriation tickets (if applicable).",
        ],
      },
      {
        heading: "Monitoring & Audits",
        bullets: [
          "Internal Audits: HR conducts quarterly audits to ensure compliance.",
          "Third-Party Audits: External auditors engaged to assess labor practices.",
          "Whistleblowing Mechanism: Anonymous reporting channels for violations.",
        ],
      },
      {
        heading: "Non-Compliance & Disciplinary Actions",
        bullets: [
          "Verbal / written warnings.",
          "Suspension or termination.",
          "Legal action if required by UAE authorities.",
        ],
      },
      {
        body: "This policy will be reviewed annually and updated as per changes in UAE labor laws or company requirements.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  COM-015  Data Privacy & Record Keeping Policy                      */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/COM-015",
    title: "Data Privacy & Record Keeping Policy",
    category: "workplace",
    summary:
      "UAE PDPL-aligned (Federal Decree-Law 45/2021). ISO 27001 cloud providers, MFA, 7-year retention, 24-hour breach reporting.",
    intro:
      "The purpose of this policy is to ensure compliance with UAE data protection laws — including Federal Decree-Law No. 45/2021 on Personal Data Protection — and safeguard confidential information stored on on-premises hardware, third-party cloud servers, and vendor-managed systems. Applies to all employee, customer, and supplier data; digital and physical records; and third-party vendors handling company data.",
    sections: [
      {
        heading: "On-Premises Hardware",
        bullets: [
          "Full-disk encryption on all devices.",
          "Automatic screen locks after 5 minutes of inactivity.",
          "Regular backups to secure cloud servers.",
        ],
      },
      {
        heading: "Cloud & Third-Party Servers",
        bullets: [
          "Vendor Due Diligence: Cloud providers must certify compliance with ISO 27001 (Information Security).",
          "Annual audits of vendor security practices.",
          "Data Location: Prefer UAE / India-based servers.",
        ],
      },
      {
        heading: "Record Retention",
        bullets: [
          "Approved Customer records: 7 years — encrypted deletion.",
          "Financial transactions: 7 years — encrypted deletion.",
        ],
      },
      {
        heading: "Access Controls",
        bullets: [
          "Role-Based Access: HR data restricted to HR team only. Complaints data restricted to Complaints team + senior management.",
          "Multi-Factor Authentication (MFA) mandatory for cloud systems.",
          "Logging: all access attempts recorded for audit trails.",
        ],
      },
      {
        heading: "Incident Response",
        bullets: [
          "Report breaches to the Data Protection Officer (DPO) within 24 hours.",
          "Notify affected parties if the breach risks rights/freedoms (per UAE PDPL).",
          "Document actions taken to mitigate risks.",
        ],
      },
      {
        heading: "Employee Responsibilities",
        bullets: [
          "Never share passwords or store data on personal devices.",
          "Use approved tools (company email, encrypted USB drives).",
          "Complete annual data privacy training.",
        ],
      },
      {
        heading: "Third-Party Contracts",
        bullets: [
          "Data Processing Agreements (DPAs) aligning with UAE PDPL.",
          "Right-to-audit clauses for compliance verification.",
          "Penalties for non-compliance (e.g. contract termination).",
        ],
      },
      {
        heading: "Policy Compliance",
        body: "Violations may result in disciplinary action up to termination.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  OHS/01  Safe Driving Policy                                        */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/OHS/01",
    title: "Safe Driving Policy and Standard",
    category: "safety",
    summary:
      "Fleet safety — authorized drivers only, RTA compliance, seatbelts, no mobiles, insurance, incident reporting.",
    intro:
      "MARMARA GOLD TRADING LLC is committed to keeping its employees healthy and providing a safe driving practice. This Safe Driving policy supports the overarching Health and Safety policy and provides guidance for safe driving where road accidents are likely to cause injury. The intended outcomes include reductions in injury, motor vehicle accidents, damage to vehicles and property, and the fault rate.",
    sections: [
      {
        heading: "Scope",
        bullets: [
          "Driving to and from sites and offices.",
          "Driving from office to customer's office and home to office.",
          "Use of external lifts, hoists and ropes for conveying people or equipment to height.",
          "Driving of vehicles by employees in office and site work areas.",
        ],
      },
      {
        heading: "Managers & Supervisors",
        bullets: [
          "Communicate safe driving policy and guidelines to staff.",
          "Consult with drivers when resolving driving safety issues.",
          "Ensure all staff, managers and supervisors receive road user safety training.",
          "Conduct road-use risk assessments and identify training needs.",
          "Review driving ability every 3 years for drivers operating in high-risk conditions.",
        ],
      },
      {
        heading: "Drivers — Requirements",
        bullets: [
          "Operate road vehicles in compliance with RTA road laws.",
          "Undertake operational safety checks before operating any vehicle for the first time.",
          "Report defective vehicles to Supervisor / Manager immediately.",
          "Report all injury and damage incidents, including near-misses.",
          "Comply with fleet management requirements; wear seatbelts at all times; drive within speed limits.",
          "Avoid mobile phones while driving. Never drive under the influence of alcohol or drugs.",
        ],
      },
      {
        heading: "Vehicle Checklist & Fleet",
        bullets: [
          "Complete pre-departure vehicle walk-around checking tyre pressure, damage and equipment.",
          "Maintain Vehicle Log Books recording all journeys undertaken.",
          "Fleet vehicles available for official work purposes only.",
          "Vehicles maintained per manufacturer's requirements and specifications.",
        ],
      },
      {
        heading: "Insurance & Accidents",
        bullets: [
          "Fleet vehicles covered by Comprehensive Insurance and Compulsory Third Party Insurance.",
          "Under any circumstances, liability for an accident must not be admitted.",
          "All accidents reported to the Admin Executive / Manager as soon as possible.",
          "Where police or legal action is instituted, matter is reported to the Admin Executive.",
        ],
      },
      {
        heading: "Adverse Conditions & Authorization",
        body:
          "Driving must not continue during sandstorm, snow, high or gusting winds, fog, earthquake, floods or other natural calamities. Only authorized drivers permitted to drive fleet vehicles; a Register of Authorized Drivers is maintained by the Admin Executive. Vehicles must not exceed 70 km/h in any conditions; all persons in front seats must wear seatbelts at all times.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  OHS/02  Incident Investigation and Reporting Policy                */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/OHS/02",
    title: "Incident Investigation and Reporting Policy",
    category: "safety",
    summary:
      "Every incident — no matter how small — reported, investigated, and closed with corrective / preventive action.",
    intro:
      "MARMARA GOLD TRADING LLC is committed to identifying, investigating, reporting and taking corrective and preventive actions on all incidents to prevent future reoccurrence. This standard sets the minimum requirements for planning and implementing a reporting system across all UAE operations.",
    sections: [
      {
        heading: "Types of Incidents Covered",
        bullets: [
          "Fall from height",
          "Electric shock",
          "Fire and explosions",
          "Near-miss",
          "Physical injury",
          "Road accident and transportation accidents",
          "Disabling and non-disabling injuries",
          "Fatalities",
          "Property damage above a base value",
          "Complaints from external sources",
        ],
      },
      {
        heading: "Reporting",
        bullets: [
          "Any incident must be immediately reported to the Site Supervisor.",
          "All work-related injuries/illnesses or vehicle collisions, no matter how slight, are reported to the supervisor immediately.",
          "All fires, spills, and releases are reported to the supervisor no matter how small.",
          "Site supervisor brings the incident to the notice of Top Management and Management Appointee.",
        ],
      },
      {
        heading: "Investigation",
        bullets: [
          "Narrate the incident: action / condition / how it occurred.",
          "Determine underlying OH&S deficiencies and contributing factors.",
          "Identify need for corrective action and opportunities for preventive action and continual improvement.",
          "Communicate investigation results to all employees within the organization.",
        ],
      },
      {
        heading: "Corrective / Preventive Action",
        bullets: [
          "Identified actions circulated to all sites for implementation.",
          "Site Head implements the actions and reports effectiveness to Top Management.",
          "Corrective measures taken immediately upon occurrence.",
          "In case of injury, the person is immediately taken to hospital for further treatment.",
          "Records of all injury and incidents maintained by the Management Appointee.",
        ],
      },
      {
        heading: "Management Review",
        bullets: [
          "Time between accident and on-site management investigation kept to a minimum.",
          "Prompt review helps prevent similar events.",
          "Lessons learnt communicated to management and staff.",
        ],
      },
      {
        heading: "Records",
        body: "MGT/HSE/F/001 Corrective Action Report · MGT/HSE/F/005 Near Miss Report · MGT/HSE/F/006 Investigation Report.",
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  OHS/03  Disaster Management Plan                                   */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/OHS/03",
    title: "Disaster Management Plan Policy and Standard",
    category: "safety",
    summary:
      "Structured response to natural calamities, fires and industrial accidents — DRT, drills, evacuation, business continuity.",
    intro:
      "MARMARA GOLD TRADING LLC's Disaster Management Plan ensures a structured approach to mitigating risks, protecting lives, minimizing environmental impact, and ensuring business continuity — in compliance with RJC, ISO 9001, and ISO 14001 standards. Applies to all employees, contractors, visitors, and stakeholders involved in operations, including offices, warehouses, and project sites.",
    sections: [
      {
        heading: "Objectives",
        bullets: [
          "Minimize risks to human life and property.",
          "Enhance emergency preparedness.",
          "Continuously improve the disaster response system.",
          "Train and support employees in disaster management.",
          "Comply with OHS, environmental, and quality management regulations.",
          "Promote information on emergency safety and recovery procedures.",
          "Monitor and improve disaster response effectiveness.",
        ],
      },
      {
        heading: "Disaster Response Team (DRT)",
        bullets: [
          "Incident Commander",
          "Safety Officers",
          "First Aid Responders",
          "Evacuation Coordinators",
        ],
      },
      {
        heading: "Emergency Preparedness",
        bullets: [
          "Annual emergency response drills.",
          "Employee training on fire safety, first aid, and evacuation procedures.",
          "24/7 emergency contact system.",
          "SMS, email, and alarms for emergency notifications.",
        ],
      },
      {
        heading: "Disaster Response",
        bullets: [
          "Evacuation: sound alarms, guide employees to emergency exits, maintain clear evacuation maps, conduct regular drills.",
          "Fire Safety: install fire extinguishers, sprinklers, and smoke detectors. Train staff on fire emergency response.",
          "Earthquake Response: Drop, Cover, and Hold until shaking stops. Evacuate to designated safe zones.",
          "Chemical Spill Response: Use spill containment kits and PPE. Alert Environmental Response Team and isolate the affected area.",
        ],
      },
      {
        heading: "Recovery & Business Continuity",
        bullets: [
          "Post-disaster damage assessment; implement necessary repairs and system restorations.",
          "Activate contingency operations to resume production.",
          "Ensure supply chain coordination for raw materials.",
          "Maintain a backup IT system to prevent data loss.",
        ],
      },
      {
        heading: "Compliance & Continuous Improvement",
        bullets: [
          "Internal audits to ensure compliance with ISO 9001, ISO 14001, and RJC.",
          "Identify areas for improvement and update the plan.",
          "Maintain incident records and conduct post-incident reviews.",
          "Report findings to management and regulatory authorities.",
        ],
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  OHS/04  Business Continuity Plan                                   */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/OHS/04",
    title: "Business Continuity Plan Policy and Standard",
    category: "safety",
    summary:
      "Structured framework to maintain operations during disruption — RJC + ISO 9001 + ISO 14001 aligned. Quarterly BCP drills.",
    intro:
      "MARMARA GOLD TRADING LLC is committed to ensuring business continuity by preparing for potential risks that may disrupt operations. This Business Continuity Plan (BCP) is designed to minimize downtime and restore critical functions in case of unforeseen events, in line with RJC, ISO 9001 and ISO 14001 standards.",
    sections: [
      {
        heading: "Purpose",
        bullets: [
          "Ensure uninterrupted operations during business disruptions.",
          "Protect employees, assets, and stakeholders from risks.",
          "Define responsibilities for disaster response and recovery.",
          "Establish a structured approach to risk assessment, mitigation, and recovery.",
        ],
      },
      {
        heading: "BCP Phases",
        bullets: [
          "Phase 1: Disaster Occurrence & Declaration of Business Continuity.",
          "Phase 2: Plan Activation & Communication.",
          "Phase 3: Alternate Site Operations & Recovery.",
          "Phase 4: Transition to Primary Site.",
          "Phase 5: Business Continuity during Pandemics (e.g. COVID-19).",
        ],
      },
      {
        heading: "Procedure",
        bullets: [
          "Assess impact severity using predefined criteria; notify Higher Management & OHS Teams; declare Business Continuity Activation if required.",
          "Internal communication within 1 business day. Alternative channels: email, phone, or remote access.",
          "Relocation Strategy: if primary office is affected, teams relocate to a pre-approved backup site. Remote work protocols activated for non-site-dependent roles.",
          "IT & Data Restoration: all vital records securely stored and backed up. Cloud backups & recovery protocols initiated on IT failure.",
          "Transition to Primary Site: HR & IT verify readiness before re-entry. OHS teams ensure safety compliance before resuming normal operations.",
        ],
      },
      {
        heading: "Testing",
        bullets: [
          "Quarterly BCP drills to assess effectiveness.",
          "Simulated recovery exercises to enhance preparedness.",
          "Continuous performance monitoring.",
        ],
      },
      {
        heading: "Key Roles",
        bullets: [
          "Managing Director / Management Appointee: full implementation, approves protocols.",
          "Department Heads: execute emergency response measures.",
          "OHS & HSE Officers: monitor safety and preparedness; conduct risk assessments and drills.",
          "IT Team: safeguard data through backups and cybersecurity; restore communication and IT systems.",
        ],
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  OHS/06  Environmental, Health, and Safety (EHS) Policy             */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/OHS/06",
    title: "Environmental, Health, and Safety (EHS) Policy",
    category: "environment",
    summary:
      "ISO 14001-aligned. Manual handling limits (gold 25 kg, silver 40 kg), PPE, ergonomics, spill response, secure transport.",
    intro:
      "MARMARA GOLD TRADING LLC is committed to ensuring the highest standards of Environmental, Health, and Safety (EHS) across all operations. This policy outlines our dedication to minimizing environmental impact, safeguarding employee health, and maintaining a safe workplace — particularly during the handling and transportation of precious metals.",
    sections: [
      {
        heading: "Purpose",
        bullets: [
          "Protect employees, contractors, and visitors from workplace hazards.",
          "Comply with local and international EHS regulations.",
          "Reduce environmental footprint through sustainable practices.",
          "Foster a culture of safety and accountability.",
        ],
      },
      {
        heading: "Environmental Commitment",
        bullets: [
          "Minimize waste generation and promote recycling.",
          "Reduce energy and water consumption.",
          "Ensure proper disposal of hazardous materials.",
        ],
      },
      {
        heading: "Health & Safety Commitment",
        bullets: [
          "Enforce safe manual handling techniques — lifting limits: gold 25 kg, silver 40 kg.",
          "Provide PPE (Personal Protective Equipment) where required.",
          "Maintain clear pathways, anti-slip flooring, and ergonomic workstations.",
          "Conduct risk assessments for all high-risk activities.",
        ],
      },
      {
        heading: "Emergency Preparedness",
        bullets: [
          "Train employees on emergency procedures (spills, injuries, theft).",
          "Maintain first aid kits and emergency contact lists.",
          "Partner with certified logistics providers for secure transport.",
        ],
      },
      {
        heading: "Monitoring & Continuous Improvement",
        bullets: [
          "Track EHS metrics (incident rates, waste reduction).",
          "Review and update this policy annually or as needed.",
          "Encourage employee feedback to enhance EHS practices.",
        ],
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },

  /* ------------------------------------------------------------------ */
  /*  OHS/07  Community Development & Charity Policy                     */
  /* ------------------------------------------------------------------ */
  {
    code: "MGT/POL/OHS/07",
    title: "Community Development & Charity Policy",
    category: "governance",
    summary:
      "Financial donations, employee volunteering, and partnerships with licensed charities. No political / religious bias.",
    intro:
      "This policy outlines Marmara Gold Trading LLC's commitment to supporting the local community and charitable causes in line with our corporate values and responsible business practices. It also ensures transparency, accountability, and alignment with ethical standards such as the RJC Code of Practices.",
    sections: [
      {
        heading: "Objectives",
        bullets: [
          "Contribute positively to the local community and vulnerable groups.",
          "Encourage employee involvement in charity and volunteering.",
          "Align with sustainability and ethical trading standards.",
          "Ensure all charitable activities are transparent and properly documented.",
        ],
      },
      {
        heading: "Focus Areas for Support",
        bullets: [
          "Education and skill development.",
          "Health and wellness.",
          "Women's empowerment and child welfare.",
          "Disaster relief and humanitarian aid.",
          "Environmental sustainability.",
          "Local UAE community needs (per DEWA / municipal initiatives).",
        ],
      },
      {
        heading: "Forms of Contribution",
        bullets: [
          "Financial Donations to registered charities or NGOs.",
          "Volunteering Time — employee participation in organized community service.",
          "In-Kind Donations — supplies, equipment, or resources.",
          "Partnerships with local non-profits for events or programs.",
        ],
      },
      {
        heading: "Guidelines & Compliance",
        bullets: [
          "All donations must be approved by management.",
          "Donations only made to licensed and verified organizations.",
          "No political or religious bias in selection of causes.",
          "All actions recorded in the Charity & CSR Logbook.",
          "Audits may be conducted to ensure transparency and impact.",
        ],
      },
      {
        heading: "Monitoring & Review",
        bullets: [
          "Policy and action plan reviewed annually.",
          "Progress evaluated in the management review meeting.",
          "Feedback collected from participants and community partners.",
        ],
      },
    ],
    signature: { signatory: "Chairman", date: "01.10.2024" },
  },
];
