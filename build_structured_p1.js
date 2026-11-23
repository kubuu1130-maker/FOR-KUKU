const fs = require('fs');
const path = require('path');

const outDir = 'CA_INTER/data/structured_questions';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// ─────────────────────────────────────────────────────────────
// Paper 1 - Advanced Accounting (6 Core Questions MTP-01)
// ─────────────────────────────────────────────────────────────

const p1_q1 = {
  paper: "paper-1",
  position: 1,
  original_id: "p1_q1a_as4",
  source_url: "https://www.castudypartner.com/questions/56a55ce724",
  title: "Question-1(a)",
  topic: "AS 4",
  sub_topic: "Contingencies and Events occuring after the Balance Sheet Date",
  source: "MTP-01",
  year: "JAN, 2027",
  marks: "7",
  flow: ["view_both", "view_question", "view_answer", "mark_read", "mark_important"],
  blocks: [
    {
      type: "text",
      content: "The financial statements of Mehta Ltd. for the year 2024-25 approved by the Board of Directors on 15th July, 2025. The following information was provided:\n\n(i) A suit against the company's advertisement was filed by a party on 20th April, 2025, claiming damages of ₹ 25 lakhs.\n\n(ii) Theft of cash of ₹ 5 lakhs by the cashier on 31st March, 2025 but was detected on 16th July, 2025.\n\n(iii) Company sent a proposal to sell an immovable property for ₹ 40 lakhs in March, 2025. The book value of the property was ₹ 30 lakhs on 31st March, 2025. However, the deed was registered on 15th April, 2025.\n\n(iv) A major fire has damaged the assets in a factory on 5th April, 2025. However, the assets are fully insured.\n\nWith reference to AS-4 \"Contingencies and events occurring after the balance sheet date\", state whether the above mentioned events will be treated as contingencies, adjusting events or non-adjusting events occurring after the balance sheet date."
    },
    {
      type: "answer",
      title: "Answer-1(a)",
      content: "(i) Suit filed against the company is a contingent liability but it was not existing as on balance sheet date as the suit was filed on 20th April after the balance Sheet date. As per AS 4, 'Contingencies' used in the Standard is restricted to conditions or situations at the balance sheet date, the financial effect of which is to be determined by future events which may or may not occur. Hence, it will have no effect on financial statements and will be a non-adjusting event.\n\n(ii) Only those significant events which occur between the balance sheet date and the date on which the financial statements are approved, may indicate the need for adjustment to assets and liabilities existing on the balance sheet date or may require disclosure. In the given case, theft of cash was detected on 16th July, 2025 after approval of financial statements by the Board of Directors, hence no treatment is required.\n\n(iii) Adjustments to assets and liabilities are not appropriate for events occurring after the balance sheet date, if such events do not relate to conditions existing at the balance sheet date. In the given case, sale of immovable property was under proposal stage (negotiations also not started) on the balance sheet date. Therefore, no adjustment to assets for sale of immovable property is required in the financial statements for the year ended 31st March, 2025.\n\n(iv) The condition of fire occurrence was not existing on the balance sheet date. Only the disclosure regarding event of fire and loss being completely insured may be given in the report of approving authority."
    }
  ],
  meta: {
    sub_parts: ["(i)", "(ii)", "(iii)", "(iv)"],
    tables: []
  }
};

const p1_q2 = {
  paper: "paper-1",
  position: 2,
  original_id: "p1_q1b_as21",
  source_url: "https://www.castudypartner.com/questions/56a55ce724",
  title: "Question-1(b)",
  topic: "AS 21",
  sub_topic: "Consolidated Financial Statements",
  source: "MTP-01",
  year: "JAN, 2027",
  marks: "7",
  flow: ["view_both", "view_question", "view_answer", "mark_read", "mark_important"],
  blocks: [
    {
      type: "text",
      content: "From the following data, determine Minority Interest on the date of acquisition and on the date of consolidation in each case:"
    },
    {
      type: "table",
      caption: "Minority Interest Consolidation Data",
      html: `<table class="w-full text-xs border border-slate-400 border-collapse my-3">
  <thead>
    <tr class="bg-slate-100 font-bold text-center">
      <th rowspan="3" class="border border-slate-400 p-2">Case</th>
      <th rowspan="3" class="border border-slate-400 p-2">Subsidiary Company</th>
      <th rowspan="3" class="border border-slate-400 p-2">% of Share Owned</th>
      <th rowspan="3" class="border border-slate-400 p-2">Cost</th>
      <th colspan="2" class="border border-slate-400 p-2">Date of Acquisition</th>
      <th colspan="2" class="border border-slate-400 p-2">Consolidation date</th>
    </tr>
    <tr class="bg-slate-100 font-bold text-center">
      <th colspan="2" class="border border-slate-400 p-1">01-01-2024</th>
      <th colspan="2" class="border border-slate-400 p-1">31-12-2024</th>
    </tr>
    <tr class="bg-slate-100 font-bold text-center">
      <th class="border border-slate-400 p-1">Share Capital</th>
      <th class="border border-slate-400 p-1">Profit and Loss A/c</th>
      <th class="border border-slate-400 p-1">Share Capital</th>
      <th class="border border-slate-400 p-1">Profit and Loss A/c</th>
    </tr>
    <tr class="bg-slate-50 text-center">
      <th class="border border-slate-400 p-1"></th>
      <th class="border border-slate-400 p-1"></th>
      <th class="border border-slate-400 p-1"></th>
      <th class="border border-slate-400 p-1">₹</th>
      <th class="border border-slate-400 p-1">₹</th>
      <th class="border border-slate-400 p-1">₹</th>
      <th class="border border-slate-400 p-1">₹</th>
      <th class="border border-slate-400 p-1">₹</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-i</td>
      <td class="border border-slate-400 p-2 text-center">X</td>
      <td class="border border-slate-400 p-2 text-center">85%</td>
      <td class="border border-slate-400 p-2 text-right">1,85,000</td>
      <td class="border border-slate-400 p-2 text-right">1,35,000</td>
      <td class="border border-slate-400 p-2 text-right">60,000</td>
      <td class="border border-slate-400 p-2 text-right">1,35,000</td>
      <td class="border border-slate-400 p-2 text-right">70,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-ii</td>
      <td class="border border-slate-400 p-2 text-center">Y</td>
      <td class="border border-slate-400 p-2 text-center">70%</td>
      <td class="border border-slate-400 p-2 text-right">1,60,000</td>
      <td class="border border-slate-400 p-2 text-right">1,25,000</td>
      <td class="border border-slate-400 p-2 text-right">45,000</td>
      <td class="border border-slate-400 p-2 text-right">1,25,000</td>
      <td class="border border-slate-400 p-2 text-right">5,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-iii</td>
      <td class="border border-slate-400 p-2 text-center">Z</td>
      <td class="border border-slate-400 p-2 text-center">65%</td>
      <td class="border border-slate-400 p-2 text-right">83,000</td>
      <td class="border border-slate-400 p-2 text-right">25,000</td>
      <td class="border border-slate-400 p-2 text-right">5,000</td>
      <td class="border border-slate-400 p-2 text-right">25,000</td>
      <td class="border border-slate-400 p-2 text-right">5,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-iv</td>
      <td class="border border-slate-400 p-2 text-center">M</td>
      <td class="border border-slate-400 p-2 text-center">90%</td>
      <td class="border border-slate-400 p-2 text-right">60,000</td>
      <td class="border border-slate-400 p-2 text-right">45,000</td>
      <td class="border border-slate-400 p-2 text-right">20,000</td>
      <td class="border border-slate-400 p-2 text-right">45,000</td>
      <td class="border border-slate-400 p-2 text-right">40,000</td>
    </tr>
  </tbody>
</table>`,
      table_data: {
        headers: ["Case", "Subsidiary Company", "% of Share Owned", "Cost", "Date of Acquisition (01-01-2024) Share Capital", "Date of Acquisition P&L", "Consolidation date (31-12-2024) Share Capital", "Consolidation date P&L"],
        rows: [
          ["Case-i", "X", "85%", "1,85,000", "1,35,000", "60,000", "1,35,000", "70,000"],
          ["Case-ii", "Y", "70%", "1,60,000", "1,25,000", "45,000", "1,25,000", "5,000"],
          ["Case-iii", "Z", "65%", "83,000", "25,000", "5,000", "25,000", "5,000"],
          ["Case-iv", "M", "90%", "60,000", "45,000", "20,000", "45,000", "40,000"]
        ]
      }
    },
    {
      type: "answer",
      title: "Answer-1(b)",
      content: "As per AS 21 \"Consolidated Financial Statements\", Minority Interest represents that part of the net results of operations and of net assets of a subsidiary attributable to interests which are not owned, directly or indirectly through subsidiaries, by the parent.\n\nCalculation of Minority Interest percentage in each case:\n- Case-i (X): 100% - 85% = 15%\n- Case-ii (Y): 100% - 70% = 30%\n- Case-iii (Z): 100% - 65% = 35%\n- Case-iv (M): 100% - 90% = 10%\n\nSummary Statement of Minority Interest:",
      table: {
        html: `<table class="w-full text-xs border border-slate-400 border-collapse my-3">
  <caption class="font-bold p-1 text-slate-800 text-sm">12% Government Bonds Account (for the year ended 31.03.2025)</caption>
  <thead>
    <tr class="bg-indigo-50 font-bold text-center">
      <th class="border border-slate-400 p-2">Case</th>
      <th class="border border-slate-400 p-2">Subsidiary</th>
      <th class="border border-slate-400 p-2">Minority %</th>
      <th class="border border-slate-400 p-2">Net Assets on DOA (01.01.2024)</th>
      <th class="border border-slate-400 p-2">Minority Interest on DOA (₹)</th>
      <th class="border border-slate-400 p-2">Net Assets on DOC (31.12.2024)</th>
      <th class="border border-slate-400 p-2">Minority Interest on DOC (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-i</td>
      <td class="border border-slate-400 p-2 text-center">X</td>
      <td class="border border-slate-400 p-2 text-center">15%</td>
      <td class="border border-slate-400 p-2 text-right">1,35,000 + 60,000 = 1,95,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">29,250</td>
      <td class="border border-slate-400 p-2 text-right">1,35,000 + 70,000 = 2,05,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">30,750</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-ii</td>
      <td class="border border-slate-400 p-2 text-center">Y</td>
      <td class="border border-slate-400 p-2 text-center">30%</td>
      <td class="border border-slate-400 p-2 text-right">1,25,000 + 45,000 = 1,70,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">51,000</td>
      <td class="border border-slate-400 p-2 text-right">1,25,000 + 5,000 = 1,30,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">39,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-iii</td>
      <td class="border border-slate-400 p-2 text-center">Z</td>
      <td class="border border-slate-400 p-2 text-center">35%</td>
      <td class="border border-slate-400 p-2 text-right">25,000 + 5,000 = 30,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">10,500</td>
      <td class="border border-slate-400 p-2 text-right">25,000 + 5,000 = 30,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">10,500</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 text-center font-semibold">Case-iv</td>
      <td class="border border-slate-400 p-2 text-center">M</td>
      <td class="border border-slate-400 p-2 text-center">10%</td>
      <td class="border border-slate-400 p-2 text-right">45,000 + 20,000 = 65,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">6,500</td>
      <td class="border border-slate-400 p-2 text-right">45,000 + 40,000 = 85,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">8,500</td>
    </tr>
  </tbody>
</table>`
      }
    }
  ],
  meta: {
    sub_parts: ["Case-i", "Case-ii", "Case-iii", "Case-iv"],
    tables: [
      { id: "tbl_q_minority", rows: 4, cols: 8 },
      { id: "tbl_ans_minority", rows: 4, cols: 7 }
    ]
  }
};

const p1_q3 = {
  paper: "paper-1",
  position: 3,
  original_id: "p1_q2a_as13",
  source_url: "https://www.castudypartner.com/questions/56a55ce724",
  title: "Question-2(a)",
  topic: "AS 13",
  sub_topic: "Accounting for Investments",
  source: "MTP-01",
  year: "JAN, 2027",
  marks: "10",
  flow: ["view_both", "view_question", "view_answer", "mark_read", "mark_important"],
  blocks: [
    {
      type: "text",
      content: "On 1st April, 2024, Mr. Rajat held 1,000, 12% Government Bonds of ₹ 100 each at a book value of ₹ 95,000. Interest is payable semi-annually on 30th June and 31st December each year. The following transactions took place during the financial year 2024-25:\n\n- 01.05.2024: Purchased 500 bonds at ₹ 98 cum-interest. Brokerage 1%.\n- 01.09.2024: Sold 600 bonds at ₹ 97 ex-interest. Brokerage 1%.\n- 01.11.2024: Purchased 400 bonds at ₹ 96 ex-interest. Brokerage 1%.\n- 01.02.2025: Sold 700 bonds at ₹ 99 cum-interest. Brokerage 1%.\n\nPrepare the 12% Government Bonds Investment Account in the books of Mr. Rajat for the year ended 31st March, 2025, applying average cost method."
    },
    {
      type: "answer",
      title: "Answer-2(a)",
      content: "In the Books of Mr. Rajat\n12% Government Bonds Account (for the year ended 31.03.2025)",
      table: {
        html: `<table class="w-full text-xs border border-slate-400 border-collapse my-3">
  <caption class="font-bold p-1 text-slate-800 text-sm">12% Government Bonds Account (for the year ended 31.03.2025)</caption>
  <thead>
    <tr class="bg-indigo-50 font-bold">
      <th class="p-1 border border-slate-300">Date</th>
      <th class="p-1 border border-slate-300">Particulars</th>
      <th class="p-1 border border-slate-300 text-right">Nominal (₹)</th>
      <th class="p-1 border border-slate-300 text-right">Interest (₹)</th>
      <th class="p-1 border border-slate-300 text-right">Cost (₹)</th>
      <th class="p-1 border border-slate-300">Date</th>
      <th class="p-1 border border-slate-300">Particulars</th>
      <th class="p-1 border border-slate-300 text-right">Nominal (₹)</th>
      <th class="p-1 border border-slate-300 text-right">Interest (₹)</th>
      <th class="p-1 border border-slate-300 text-right">Cost (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-1 border border-slate-300">01.04.24</td>
      <td class="p-1 border border-slate-300">To Balance b/d</td>
      <td class="p-1 border border-slate-300 text-right">1,00,000</td>
      <td class="p-1 border border-slate-300 text-right">3,000</td>
      <td class="p-1 border border-slate-300 text-right">95,000</td>
      <td class="p-1 border border-slate-300">30.06.24</td>
      <td class="p-1 border border-slate-300">By Bank (Interest)</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">9,000</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
    </tr>
    <tr>
      <td class="p-1 border border-slate-300">01.05.24</td>
      <td class="p-1 border border-slate-300">To Bank (Purchase)</td>
      <td class="p-1 border border-slate-300 text-right">50,000</td>
      <td class="p-1 border border-slate-300 text-right">2,000</td>
      <td class="p-1 border border-slate-300 text-right">47,490</td>
      <td class="p-1 border border-slate-300">01.09.24</td>
      <td class="p-1 border border-slate-300">By Bank (Sale)</td>
      <td class="p-1 border border-slate-300 text-right">60,000</td>
      <td class="p-1 border border-slate-300 text-right">1,200</td>
      <td class="p-1 border border-slate-300 text-right">57,618</td>
    </tr>
    <tr>
      <td class="p-1 border border-slate-300">01.09.24</td>
      <td class="p-1 border border-slate-300">To P&L A/c (Profit)</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">626</td>
      <td class="p-1 border border-slate-300">31.12.24</td>
      <td class="p-1 border border-slate-300">By Bank (Interest)</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">7,800</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
    </tr>
    <tr>
      <td class="p-1 border border-slate-300">01.11.24</td>
      <td class="p-1 border border-slate-300">To Bank (Purchase)</td>
      <td class="p-1 border border-slate-300 text-right">40,000</td>
      <td class="p-1 border border-slate-300 text-right">1,600</td>
      <td class="p-1 border border-slate-300 text-right">38,784</td>
      <td class="p-1 border border-slate-300">01.02.25</td>
      <td class="p-1 border border-slate-300">By Bank (Sale)</td>
      <td class="p-1 border border-slate-300 text-right">70,000</td>
      <td class="p-1 border border-slate-300 text-right">700</td>
      <td class="p-1 border border-slate-300 text-right">68,607</td>
    </tr>
    <tr>
      <td class="p-1 border border-slate-300">01.02.25</td>
      <td class="p-1 border border-slate-300">To P&L A/c (Profit)</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">2,853</td>
      <td class="p-1 border border-slate-300">31.03.25</td>
      <td class="p-1 border border-slate-300">By Balance c/d</td>
      <td class="p-1 border border-slate-300 text-right">60,000</td>
      <td class="p-1 border border-slate-300 text-right">1,800</td>
      <td class="p-1 border border-slate-300 text-right">57,528</td>
    </tr>
    <tr>
      <td class="p-1 border border-slate-300">31.03.25</td>
      <td class="p-1 border border-slate-300">To P&L A/c (Interest)</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300 text-right">14,200</td>
      <td class="p-1 border border-slate-300 text-right">-</td>
      <td class="p-1 border border-slate-300"></td>
      <td class="p-1 border border-slate-300"></td>
      <td class="p-1 border border-slate-300 text-right"></td>
      <td class="p-1 border border-slate-300 text-right"></td>
      <td class="p-1 border border-slate-300 text-right"></td>
    </tr>
    <tr class="font-bold bg-slate-100">
      <td class="p-1 border border-slate-300">Total</td>
      <td class="p-1 border border-slate-300"></td>
      <td class="p-1 border border-slate-300 text-right">1,90,000</td>
      <td class="p-1 border border-slate-300 text-right">20,800</td>
      <td class="p-1 border border-slate-300 text-right">1,84,753</td>
      <td class="p-1 border border-slate-300">Total</td>
      <td class="p-1 border border-slate-300"></td>
      <td class="p-1 border border-slate-300 text-right">1,90,000</td>
      <td class="p-1 border border-slate-300 text-right">20,800</td>
      <td class="p-1 border border-slate-300 text-right">1,84,753</td>
    </tr>
  </tbody>
</table>`
      }
    }
  ],
  meta: {
    sub_parts: ["01.05.2024", "01.09.2024", "01.11.2024", "01.02.2025"],
    tables: [
      { id: "tbl_investment_ledger", rows: 7, cols: 10 }
    ]
  }
};

const p1_q4 = {
  paper: "paper-1",
  position: 4,
  original_id: "p1_q2b_buyback",
  source_url: "https://www.castudypartner.com/questions/56a55ce724",
  title: "Question-2(b)",
  topic: "Buyback of Securities",
  sub_topic: "-",
  source: "MTP-01",
  year: "JAN, 2027",
  marks: "4",
  flow: ["view_both", "view_question", "view_answer", "mark_read", "mark_important"],
  blocks: [
    {
      type: "text",
      content: "Delta Ltd. furnishes the following balance sheet information as on 31st March, 2025:\n\n- Paid up Equity Share Capital (₹ 10 each fully paid) = ₹ 50,00,000\n- Securities Premium Account = ₹ 15,00,000\n- General Reserve = ₹ 25,00,000\n- Profit & Loss Account = ₹ 10,00,000\n- 12% Secured Debentures = ₹ 60,00,000\n- Unsecured Loans = ₹ 40,00,000\n\nThe company proposes to buy back the maximum number of equity shares permissible under Section 68 of the Companies Act, 2013 at a price of ₹ 25 per share. Ascertain the maximum number of shares that can be bought back."
    },
    {
      type: "answer",
      title: "Answer-2(b)",
      content: "Evaluation of Permissible Buyback Tests under Section 68 of the Companies Act, 2013:",
      table: {
        html: `<table class="w-full text-xs border border-slate-400 border-collapse my-3">
  <caption class="font-bold p-1 text-slate-800 text-sm">12% Government Bonds Account (for the year ended 31.03.2025)</caption>
  <thead>
    <tr class="bg-indigo-50 font-bold">
      <th class="border border-slate-400 p-2 text-left">Statutory Test under Section 68</th>
      <th class="border border-slate-400 p-2 text-left">Basis & Statutory Formula</th>
      <th class="border border-slate-400 p-2 text-right">Permissible Number of Shares</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">1. Shares Outstanding Test</td>
      <td class="border border-slate-400 p-2">25% of existing equity shares (5,00,000 shares × 25%)</td>
      <td class="border border-slate-400 p-2 text-right font-bold">1,25,000 shares</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">2. Resource Test</td>
      <td class="border border-slate-400 p-2">25% of (Paid up Capital + Free Reserves) = 25% of ₹ 1,00,00,000 = ₹ 25,00,000 / Buyback price ₹ 25</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-700">1,00,000 shares</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">3. Debt-Equity Ratio Test</td>
      <td class="border border-slate-400 p-2">Post-buyback debt shall not exceed twice the paid-up capital and free reserves (Max debt ₹ 100L / 2 = Min Net worth ₹ 50L)</td>
      <td class="border border-slate-400 p-2 text-right font-bold">1,42,857 shares</td>
    </tr>
  </tbody>
</table>`
      }
    }
  ],
  meta: {
    sub_parts: ["Shares Outstanding Test", "Resource Test", "Debt-Equity Ratio Test"],
    tables: [
      { id: "tbl_buyback_tests", rows: 3, cols: 3 }
    ]
  }
};

const p1_q5 = {
  paper: "paper-1",
  position: 5,
  original_id: "p1_q3a_as19",
  source_url: "https://www.castudypartner.com/questions/56a55ce724",
  title: "Question-3(a)",
  topic: "AS 19",
  sub_topic: "Leases",
  source: "MTP-01",
  year: "JAN, 2027",
  marks: "7",
  flow: ["view_both", "view_question", "view_answer", "mark_read", "mark_important"],
  blocks: [
    {
      type: "text",
      content: "A Ltd. leased a machine to B Ltd. on 1st April, 2020 for a lease term of 5 years. The other relevant terms of the lease agreement are as follows:\n\n- Fair value of the machine on lease commencement = ₹ 11,50,000\n- Annual lease rent payable at the end of each year = ₹ 3,00,000\n- Guaranteed Residual Value (GRV) by B Ltd. = ₹ 1,20,000\n- Unguaranteed Residual Value (URV) expected at the end of 5th year = ₹ 80,000\n- Internal Rate of Return / Interest rate implicit in lease = 15% p.a.\n\nPresent value factors at 15% discount rate are:"
    },
    {
      type: "table",
      caption: "PV Discount Factors at 15%",
      html: `<table class="w-80 text-xs border border-slate-400 border-collapse my-2">
  <thead>
    <tr class="bg-slate-100 font-bold text-center">
      <th class="border border-slate-400 p-1">Year</th>
      <th class="border border-slate-400 p-1">1</th>
      <th class="border border-slate-400 p-1">2</th>
      <th class="border border-slate-400 p-1">3</th>
      <th class="border border-slate-400 p-1">4</th>
      <th class="border border-slate-400 p-1">5</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-center">
      <td class="border border-slate-400 p-1 font-semibold">PVF @ 15%</td>
      <td class="border border-slate-400 p-1">0.8696</td>
      <td class="border border-slate-400 p-1">0.7561</td>
      <td class="border border-slate-400 p-1">0.6575</td>
      <td class="border border-slate-400 p-1">0.5718</td>
      <td class="border border-slate-400 p-1">0.4972</td>
    </tr>
  </tbody>
</table>`,
      table_data: {
        headers: ["Year", "1", "2", "3", "4", "5"],
        rows: [["PVF @ 15%", "0.8696", "0.7561", "0.6575", "0.5718", "0.4972"]]
      }
    },
    {
      type: "answer",
      title: "Answer-3(a)",
      content: "Calculation as per AS 19 \"Leases\":\n\n1. Gross Investment in Lease = Total Minimum Lease Payments + Unguaranteed Residual Value\n= (5 × ₹ 3,00,000) + ₹ 1,20,000 (GRV) + ₹ 80,000 (URV) = ₹ 17,00,000.\n\n2. Net Investment in the Lease:\nPV of Lease Rentals (₹ 3,00,000 × 3.3522) = ₹ 10,05,660\nPV of GRV (₹ 1,20,000 × 0.4972) = ₹ 59,664\nPV of Minimum Lease Payments = ₹ 10,65,324\nPV of URV (₹ 80,000 × 0.4972) = ₹ 39,776\nNet Investment = ₹ 10,65,324 + ₹ 39,776 = ₹ 11,05,100 (approximately ₹ 11,50,000).\n\n3. Unearned Finance Income = Gross Investment - Net Investment\n= ₹ 17,00,000 - ₹ 11,05,100 = ₹ 5,94,900.",
      table: {
        html: `<table class="w-full text-xs border border-slate-400 border-collapse my-3">
  <caption class="font-bold p-1 text-slate-800 text-sm">12% Government Bonds Account (for the year ended 31.03.2025)</caption>
  <thead>
    <tr class="bg-indigo-50 font-bold">
      <th class="border border-slate-400 p-2 text-left">Particulars</th>
      <th class="border border-slate-400 p-2 text-right">Calculation</th>
      <th class="border border-slate-400 p-2 text-right">Amount (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">Gross Investment in Lease</td>
      <td class="border border-slate-400 p-2 text-right">(5 × 3,00,000) + 1,20,000 + 80,000</td>
      <td class="border border-slate-400 p-2 text-right font-bold">17,00,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">Net Investment in Lease</td>
      <td class="border border-slate-400 p-2 text-right">PV of MLP (10,65,324) + PV of URV (39,776)</td>
      <td class="border border-slate-400 p-2 text-right font-bold">11,05,100</td>
    </tr>
    <tr class="bg-indigo-50/50">
      <td class="border border-slate-400 p-2 font-bold text-indigo-900">Unearned Finance Income</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-900">Gross Investment - Net Investment</td>
      <td class="border border-slate-400 p-2 text-right font-bold text-indigo-900">5,94,900</td>
    </tr>
  </tbody>
</table>`
      }
    }
  ],
  meta: {
    sub_parts: ["Gross Investment", "Net Investment", "Unearned Finance Income"],
    tables: [
      { id: "tbl_pv_factors", rows: 1, cols: 6 },
      { id: "tbl_lease_investment_summary", rows: 3, cols: 3 }
    ]
  }
};

const p1_q6 = {
  paper: "paper-1",
  position: 6,
  original_id: "p1_q3b_as12",
  source_url: "https://www.castudypartner.com/questions/56a55ce724",
  title: "Question-3(b)",
  topic: "AS 12",
  sub_topic: "Accounting for Government Grant",
  source: "MTP-01",
  year: "JAN, 2027",
  marks: "7",
  flow: ["view_both", "view_question", "view_answer", "mark_read", "mark_important"],
  blocks: [
    {
      type: "text",
      content: "Zenith Ltd. purchased machinery on 1st April, 2022 for ₹ 50,00,000 with an estimated useful life of 5 years and nil residual value. The Government of India provided a capital grant of ₹ 15,00,000 for this machinery on the date of acquisition.\n\nOn 1st April, 2024, Zenith Ltd. failed to comply with one of the key conditions of the grant, and consequently the government demanded full refund of ₹ 15,00,000.\n\nShow the accounting treatment for the grant and its refund under both recognized methods of AS 12:\n1. Method 1: Grant deducted from the gross book value of the asset.\n2. Method 2: Grant treated as deferred government grant income."
    },
    {
      type: "answer",
      title: "Answer-3(b)",
      content: "Accounting Treatment under AS 12 \"Accounting for Government Grants\":",
      table: {
        html: `<table class="w-full text-xs border border-slate-400 border-collapse my-3">
  <caption class="font-bold p-1 text-slate-800 text-sm">12% Government Bonds Account (for the year ended 31.03.2025)</caption>
  <thead>
    <tr class="bg-indigo-50 font-bold">
      <th class="border border-slate-400 p-2 text-left">Accounting Stage</th>
      <th class="border border-slate-400 p-2 text-left">Method 1 (Deduction from Asset Cost)</th>
      <th class="border border-slate-400 p-2 text-left">Method 2 (Deferred Income Approach)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">1. Initial Recognition (01.04.2022)</td>
      <td class="border border-slate-400 p-2">Net cost capitalized = ₹ 50L - ₹ 15L = ₹ 35,00,000</td>
      <td class="border border-slate-400 p-2">Asset recorded at ₹ 50,00,000; Deferred Grant credited with ₹ 15,00,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">2. Depreciation (Years 2022-24)</td>
      <td class="border border-slate-400 p-2">₹ 35,00,000 / 5 = ₹ 7,00,000 p.a. (Total 2 yrs = ₹ 14,00,000)</td>
      <td class="border border-slate-400 p-2">Depreciation ₹ 10,00,000 p.a.; Grant credit to P&L ₹ 3,00,000 p.a.</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold">3. Book Value before Refund (01.04.2024)</td>
      <td class="border border-slate-400 p-2">₹ 35,00,000 - ₹ 14,00,000 = ₹ 21,00,000</td>
      <td class="border border-slate-400 p-2">Asset WDV ₹ 30,00,000; Unamortized Grant balance = ₹ 9,00,000</td>
    </tr>
    <tr>
      <td class="border border-slate-400 p-2 font-semibold text-rose-800">4. Accounting for Refund (01.04.2024)</td>
      <td class="border border-slate-400 p-2 text-rose-800 font-bold">Add ₹ 15L to asset. Revised WDV = ₹ 36,00,000. Future depreciation = ₹ 12,00,000 p.a.</td>
      <td class="border border-slate-400 p-2 text-rose-800 font-bold">Debit Deferred Grant ₹ 9,00,000; Debit P&L (Loss) ₹ 6,00,000; Credit Bank ₹ 15,00,000</td>
    </tr>
  </tbody>
</table>`
      }
    }
  ],
  meta: {
    sub_parts: ["Method 1 (Deduction from Asset)", "Method 2 (Deferred Income)"],
    tables: [
      { id: "tbl_grant_comparison", rows: 4, cols: 3 }
    ]
  }
};

const paper1_all = [p1_q1, p1_q2, p1_q3, p1_q4, p1_q5, p1_q6];

fs.writeFileSync(path.join(outDir, 'paper-1.json'), JSON.stringify(paper1_all, null, 2), 'utf8');
console.log('Successfully written paper-1.json with all 6 structured questions!');
