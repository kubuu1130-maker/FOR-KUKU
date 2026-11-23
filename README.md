# CA Intermediate Study Partner (Jan 2027 Pro)

This workspace contains the complete standalone practice and test platform for ICAI CA Intermediate (New Scheme, targeting the January 2027 attempt). 

It replicates the full interactive structure observed in `ca inter .mp4` and `castudypartner.com`, without requiring an internet connection or login limits.

---

## 1. Quick Start

- **Double-click `start.bat`** or simply double-click `index.html` in this folder.
- It opens directly in Google Chrome, Microsoft Edge, or Firefox.
- All database records, past questions, and answers load locally from `./data/embedded_data.js`.

---

## 2. Platform Architecture & Features

### A. Subject Selection Matrix (Group 1 & Group 2)
The home dashboard matches the layout from `castudypartner.com`:

| Group | Paper | Subject Name | Coverage |
| :--- | :--- | :--- | :--- |
| **Group-1** | Paper-1 | Advanced Accounting | 11 Attempts, 767 Records (500 Subjective, 267 MCQs) |
| **Group-1** | Paper-2 | Corporate and Other Laws | 8 Attempts + 50+ PYQs, 646 Records (343 Subjective, 303 MCQs) |
| **Group-1** | Paper-3 | Taxation (Income Tax & GST) | 7 Attempts + 50+ PYQs, 685 Records |
| **Group-2** | Paper-4 | Cost & Management Accounting | 18 Attempts, 712 Records |
| **Group-2** | Paper-5 | Auditing & Ethics | 18 Attempts, 690 Records |
| **Group-2** | Paper-6 | Financial Management & Strategic Management | 18 Attempts, 650 Records |

**Total Records Across Site**: 4,150+ categorized past year questions, Revision Test Papers (RTPs), and Mock Test Papers (MTPs).

---

### B. Question Bank Explorer & Filters
Clicking any subject takes you to its question repository:
- **Tabs**: `Subjective` questions, `MCQs`, `Important` (starred), and `Quick Concepts`.
- **Search**: Live instant search across questions, topics, standards (e.g. `AS 10`, `Sec 73`, `Amalgamation`, `Private Placement`).
- **Dropdown Filters**:
  - `Source`: Filter by `MTP-01`, `MTP-02`, `RTP`, or `Suggested Answer`.
  - `Year`: Filter by `JAN, 2027`, `SEP, 2026`, `MAY, 2026`, `JAN, 2026`, `SEP, 2025`, etc.
  - `Topic`: Filter by specific Accounting Standard or Law Chapter.
- **Toggles**:
  - `👁️ Read`: Track questions you have already reviewed.
  - `📝 Notes`: Filter only questions where you left personal notes.
  - `⭐ Important`: Filter high-yield revision questions.

---

### C. Interactive Question Modal
Clicking any row in the table opens the full question modal:
- **View Modes**: Switch between `Both`, `Question`, and `Answer`.
- **Copy**: One-click copy icon to copy question text and solution to clipboard.
- **Integrated Case Scenarios**: Displays the case scenario fact pattern, followed by linked sub-questions with separate options.
- **Show Answer**: Reveals the correct option, marks breakdown, and statutory analysis (e.g. Section 73 & Rule 13 on Deposit Repayment Reserve, Section 123(6) on dividend prohibition, AS 10 revaluation reserve treatment, AS 28 impairment tests).
- **Personal Notes Drawer**: Expand the `Notes ▲` drawer to write formulas or exam warnings. Notes persist automatically in browser storage.
- **Navigation**: Use `← Previous` and `Next →` to step through questions without closing the modal.

---

### D. Mock Test Simulator (Speed Drill Engine)
Click `Test Mode` on any subject or click the floating `🔥 Today's Challenge` button:
- Real-time countdown timer.
- Question palette tracking Answered (Green), Marked for Review (Purple), and Not Answered (Gray).
- Auto-grades your answers and outputs an instant performance scorecard with accuracy percentage and question-by-question review.

---

## 3. Directory Layout

```
CA_INTER/
├── data/
│   ├── embedded_data.js             # Standalone bundled database loaded by index.html
│   ├── subjects.json                # Complete paper metadata, syllabus, and attempt counts
│   ├── paper1_advanced_accounting.json # AS standards, consolidation, branch accounts
│   ├── paper2_corporate_laws.json   # Companies Act 2013, deposits, private placement
│   ├── paper3_taxation.json         # Income tax heads, deductions, GST supply & ITC
│   ├── paper4_costing.json          # Marginal costing, standard variance, budgets
│   ├── paper5_audit.json            # Standards on Auditing (SAs), audit reports
│   └── paper6_fmsm.json             # Leverages, ratios, capital budgeting, Porter's model
├── index.html                       # Standalone React + Tailwind SPA application
├── start.bat                        # One-click Windows desktop launcher
└── README.md                        # Documentation & study roadmap
```

---

## 4. Jan 2027 Attempt Study Recommendations

1. **Paper 1 (Advanced Accounting)**:
   - Prioritize AS 21, AS 14 (Amalgamation), AS 10, AS 11, and Branch Accounts (Debtors / Stock & Debtors method).
   - In AS 28, practice calculating Recoverable Amount as higher of Net Selling Price and Value in Use.
2. **Paper 2 (Corporate and Other Laws)**:
   - High-weightage chapters: Accounts of Companies (Sec 128-138), Audit & Auditors (Sec 139-148), Deposits (Sec 73-76), and Private Placement limits (Rule 14).
   - In Other Laws, master Section 6 of The General Clauses Act (effect of repeal) and Internal Aids to Interpretation.
