// Common pharmacy abbreviations and sig codes used in prescription interpretation.
// Grouped by category. abbr = abbreviation, meaning = plain English.

export const sigCategories = [
  {
    category: 'Frequency / Timing',
    codes: [
      { abbr: 'qd', meaning: 'every day (daily)' },
      { abbr: 'bid', meaning: 'twice a day' },
      { abbr: 'tid', meaning: 'three times a day' },
      { abbr: 'qid', meaning: 'four times a day' },
      { abbr: 'qh', meaning: 'every hour' },
      { abbr: 'q4h', meaning: 'every 4 hours' },
      { abbr: 'q6h', meaning: 'every 6 hours' },
      { abbr: 'q8h', meaning: 'every 8 hours' },
      { abbr: 'qhs', meaning: 'every night at bedtime' },
      { abbr: 'qam', meaning: 'every morning' },
      { abbr: 'qpm', meaning: 'every evening' },
      { abbr: 'prn', meaning: 'as needed' },
      { abbr: 'stat', meaning: 'immediately' },
      { abbr: 'ac', meaning: 'before meals' },
      { abbr: 'pc', meaning: 'after meals' },
      { abbr: 'hs', meaning: 'at bedtime' },
    ],
  },
  {
    category: 'Route of Administration',
    codes: [
      { abbr: 'po', meaning: 'by mouth (orally)' },
      { abbr: 'pr', meaning: 'rectally' },
      { abbr: 'sl', meaning: 'sublingual (under the tongue)' },
      { abbr: 'top', meaning: 'topically' },
      { abbr: 'IM', meaning: 'intramuscular' },
      { abbr: 'IV', meaning: 'intravenous' },
      { abbr: 'SubQ / SC', meaning: 'subcutaneous' },
      { abbr: 'ID', meaning: 'intradermal' },
      { abbr: 'inh', meaning: 'inhalation' },
      { abbr: 'NGT', meaning: 'nasogastric tube' },
      { abbr: 'IT', meaning: 'intrathecal' },
    ],
  },
  {
    category: 'Eye / Ear',
    codes: [
      { abbr: 'OD', meaning: 'right eye' },
      { abbr: 'OS', meaning: 'left eye' },
      { abbr: 'OU', meaning: 'both eyes' },
      { abbr: 'AD', meaning: 'right ear' },
      { abbr: 'AS', meaning: 'left ear' },
      { abbr: 'AU', meaning: 'both ears' },
    ],
  },
  {
    category: 'Dosage Form / Quantity',
    codes: [
      { abbr: 'tab', meaning: 'tablet' },
      { abbr: 'cap', meaning: 'capsule' },
      { abbr: 'gtt', meaning: 'drop(s)' },
      { abbr: 'tsp', meaning: 'teaspoon (5 mL)' },
      { abbr: 'tbsp', meaning: 'tablespoon (15 mL)' },
      { abbr: 'ss', meaning: 'one-half (½)' },
      { abbr: 'aa', meaning: 'of each' },
      { abbr: 'qs', meaning: 'a sufficient quantity' },
      { abbr: 'ung', meaning: 'ointment' },
      { abbr: 'supp', meaning: 'suppository' },
      { abbr: 'sol', meaning: 'solution' },
      { abbr: 'susp', meaning: 'suspension' },
      { abbr: 'elix', meaning: 'elixir' },
      { abbr: 'SR / ER / XR', meaning: 'sustained / extended release' },
    ],
  },
  {
    category: 'Directions / Misc',
    codes: [
      { abbr: 'ad lib', meaning: 'as desired, freely' },
      { abbr: 'disp', meaning: 'dispense' },
      { abbr: 'sig', meaning: 'directions / write on label' },
      { abbr: 'ut dict (ud)', meaning: 'as directed' },
      { abbr: 'NPO', meaning: 'nothing by mouth' },
      { abbr: 'NR', meaning: 'no refills' },
      { abbr: 'DAW', meaning: 'dispense as written' },
      { abbr: 'NKA', meaning: 'no known allergies' },
      { abbr: 'NKDA', meaning: 'no known drug allergies' },
      { abbr: 'wa', meaning: 'while awake' },
      { abbr: 'c̄', meaning: 'with' },
      { abbr: 's̄', meaning: 'without' },
    ],
  },
]

// Flattened list for flashcards / quizzes.
export const sigCodes = sigCategories.flatMap((c) =>
  c.codes.map((code) => ({ ...code, category: c.category }))
)
