// Pharmacy math reference: conversions, formulas, and worked practice problems.

export const conversions = [
  {
    category: 'Metric Weight',
    items: [
      '1 kg = 1000 g',
      '1 g = 1000 mg',
      '1 mg = 1000 mcg',
    ],
  },
  {
    category: 'Metric Volume',
    items: [
      '1 L = 1000 mL',
      '1 mL = 1 cc',
    ],
  },
  {
    category: 'Household / Apothecary',
    items: [
      '1 tsp = 5 mL',
      '1 tbsp = 15 mL = 3 tsp',
      '1 fl oz = 30 mL = 2 tbsp',
      '1 cup = 8 fl oz = 240 mL',
      '1 pint = 16 fl oz = 480 mL',
      '1 quart = 2 pints = 960 mL',
      '1 gallon = 4 quarts = 3840 mL',
    ],
  },
  {
    category: 'Weight (lb / kg / gr)',
    items: [
      '1 kg = 2.2 lb',
      '1 lb = 454 g',
      '1 oz = 28.4 g',
      '1 grain (gr) = 65 mg (commonly 60–65 mg)',
    ],
  },
  {
    category: 'Temperature',
    items: [
      '°C = (°F − 32) × 5/9',
      '°F = (°C × 9/5) + 32',
      'Refrigerator: 2–8 °C (36–46 °F)',
      'Room temperature: 20–25 °C (68–77 °F)',
    ],
  },
]

export const formulas = [
  {
    name: 'Days Supply',
    formula: 'Days supply = Total quantity dispensed ÷ Quantity used per day',
    example: '90 tablets, take 1 tab tid (3/day) → 90 ÷ 3 = 30 days.',
  },
  {
    name: 'Dosage by Weight',
    formula: 'Dose = Dose per kg × Patient weight (kg)',
    example: '10 mg/kg for a 25 kg child → 10 × 25 = 250 mg per dose.',
  },
  {
    name: 'Concentration / Dilution',
    formula: 'C1 × V1 = C2 × V2',
    example: 'How much 50% dextrose to make 100 mL of 20%? (50)(V1)=(20)(100) → V1 = 40 mL, then qs to 100 mL.',
  },
  {
    name: 'Percentage Strength (w/v)',
    formula: '% w/v = grams of solute per 100 mL of solution',
    example: 'A 0.9% NaCl solution contains 0.9 g NaCl per 100 mL → 9 g per 1000 mL (1 L).',
  },
  {
    name: 'Ratio Strength',
    formula: '1:1000 means 1 g in 1000 mL (or 1 g per 1000 g)',
    example: 'Epinephrine 1:1000 = 1 g/1000 mL = 1 mg/mL.',
  },
  {
    name: 'Alligation (Mixing two strengths)',
    formula: 'Use a tic-tac-toe grid: parts of each = difference along the diagonal',
    example: 'Mix 10% and 5% to get 8%: parts of 10% = 8−5 = 3; parts of 5% = 10−8 = 2.',
  },
  {
    name: 'IV Flow Rate (mL/hr)',
    formula: 'Rate (mL/hr) = Total volume (mL) ÷ Time (hr)',
    example: '1000 mL over 8 hr → 1000 ÷ 8 = 125 mL/hr.',
  },
  {
    name: 'IV Drip Rate (gtt/min)',
    formula: 'gtt/min = (Volume mL × Drop factor gtt/mL) ÷ Time (min)',
    example: '1000 mL over 480 min with 15 gtt/mL set → (1000 × 15) ÷ 480 ≈ 31 gtt/min.',
  },
  {
    name: 'BSA (Body Surface Area)',
    formula: 'BSA (m²) = √[(height cm × weight kg) ÷ 3600]',
    example: 'For 170 cm, 70 kg → √[(170 × 70)/3600] = √3.31 ≈ 1.82 m².',
  },
]

// Randomly generated-style practice problems with step-by-step solutions.
export const practiceProblems = [
  {
    question: 'A prescription is written for 1 tablet po bid for 45 days. How many tablets should be dispensed?',
    answer: '90 tablets',
    solution: '1 tab × 2 times/day = 2 tabs/day. 2 × 45 days = 90 tablets.',
  },
  {
    question: 'Convert 2.5 g to milligrams.',
    answer: '2500 mg',
    solution: '1 g = 1000 mg, so 2.5 × 1000 = 2500 mg.',
  },
  {
    question: 'A child weighs 44 lb. What is the weight in kg?',
    answer: '20 kg',
    solution: '44 lb ÷ 2.2 lb/kg = 20 kg.',
  },
  {
    question: 'Amoxicillin 400 mg/5 mL is dosed at 600 mg. How many mL per dose?',
    answer: '7.5 mL',
    solution: '600 mg ÷ 400 mg = 1.5; 1.5 × 5 mL = 7.5 mL.',
  },
  {
    question: 'How many mL of a 1000 mL bag remain after infusing at 125 mL/hr for 3 hours?',
    answer: '625 mL',
    solution: '125 mL/hr × 3 hr = 375 mL infused. 1000 − 375 = 625 mL remaining.',
  },
  {
    question: 'How many grams of dextrose are in 500 mL of D5W (5% dextrose in water)?',
    answer: '25 g',
    solution: '5% w/v = 5 g per 100 mL. 500 mL × (5 g/100 mL) = 25 g.',
  },
  {
    question: 'Order: heparin 25,000 units in 500 mL. What is the concentration in units/mL?',
    answer: '50 units/mL',
    solution: '25,000 units ÷ 500 mL = 50 units/mL.',
  },
  {
    question: 'A medication costs $40 for 30 tablets. What is the price per tablet?',
    answer: '$1.33 per tablet',
    solution: '$40 ÷ 30 = $1.333 ≈ $1.33 per tablet.',
  },
  {
    question: 'Convert 98.6 °F to Celsius.',
    answer: '37 °C',
    solution: '°C = (98.6 − 32) × 5/9 = 66.6 × 0.5556 = 37 °C.',
  },
  {
    question: 'You need 250 mL of a 2% solution from a 10% stock. How much stock is needed?',
    answer: '50 mL of stock (qs to 250 mL)',
    solution: 'C1V1 = C2V2 → (10)(V1) = (2)(250) → V1 = 500/10 = 50 mL. Then qs with diluent to 250 mL.',
  },
]
