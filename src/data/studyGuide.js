// High-yield study guide content organized by exam domain.
// Each section: title, summary, and key points.

export const studyGuide = [
  {
    id: 'overview',
    title: 'About the PTCE',
    summary:
      'The Pharmacy Technician Certification Exam (PTCE) is administered by the PTCB. It contains 90 questions (80 scored, 10 unscored pretest) and you have 1 hour 50 minutes. Scores range from 1000–1600; 1400 is passing.',
    points: [
      '90 multiple-choice questions (80 scored + 10 pretest).',
      'Time limit: 110 minutes total (plus a short tutorial/survey).',
      'Computer-based, delivered at Pearson VUE testing centers or online.',
      'Passing scaled score is 1400 (range 1000–1600).',
      'Four knowledge domains with the weights below.',
    ],
  },
  {
    id: 'domains',
    title: 'The Four Knowledge Domains',
    summary:
      'The 2020+ blueprint divides content into four domains. Spend your study time roughly in proportion to each weight.',
    points: [
      'Medications — 40% (largest domain): drug names, classes, interactions, side effects, storage, dosage forms.',
      'Patient Safety & Quality Assurance — 26.25%: error prevention, high-alert/LASA drugs, hygiene, hazardous handling.',
      'Order Entry & Processing — 21.25%: pharmacy math, days supply, sig interpretation, NDC, compounding.',
      'Federal Requirements — 12.5%: controlled substances, DEA forms, laws, storage and disposal.',
    ],
  },
  {
    id: 'controlled',
    title: 'Controlled Substance Schedules',
    summary:
      'The Controlled Substances Act (CSA) classifies drugs into five schedules (C-I to C-V) based on abuse potential and accepted medical use.',
    points: [
      'C-I: No accepted medical use, high abuse potential (heroin, LSD, marijuana federally).',
      'C-II: High abuse potential, accepted use; NO refills (oxycodone, morphine, Adderall, fentanyl).',
      'C-III: Moderate potential; up to 5 refills in 6 months (buprenorphine, ketamine, anabolic steroids).',
      'C-IV: Lower potential; up to 5 refills in 6 months (alprazolam, lorazepam, zolpidem, tramadol).',
      'C-V: Lowest potential; some sold OTC by state (codeine cough syrups, pregabalin).',
    ],
  },
  {
    id: 'dea-forms',
    title: 'Key DEA Forms',
    summary: 'Memorize what each DEA form is used for — a frequent exam topic.',
    points: [
      'Form 222 — order Schedule I & II substances (paper or electronic CSOS).',
      'Form 224 — pharmacy registration/application to dispense controlled substances.',
      'Form 106 — report theft or significant loss of controlled substances.',
      'Form 41 — record the destruction/disposal of controlled substances.',
      'Biennial (every 2 years) controlled substance inventory is required.',
    ],
  },
  {
    id: 'laws',
    title: 'Major Pharmacy Laws',
    summary: 'Landmark federal laws shape pharmacy practice and patient protection.',
    points: [
      'Pure Food and Drug Act (1906) — prohibited misbranding/adulteration.',
      'Food, Drug & Cosmetic Act (1938) — required proof of safety; created the FDA framework.',
      'Durham-Humphrey Amendment (1951) — created Rx (legend) vs. OTC distinction.',
      'Kefauver-Harris Amendment (1962) — required proof of efficacy and safety.',
      'Controlled Substances Act (1970) — established the five schedules.',
      'Poison Prevention Packaging Act (1970) — child-resistant containers.',
      'OBRA-90 — counseling offer and DUR for patients.',
      'HIPAA (1996) — protects patient health information (PHI).',
      'Combat Methamphetamine Epidemic Act (2005) — restricts pseudoephedrine sales.',
    ],
  },
  {
    id: 'safety',
    title: 'Medication Safety Essentials',
    summary:
      'Patient safety is the second-largest domain. Know error-prevention strategies cold.',
    points: [
      'Use leading zeros (0.5 mg) and never trailing zeros (avoid 5.0 mg).',
      'Avoid dangerous abbreviations: U, IU, QD, QOD, MS, MSO4, MgSO4 (ISMP "Do Not Use" list).',
      'Tall Man lettering distinguishes LASA drugs (e.g., predniSONE vs. predniSOLONE).',
      'High-alert drugs: insulin, heparin, opioids, chemotherapy, concentrated electrolytes.',
      'Always verify with the NDC and perform a drug utilization review (DUR).',
      'Report errors and near misses; the FDA MedWatch program tracks adverse events.',
    ],
  },
  {
    id: 'storage',
    title: 'Storage & Handling',
    summary: 'Proper storage preserves drug stability and patient safety.',
    points: [
      'Refrigerator: 2–8 °C (36–46 °F) — e.g., insulin, many reconstituted suspensions, some vaccines.',
      'Freezer: −25 to −10 °C for select products.',
      'Room temperature (controlled): 20–25 °C (68–77 °F).',
      'Protect light-sensitive drugs (e.g., nitroglycerin) in original amber containers.',
      'Hazardous drugs (e.g., chemotherapy) follow USP <800> handling and PPE rules.',
      'Sterile compounding follows USP <797>; non-sterile follows USP <795>.',
    ],
  },
  {
    id: 'math',
    title: 'Pharmacy Math Must-Knows',
    summary: 'Math threads through Order Entry & Processing. Practice conversions until automatic.',
    points: [
      '1 tsp = 5 mL; 1 tbsp = 15 mL; 1 fl oz = 30 mL.',
      '1 pint = 480 mL; 1 quart = 960 mL; 1 gallon = 3840 mL.',
      '1 kg = 2.2 lb; 1 lb = 454 g; 1 grain ≈ 65 mg.',
      'Days supply = total quantity ÷ amount used per day.',
      'Concentration math: C1 × V1 = C2 × V2.',
      'Alligation for mixing two strengths to a target strength.',
    ],
  },
]
