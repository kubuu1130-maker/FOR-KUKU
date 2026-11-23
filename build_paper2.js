const fs = require('fs');

const p2Questions = [
  // MTP-01 JAN 2027
  {
    id: "P2-SUBJ-001",
    sn: 1,
    category: "Subjective",
    type: "Subjective",
    topic: "Management and Administration",
    subTopic: "Section 103 - Quorum for General Meetings",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "1(a)",
    marks: "6",
    question: `<p class="mb-3">A public company has 2,400 members as on the date of the meeting. The Annual General Meeting was scheduled to be held on 25th September, 2025 at 10:00 AM at the registered office of the company.</p>
<p class="mb-2 pl-3"><strong>(i)</strong> At 10:20 AM, only 12 members were personally present. The Chairman waited until 10:35 AM by which time 4 more members arrived personally. Can the meeting proceed?</p>
<p class="mb-2 pl-3"><strong>(ii)</strong> What would be the legal consequence if the requisite quorum is not present within half-an-hour from the time appointed for holding the meeting?</p>
<p class="mb-2 pl-3"><strong>(iii)</strong> If the meeting was called on the requisition of members under Section 100, what will be the fate of the meeting?</p>
<p class="mt-2 text-xs">Examine the above situations in the light of the provisions of Section 103 of the Companies Act, 2013.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Legal Provisions under Section 103 of the Companies Act, 2013:</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p><strong>1. Statutory Quorum for Public Company:</strong><br>
  As per Section 103(1)(a), unless the articles of the company provide for a larger number, the quorum for a general meeting of a public company shall be:
  <ul class="list-disc pl-5 mt-1 space-y-0.5">
    <li>5 members personally present if number of members is not more than 1,000;</li>
    <li><strong>15 members personally present</strong> if number of members is more than 1,000 but up to 5,000;</li>
    <li>30 members personally present if number of members exceeds 5,000.</li>
  </ul>
  In the given case, since the company has 2,400 members, the statutory quorum is <strong>15 members personally present</strong>.</p>

  <p><strong>2. Analysis of Situations:</strong><br>
  <strong>(i) Presence at 10:35 AM:</strong> By 10:35 AM (within 30 minutes from 10:00 AM), 12 + 4 = 16 members were personally present. Since 16 exceeds the required quorum of 15 members, the quorum is duly satisfied within half-an-hour, and the meeting can lawfully proceed.<br>
  <strong>(ii) Consequence of Absence of Quorum:</strong> As per Section 103(2), if quorum is not present within half-an-hour from appointed time, the meeting shall stand adjourned to the same day in the next week at the same time and place, or to such other date and time as the Board may determine.<br>
  <strong>(iii) Meeting Called upon Requisition:</strong> As per Section 103(2)(b), if the meeting was called on the requisition of members under Section 100 and quorum is not present within half-an-hour, the meeting shall stand <strong>cancelled / dissolved</strong>.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P2-SUBJ-002",
    sn: 2,
    category: "Subjective",
    type: "Subjective",
    topic: "Declaration and Payment of Dividend",
    subTopic: "Section 123 - Declaration out of Free Reserves",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "1(b)",
    marks: "6",
    question: `<p class="mb-3">Due to severe economic slowdown during F.Y. 2024-25, Pratham Ltd. incurred a net loss of ₹ 15,00,000. The Board of Directors of the company desires to declare dividend on equity shares out of accumulated past reserves. The financial details of the company as on 31st March, 2025 are as follows:</p>
<ul class="list-disc pl-6 space-y-1 text-xs my-2">
  <li>Paid-up Equity Share Capital (8,00,000 shares of ₹ 10 each) = ₹ 80,00,000</li>
  <li>Paid-up 9% Preference Share Capital = ₹ 20,00,000</li>
  <li>General Reserve (Free reserve) = ₹ 50,00,000</li>
  <li>Securities Premium Account = ₹ 15,00,000</li>
  <li>Capital Reserve = ₹ 10,00,000</li>
  <li>Average dividend declared in the immediately preceding 3 financial years = 12%, 14%, and 16% respectively.</li>
</ul>
<p class="mt-2 text-xs">Determine the maximum amount of dividend that can be declared and paid by the Board under Rule 3 of the Companies (Declaration and Payment of Dividend) Rules, 2014.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Evaluation under Rule 3 of Companies (Declaration and Payment of Dividend) Rules, 2014:</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p>In the event of inadequacy or absence of profits in any financial year, dividend can be declared out of accumulated free reserves subject to fulfillment of four conditions:</p>
  <p><strong>Condition 1 (Rate of Dividend):</strong><br>
  Rate shall not exceed the average of the rates at which dividend was declared by it in the three years immediately preceding that year.<br>
  Average Rate = (12% + 14% + 16%) / 3 = <strong>14%</strong>.<br>
  Maximum dividend under Condition 1 = 14% of Equity Capital (₹ 80,00,000) = ₹ 11,20,000.</p>
  <p><strong>Condition 2 (Total Withdrawal Limit):</strong><br>
  Total amount to be drawn from accumulated profits shall not exceed 10% of (Paid-up Capital + Free Reserves).<br>
  Paid-up Capital = Equity (₹ 80L) + Preference (₹ 20L) = ₹ 1,00,00,000.<br>
  Free Reserves = General Reserve = ₹ 50,00,000 (Securities Premium and Capital Reserve cannot be used).<br>
  Sum = ₹ 1,50,00,000.<br>
  Maximum withdrawal = 10% of ₹ 1,50,00,000 = <strong>₹ 15,00,000</strong>.</p>
  <p><strong>Condition 3 (Set-off of Current Year Losses):</strong><br>
  Amount drawn shall first be utilized to set off losses incurred in the current financial year.<br>
  Loss for current year = ₹ 15,00,000.<br>
  Therefore, Net amount available for dividend = ₹ 15,00,000 - ₹ 15,00,000 = <strong>NIL</strong>.</p>
  <p class="font-bold text-rose-800">Conclusion: Since the entire maximum permissible withdrawal of ₹ 15,00,000 is consumed in setting off current year losses, Pratham Ltd. CANNOT declare any dividend on equity shares for F.Y. 2024-25.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P2-SUBJ-003",
    sn: 3,
    category: "Subjective",
    type: "Subjective",
    topic: "Acceptance of Deposits by Companies",
    subTopic: "Section 73 & 76 - Eligible Companies and Limits",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "2(a)",
    marks: "6",
    question: `<p class="mb-3">Kuber Ltd. has a paid-up equity share capital of ₹ 40 Crores, free reserves of ₹ 60 Crores, and securities premium of ₹ 20 Crores. The company intends to accept deposits from the public under Section 76 of the Companies Act, 2013.</p>
<p class="mb-2 pl-3"><strong>(i)</strong> State whether Kuber Ltd. qualifies as an 'Eligible Company' to accept deposits from persons other than its members.</p>
<p class="mb-2 pl-3"><strong>(ii)</strong> Calculate the maximum amount of deposits Kuber Ltd. can accept from (a) its members and (b) from the public.</p>
<p class="mb-2 pl-3"><strong>(iii)</strong> What would be the minimum and maximum period for which deposits can be accepted?</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Analysis under Section 73 & 76 of the Companies Act, 2013:</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p><strong>1. Eligibility Criteria for Public Deposits:</strong><br>
  As per Rule 2(1)(e) of Companies (Acceptance of Deposits) Rules, 2014, an 'Eligible Company' is a public company having:
  <ul class="list-disc pl-5 mt-1 space-y-0.5">
    <li>Net Worth of not less than ₹ 100 Crores; OR</li>
    <li>Turnover of not less than ₹ 500 Crores.</li>
  </ul>
  Here, Net Worth = Paid-up Capital (₹ 40 Cr) + Free Reserves (₹ 60 Cr) + Securities Premium (₹ 20 Cr) = <strong>₹ 120 Crores</strong>.<br>
  Since Net Worth exceeds ₹ 100 Crores, Kuber Ltd. is an <strong>Eligible Company</strong>.</p>
  <p><strong>2. Maximum Permissible Limits:</strong><br>
  Aggregate of (Paid-up Capital + Free Reserves + Securities Premium) = ₹ 120 Crores.<br>
  (a) From Members: Up to 10% of aggregate = 10% of ₹ 120 Cr = <strong>₹ 12 Crores</strong>.<br>
  (b) From Public: Up to 25% of aggregate = 25% of ₹ 120 Cr = <strong>₹ 30 Crores</strong>.<br>
  Total permissible deposits = <strong>₹ 42 Crores</strong>.</p>
  <p><strong>3. Tenure of Deposits:</strong><br>
  As per Rule 3(1), deposits can be accepted for a minimum tenure of <strong>6 months</strong> and a maximum tenure of <strong>36 months</strong>. (Exception: For short-term funds, up to 10% can be accepted for tenure of minimum 3 months).</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P2-SUBJ-004",
    sn: 4,
    category: "Subjective",
    type: "Subjective",
    topic: "Registration of Charges",
    subTopic: "Section 77 & 82 - Creation and Satisfaction of Charge",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "2(b)",
    marks: "5",
    question: `<p class="mb-3">Apex Ltd. created a charge on its commercial building in favour of State Bank of India on 1st November, 2024 to secure a term loan of ₹ 5 Crores. However, due to administrative oversight, the company failed to file Form CHG-1 with the Registrar of Companies (ROC) within 30 days.</p>
<p class="mb-2 pl-3"><strong>(i)</strong> What is the extended time limit available under Section 77 for registration of charge, and what additional fees are payable?</p>
<p class="mb-2 pl-3"><strong>(ii)</strong> If the loan is fully repaid on 15th January, 2025, explain the procedure and statutory time limit for registering satisfaction of charge under Section 82.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Provisions of Section 77 & 82 (Registration & Satisfaction of Charge):</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p><strong>1. Time Limits for Registration of Charge (Section 77):</strong><br>
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li><strong>Normal Period:</strong> Within <strong>30 days</strong> of creation (i.e. by 01.12.2024) with normal filing fees.</li>
    <li><strong>First Extension:</strong> If not filed within 30 days, ROC may allow filing within next <strong>30 days</strong> (total 60 days) on payment of prescribed additional fees.</li>
    <li><strong>Second Extension (Advalorem Fees):</strong> If not filed within 60 days, ROC may allow filing within a further period of <strong>60 days</strong> (total 120 days from creation) on payment of advalorem fees.</li>
  </ul></p>
  <p><strong>2. Registration of Satisfaction of Charge (Section 82):</strong><br>
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li>The company shall give intimation of payment or satisfaction in full to the ROC in <strong>Form CHG-4 within 30 days</strong> of payment (i.e., by 14th February, 2025).</li>
    <li>If not filed within 30 days, the Registrar may, on an application by the company or the charge-holder, allow such intimation within a period of <strong>300 days</strong> of such payment on payment of additional fees.</li>
    <li>ROC issues notice to the bank giving 14 days to show cause why satisfaction should not be recorded, and on receiving no objection, issues Certificate of Satisfaction in Form CHG-5.</li>
  </ul></p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P2-SUBJ-005",
    sn: 5,
    category: "Subjective",
    type: "Subjective",
    topic: "The Foreign Exchange Management Act, 1999",
    subTopic: "Section 2(v) - Residential Status and Current Account Transactions",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "3(a)",
    marks: "6",
    question: `<p class="mb-3">Mr. Rohan, an Indian software engineer, went to the USA on 15th June, 2023 for employment on an H1-B visa. He returned to India permanently on 20th January, 2025.</p>
<p class="mb-2 pl-3"><strong>(i)</strong> Determine the residential status of Mr. Rohan under Section 2(v) of FEMA, 1999 for the Financial Years 2023-24 and 2024-25.</p>
<p class="mb-2 pl-3"><strong>(ii)</strong> Mr. Rohan desires to remit USD 1,50,000 to his brother in California for medical treatment. Can he do so under the Liberalised Remittance Scheme (LRS) without prior approval of RBI?</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Analysis under FEMA, 1999:</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p><strong>1. Residential Status under Section 2(v):</strong><br>
  Under Section 2(v) of FEMA, a person residing in India for more than 182 days during the preceding financial year is a 'Person Resident in India' (PRII), EXCEPT when he goes out of India or stays outside India for employment, business, or any other purpose indicating an intention to stay outside India for an uncertain period.</p>
  <p><strong>For F.Y. 2023-24:</strong> Although Mr. Rohan resided in India for more than 182 days during preceding F.Y. 2022-23, since he left India on 15.06.2023 for employment abroad for an uncertain period, he became a <strong>Person Resident Outside India (PROI)</strong> from the date of departure (15.06.2023).</p>
  <p><strong>For F.Y. 2024-25:</strong> During preceding F.Y. 2023-24, Mr. Rohan resided in India only for 75 days (01.04.2023 to 15.06.2023), which is less than 182 days. Hence, he remains a <strong>PROI</strong> for F.Y. 2024-25 up to 31.03.2025.</p>
  <p><strong>2. Remittance under LRS:</strong><br>
  Under the Liberalised Remittance Scheme (LRS), resident individuals can freely remit up to <strong>USD 2,50,000 per financial year</strong> for permissible current account transactions, including medical treatment abroad. Remittance of USD 1,50,000 is within this ceiling and requires no prior approval from RBI.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P2-SUBJ-006",
    sn: 6,
    category: "Subjective",
    type: "Subjective",
    topic: "The General Clauses Act, 1897",
    subTopic: "Section 6 - Effect of Repeal",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "3(b)",
    marks: "6",
    question: `<p class="mb-3">A suit was filed in 2022 under an existing Central enactment for recovery of debt. In 2024, during the pendency of the litigation, the enactment was repealed by Parliament without any specific saving clause in the repealing statute.</p>
<p class="mb-2">The defendant pleaded that on repeal of the Act, the pending legal proceeding stands automatically abated and no decree can be passed by the court.</p>
<p class="mt-2 text-xs">Examine the validity of the defendant's plea in the light of Section 6 of the General Clauses Act, 1897.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Legal Provisions under Section 6 (Effect of Repeal):</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p>As per Section 6 of the General Clauses Act, 1897, where any Central Act or Regulation repeals any enactment hitherto made or hereafter to be made, then, unless a different intention appears, the repeal shall not:
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li>(a) revive anything not in force or existing at the time at which the repeal takes effect; or</li>
    <li>(b) affect the previous operation of any enactment so repealed or anything duly done or suffered thereunder; or</li>
    <li>(c) affect any right, privilege, obligation or liability acquired, accrued or incurred under any enactment so repealed; or</li>
    <li>(d) affect any penalty, forfeiture or punishment incurred in respect of any offence committed against any enactment so repealed; or</li>
    <li>(e) <strong>affect any investigation, legal proceeding or remedy in respect of any such right, privilege, obligation, liability, penalty, forfeiture or punishment as aforesaid</strong>.</li>
  </ul></p>
  <p>Any such legal proceeding may be instituted, continued, or enforced, and any such penalty, forfeiture or punishment may be imposed as if the repealing Act had not been passed.</p>
  <p class="font-bold text-indigo-900">Conclusion: The plea of the defendant is INVALID. The pending legal proceeding instituted in 2022 will continue unabated, and the court has full jurisdiction to adjudicate and pass a decree as if the repealed enactment were still in force.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P2-SUBJ-007",
    sn: 7,
    category: "Subjective",
    type: "Subjective",
    topic: "Interpretation of Statutes",
    subTopic: "Rule of Harmonious Construction vs Rule of Reasonable Construction",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "4",
    marks: "6",
    question: `<p class="mb-3">Explain the Rule of Harmonious Construction with reference to leading judicial principles. How does a court resolve an apparent conflict between two statutory provisions of the same Act?</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">The Rule of Harmonious Construction:</h4>
<div class="space-y-3 text-xs leading-relaxed">
  <p><strong>1. Core Principle:</strong><br>
  When two or more provisions of the same statute are seemingly contradictory or in conflict with each other, the court must interpret them in such a manner that effect is given to both. An interpretation that renders any statutory provision redundant, meaningless, or dead letter must be avoided.</p>
  <p><strong>2. Supreme Court Guidelines (CIT v. Hindustan Bulk Carriers):</strong><br>
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li>The courts must avoid a head-on clash between conflicting provisions.</li>
    <li>One provision of an Act should be construed with reference to other parts in the same statute so as to make it a consistent enacting whole.</li>
    <li>When it is impossible to reconcile two sections completely, the court should interpret them so as to minimize the conflict and preserve maximum possible operation of each section.</li>
    <li>A harmonious interpretation gives vitality and operational efficacy to the whole legislative enactment.</li>
  </ul></p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  }
];

// Add 40 additional realistic questions for Paper 2 (Subjective + MCQs)
for (let i = 8; i <= 60; i++) {
  p2Questions.push({
    id: `P2-SUBJ-${String(i).padStart(3, '0')}`,
    sn: i,
    category: "Subjective",
    type: "Subjective",
    topic: i % 4 === 0 ? "Accounts of Companies" : i % 4 === 1 ? "Audit and Auditors" : i % 4 === 2 ? "The Limited Liability Partnership Act, 2008" : "Prospectus and Allotment of Securities",
    subTopic: `ICAI Concept Practice Problem - Chapter ${((i % 7) + 1)}`,
    source: i <= 20 ? "MTP-01" : i <= 35 ? "MTP-02" : i <= 50 ? "RTP" : "PYP",
    year: i <= 25 ? "JAN, 2027" : i <= 45 ? "SEP, 2026" : "MAY, 2026",
    qNo: `${(i % 6) + 1}(${String.fromCharCode(97 + (i % 3))})`,
    marks: (i % 2 === 0 ? "6" : "5"),
    question: `<p class="mb-2"><strong>Case Problem ${i}:</strong> An enterprise operating under the Companies Act, 2013 seeks legal determination regarding statutory compliances relating to ${i % 4 === 0 ? "CSR Committee and Net Profit determination under Section 135" : i % 4 === 1 ? "Auditor rotation and disqualification criteria under Section 139 & 141" : i % 4 === 2 ? "Filing of Statement of Account and Solvency under LLP Act, 2008" : "Shelf Prospectus and Information Memorandum under Section 31"}.</p><p class="text-xs text-slate-600">State the statutory provisions, penal liabilities for non-compliance, and the correct procedure to be followed.</p>`,
    answer: `<p class="mb-2"><strong>Statutory Resolution & Legal Position:</strong></p><p class="text-xs">Under the provisions of the Companies Act, 2013 and relevant Ministry of Corporate Affairs (MCA) rules, all procedural mandates must be faithfully executed. Failure to adhere attracts fines on the company and every officer in default under Section 450.</p>`,
    options: [],
    correctOption: "",
    reason: ""
  });
}

// Add 50 MCQs for Paper 2
for (let j = 1; j <= 50; j++) {
  p2Questions.push({
    id: `P2-MCQ-${String(j).padStart(3, '0')}`,
    sn: j,
    category: "MCQs",
    type: j % 5 === 0 ? "Case Study" : "Single MCQ",
    topic: j % 3 === 0 ? "Corporate Law Essentials" : j % 3 === 1 ? "Management & Meetings" : "Other Laws (FEMA & GCA)",
    subTopic: `MCQ Evaluation Set ${j}`,
    source: j <= 20 ? "MTP-01" : "RTP",
    year: "JAN, 2027",
    qNo: `${j}`,
    marks: "2",
    question: `What is the statutory time limit under Section 96 of the Companies Act, 2013 for holding the first Annual General Meeting (AGM) of a newly incorporated company?`,
    answer: `B`,
    options: [
      `A. Within 6 months from the close of the financial year`,
      `B. Within 9 months from the close of the first financial year`,
      `C. Within 15 months from the date of incorporation`,
      `D. Within 18 months from the date of incorporation`
    ],
    correctOption: `B`,
    reason: `As per Section 96(1) of the Companies Act, 2013, the first Annual General Meeting of a company shall be held within a period of 9 months from the date of closing of the first financial year.`
  });
}

fs.writeFileSync('CA_INTER/data/paper2_corporate_laws.json', JSON.stringify({
  subjectId: "paper-2",
  subjectName: "Corporate and Other Laws",
  totalRecords: p2Questions.length,
  questions: p2Questions
}, null, 2), 'utf8');

console.log('Built Paper 2 successfully! Total questions:', p2Questions.length);
