const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// -------------------------------------------------------------
// Paper 1: Advanced Accounting
// -------------------------------------------------------------
const paper1 = {
  paper: 1,
  subject: "Advanced Accounting",
  extracted_at: new Date().toISOString(),
  total: 6,
  questions: [
    {
      paper: 1,
      position: 1,
      original_id: "p1_q1a_as4",
      source_url: "https://www.castudypartner.com/questions/56a55ce724",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "The financial statements of Mehta Ltd. for the year 2024-25 approved by the Board of Directors on 15th July, 2025. The following information was provided:\n(i) A suit against the company's advertisement was filed by a party on 20th April, 2025, claiming damages of ₹ 25 lakhs.\n(ii) Theft of cash of ₹ 5 lakhs by the cashier on 31st March, 2025 but was detected on 16th July, 2025.\n(iii) Company sent a proposal to sell an immovable property for ₹ 40 lakhs in March, 2025. The book value of the property was ₹ 30 lakhs on 31st March, 2025. However, the deed was registered on 15th April, 2025.\n(iv) A major fire has damaged the assets in a factory on 5th April, 2025. However, the assets are fully insured.\nWith reference to AS-4 \"Contingencies and events occurring after the balance sheet date\", state whether the above mentioned events will be treated as contingencies, adjusting events or non-adjusting events occurring after the balance sheet date."
        },
        {
          type: "subpart",
          text: "(i) A suit against the company's advertisement was filed by a party on 20th April, 2025, claiming damages of ₹ 25 lakhs."
        },
        {
          type: "subpart",
          text: "(ii) Theft of cash of ₹ 5 lakhs by the cashier on 31st March, 2025 but was detected on 16th July, 2025."
        },
        {
          type: "subpart",
          text: "(iii) Company sent a proposal to sell an immovable property for ₹ 40 lakhs in March, 2025. Book value ₹ 30 lakhs, deed registered 15th April, 2025."
        },
        {
          type: "subpart",
          text: "(iv) A major fire has damaged the assets in a factory on 5th April, 2025. Fully insured."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;color:#14183a;"><th>Event No.</th><th>Particulars of Event</th><th>Classification under AS 4</th><th>Accounting Treatment &amp; Financial Effect</th></tr></thead><tbody><tr><td>(i)</td><td>Suit claiming damages of ₹ 25 lakhs filed on 20th April 2025</td><td>Contingent Liability (Non-Adjusting)</td><td>Condition was absent on 31.03.2025. Disclose nature and financial effect in Directors' Report.</td></tr><tr><td>(ii)</td><td>Cashier theft ₹ 5 lakhs on 31.03.2025 detected on 16.07.2025</td><td>Non-Adjusting Event</td><td>Detected after BOD approval (15.07.2025). No adjustment in financial statements of FY 2024-25.</td></tr><tr><td>(iii)</td><td>Sale proposal of property (BV ₹ 30L, Sale ₹ 40L) registered 15.04.2025</td><td>Non-Adjusting Event</td><td>Transaction was at proposal stage on 31.03.2025. Adjustments not appropriate.</td></tr><tr><td>(iv)</td><td>Factory fire on 05.04.2025 (completely insured)</td><td>Non-Adjusting Event</td><td>Fire occurred after balance sheet date. Disclose in report of approving authority.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(a):\n(i) Suit filed against the company is a contingent liability but it was not existing as on balance sheet date as the suit was filed on 20th April after the balance Sheet date. As per AS 4, 'Contingencies' used in the Standard is restricted to conditions or situations at the balance sheet date, the financial effect of which is to be determined by future events which may or may not occur. Hence, it will have no effect on financial statements and will be a non-adjusting event.\n\n(ii) Only those significant events which occur between the balance sheet date and the date on which the financial statements are approved, may indicate the need for adjustment to assets and liabilities existing on the balance sheet date or may require disclosure. In the given case, theft of cash was detected on 16th July, 2025 after approval of financial statements by the Board of Directors, hence no treatment is required.\n\n(iii) Adjustments to assets and liabilities are not appropriate for events occurring after the balance sheet date, if such events do not relate to conditions existing at the balance sheet date. In the given case, sale of immovable property was under proposal stage on the balance sheet date. Therefore, no adjustment to assets for sale of immovable property is required in the financial statements for the year ended 31st March, 2025.\n\n(iv) The condition of fire occurrence was not existing on the balance sheet date. Only the disclosure regarding event of fire and loss being completely insured may be given in the report of approving authority."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(a) (AS 4) - Mehta Ltd</h4></div><div class="modal-body"><p>The financial statements of Mehta Ltd. for the year 2024-25 approved by the Board of Directors on 15th July, 2025...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 1,
      position: 2,
      original_id: "p1_q1b_as21",
      source_url: "https://www.castudypartner.com/questions/56a55ce724",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "From the following data, determine Minority Interest on the date of acquisition and on the date of consolidation in each case:"
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th rowspan="3">Case</th><th rowspan="3">Subsidiary Company</th><th rowspan="3">% of Share Owned</th><th rowspan="3">Cost</th><th colspan="2">Date of Acquisition</th><th colspan="2">Consolidation date</th></tr><tr style="background:#f4f5fb;"><th colspan="2">01-01-2024</th><th colspan="2">31-12-2024</th></tr><tr style="background:#f4f5fb;"><th>Share Capital (₹)</th><th>Profit and Loss A/c (₹)</th><th>Share Capital (₹)</th><th>Profit and Loss A/c (₹)</th></tr></thead><tbody><tr><td>Case-i</td><td>X</td><td>85%</td><td>1,85,000</td><td>1,35,000</td><td>60,000</td><td>1,35,000</td><td>70,000</td></tr><tr><td>Case-ii</td><td>Y</td><td>70%</td><td>1,60,000</td><td>1,25,000</td><td>45,000</td><td>1,25,000</td><td>5,000</td></tr><tr><td>Case-iii</td><td>Z</td><td>65%</td><td>83,000</td><td>25,000</td><td>5,000</td><td>25,000</td><td>5,000</td></tr><tr><td>Case-iv</td><td>M</td><td>90%</td><td>60,000</td><td>45,000</td><td>20,000</td><td>45,000</td><td>40,000</td></tr></tbody></table>`
        },
        {
          type: "subpart",
          text: "Case-i: Subsidiary Company X, 85% share owned, Cost ₹ 1,85,000."
        },
        {
          type: "subpart",
          text: "Case-ii: Subsidiary Company Y, 70% share owned, Cost ₹ 1,60,000."
        },
        {
          type: "subpart",
          text: "Case-iii: Subsidiary Company Z, 65% share owned, Cost ₹ 83,000."
        },
        {
          type: "subpart",
          text: "Case-iv: Subsidiary Company M, 90% share owned, Cost ₹ 60,000."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Case</th><th>Subsidiary</th><th>Minority %</th><th>Net Assets on DOA (₹)</th><th>Minority Interest DOA (₹)</th><th>Net Assets on DOC (₹)</th><th>Minority Interest DOC (₹)</th></tr></thead><tbody><tr><td>Case-i</td><td>X</td><td>15%</td><td>1,95,000</td><td>29,250</td><td>2,05,000</td><td>30,750</td></tr><tr><td>Case-ii</td><td>Y</td><td>30%</td><td>1,70,000</td><td>51,000</td><td>1,30,000</td><td>39,000</td></tr><tr><td>Case-iii</td><td>Z</td><td>35%</td><td>30,000</td><td>10,500</td><td>30,000</td><td>10,500</td></tr><tr><td>Case-iv</td><td>M</td><td>10%</td><td>65,000</td><td>6,500</td><td>85,000</td><td>8,500</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(b):\nAs per AS 21 'Consolidated Financial Statements', Minority Interest is that part of net results of operations and net assets of a subsidiary attributable to interests not owned by the parent.\n\nMinority Interest percentages:\n- Case-i (X): 100% - 85% = 15%\n- Case-ii (Y): 100% - 70% = 30%\n- Case-iii (Z): 100% - 65% = 35%\n- Case-iv (M): 100% - 90% = 10%\n\nMinority Interest on Date of Acquisition (01-01-2024):\n- Case-i: 15% of (1,35,000 + 60,000) = ₹ 29,250\n- Case-ii: 30% of (1,25,000 + 45,000) = ₹ 51,000\n- Case-iii: 35% of (25,000 + 5,000) = ₹ 10,500\n- Case-iv: 10% of (45,000 + 20,000) = ₹ 6,500\n\nMinority Interest on Date of Consolidation (31-12-2024):\n- Case-i: 15% of (1,35,000 + 70,000) = ₹ 30,750\n- Case-ii: 30% of (1,25,000 + 5,000) = ₹ 39,000\n- Case-iii: 35% of (25,000 + 5,000) = ₹ 10,500\n- Case-iv: 10% of (45,000 + 40,000) = ₹ 8,500"
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(b) (AS 21) - Minority Interest Grid</h4></div><div class="modal-body"><p>From the following data, determine Minority Interest on the date of acquisition and on the date of consolidation in each case...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 1,
      position: 3,
      original_id: "p1_q2a_as13",
      source_url: "https://www.castudypartner.com/questions/56a55ce724",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "On 1st April, 2024, Mr. Rajat had 20,000 equity shares in ABC Ltd. face value of ₹ 10 each, book value ₹ 15 per share. On 1st June, 2024 he purchased another 5,000 shares @ ₹ 16 each cum-dividend. On 15th July, 2024 ABC Ltd. declared and paid a dividend of 20% for the year ended 31st March, 2024. Prepare Investment Account in the books of Mr. Rajat for the year ended 31st March, 2025 as per AS 13."
        },
        {
          type: "subpart",
          text: "Opening balance: 20,000 shares @ ₹ 15 = ₹ 3,00,000."
        },
        {
          type: "subpart",
          text: "Purchase on 01-06-2024: 5,000 shares @ ₹ 16 cum-dividend = ₹ 80,000 total cost."
        },
        {
          type: "subpart",
          text: "Dividend on 15-07-2024: 20% dividend declared for previous year."
        },
        {
          type: "subpart",
          text: "Bonus issue & Rights issue terms as on 1st November 2024."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="6" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th colspan="4">Dr. 12% Government Bonds Account (In Books of Investor)</th><th colspan="4">Cr.</th></tr><tr style="background:#f4f5fb;"><th>Date</th><th>Particulars</th><th>Nominal Value (₹)</th><th>Cost (₹)</th><th>Date</th><th>Particulars</th><th>Nominal Value (₹)</th><th>Cost (₹)</th></tr></thead><tbody><tr><td>01.04.2024</td><td>To Balance b/d</td><td>2,00,000</td><td>1,96,000</td><td>01.10.2024</td><td>By Bank (Sale)</td><td>50,000</td><td>51,200</td></tr><tr><td>01.06.2024</td><td>To Bank A/c</td><td>50,000</td><td>49,000</td><td>31.03.2025</td><td>By Balance c/d</td><td>2,00,000</td><td>1,93,800</td></tr><tr style="font-weight:bold;background:#fafafa;"><td>Total</td><td></td><td>2,50,000</td><td>2,45,000</td><td>Total</td><td></td><td>2,50,000</td><td>2,45,000</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(a):\nIn the books of Mr. Rajat - Investment in 12% Government Bonds Account / ABC Ltd Equity Shares Account for the year ended 31st March, 2025:\n\n1. Accounting for Pre-acquisition Dividend: Dividend received on shares purchased on cum-dividend basis is treated as capital recovery and credited to Investment Cost Account as per AS 13.\n2. Valuation of closing investment is carried at lower of cost or fair value."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(a) (AS 13) - Investment Ledger</h4></div><div class="modal-body"><p>On 1st April, 2024, Mr. Rajat had 20,000 equity shares in ABC Ltd...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 1,
      position: 4,
      original_id: "p1_q2b_buyback",
      source_url: "https://www.castudypartner.com/questions/56a55ce724",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "XYZ Ltd. has paid-up share capital of ₹ 50,00,000 consisting of 5,00,000 equity shares of ₹ 10 each, General Reserve ₹ 30,00,000, Securities Premium ₹ 10,00,000, and 12% Debentures ₹ 1,20,00,000. The company plans to buy back maximum possible equity shares at ₹ 25 per share. Advise the company on maximum buyback quantum under Section 68 of the Companies Act, 2013."
        },
        {
          type: "subpart",
          text: "Test 1: Shares Outstanding Test (25% of total outstanding equity shares)."
        },
        {
          type: "subpart",
          text: "Test 2: Resource Test (25% of Paid-up Capital + Free Reserves)."
        },
        {
          type: "subpart",
          text: "Test 3: Debt-Equity Ratio Test (Debt after buyback not to exceed 2:1 ratio)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Test under Section 68</th><th>Statutory Formula / Provision</th><th>Maximum Permissible Amount (₹)</th><th>Number of Shares @ ₹ 25</th></tr></thead><tbody><tr><td>1. Shares Outstanding Test</td><td>25% of 5,00,000 shares</td><td>-</td><td>1,25,000 shares</td></tr><tr><td>2. Resource Test</td><td>25% of (50L + 30L + 10L) = 25% of 90L</td><td>₹ 22,50,000</td><td>90,000 shares</td></tr><tr><td>3. Debt-Equity Ratio Test</td><td>Min Equity required = Debt / 2 = 120L / 2 = 60L</td><td>₹ 15,00,000</td><td>60,000 shares</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="2">Conclusion (Least of 3 tests)</td><td>₹ 15,00,000</td><td>60,000 shares</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(b):\nAs per Section 68 of Companies Act, 2013, buyback cannot exceed the least of the three statutory limits:\n1. Shares Outstanding Test: 1,25,000 shares\n2. Resource Test: 90,000 shares\n3. Debt-Equity Test: 60,000 shares\nTherefore, maximum allowable buyback is 60,000 equity shares at ₹ 25 each, totaling ₹ 15,00,000."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(b) - Buyback of Securities</h4></div><div class="modal-body"><p>XYZ Ltd. has paid-up share capital of ₹ 50,00,000...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 1,
      position: 5,
      original_id: "p1_q3a_as19",
      source_url: "https://www.castudypartner.com/questions/56a55ce724",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Star Ltd. leased a machine to Moon Ltd. on 1st April, 2024 for 4 years. The cost of machine is ₹ 10,00,000. Annual lease rent is ₹ 3,20,000 payable at the end of each year. Unguaranteed residual value is ₹ 50,000. Internal rate of return (implicit interest rate) is 12%. Present value factors at 12% for year 1 to 4 are 0.8929, 0.7972, 0.7118, 0.6355. Compute Gross Investment, Net Investment and Unearned Finance Income as per AS 19."
        },
        {
          type: "subpart",
          text: "Computation of Gross Investment (Minimum Lease Payments + Unguaranteed Residual Value)."
        },
        {
          type: "subpart",
          text: "Computation of Net Investment (Present value of Gross Investment)."
        },
        {
          type: "subpart",
          text: "Computation of Unearned Finance Income (Gross Investment - Net Investment)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Year</th><th>Cash Inflow (₹)</th><th>PV Factor @ 12%</th><th>Discounted Present Value (₹)</th></tr></thead><tbody><tr><td>1</td><td>3,20,000</td><td>0.8929</td><td>2,85,728</td></tr><tr><td>2</td><td>3,20,000</td><td>0.7972</td><td>2,55,104</td></tr><tr><td>3</td><td>3,20,000</td><td>0.7118</td><td>2,27,776</td></tr><tr><td>4 (Rent + URV)</td><td>3,70,000</td><td>0.6355</td><td>2,35,135</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="3">Net Investment (Present Value)</td><td>₹ 10,03,743</td></tr></tbody></table>`
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Year</th><th>Opening Principal (₹)</th><th>Lease Rent (₹)</th><th>Finance Income @ 12% (₹)</th><th>Principal Reduction (₹)</th><th>Closing Balance (₹)</th></tr></thead><tbody><tr><td>1</td><td>10,03,743</td><td>3,20,000</td><td>1,20,449</td><td>1,99,551</td><td>8,04,192</td></tr><tr><td>2</td><td>8,04,192</td><td>3,20,000</td><td>96,503</td><td>2,23,497</td><td>5,80,695</td></tr><tr><td>3</td><td>5,80,695</td><td>3,20,000</td><td>69,683</td><td>2,50,317</td><td>3,30,378</td></tr><tr><td>4</td><td>3,30,378</td><td>3,70,000</td><td>39,622</td><td>3,30,378</td><td>0</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(a):\nAs per AS 19 'Leases':\n1. Gross Investment = (4 * ₹ 3,20,000) + ₹ 50,000 (URV) = ₹ 13,30,000\n2. Net Investment = PV of Gross Investment = ₹ 10,03,743\n3. Unearned Finance Income = Gross Investment - Net Investment = ₹ 13,30,000 - ₹ 10,03,743 = ₹ 3,26,257."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(a) (AS 19) - Finance Leases</h4></div><div class="modal-body"><p>Star Ltd. leased a machine to Moon Ltd. on 1st April, 2024...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 1,
      position: 6,
      original_id: "p1_q3b_as12",
      source_url: "https://www.castudypartner.com/questions/56a55ce724",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "A manufacturing unit received a government grant of ₹ 40 lakhs on 1st April, 2021 towards the purchase of machinery costing ₹ 100 lakhs with a useful life of 5 years and nil residual value. On 1st April, 2024, the government demanded refund of the grant due to non-fulfillment of conditions. Show accounting treatment under both methods of AS 12."
        },
        {
          type: "subpart",
          text: "Method 1: Grant deducted from the gross book value of the asset."
        },
        {
          type: "subpart",
          text: "Method 2: Grant treated as deferred income and recognized in P&L over useful life."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Financial Year</th><th>Asset Cost Method (Depr. on ₹ 60L)</th><th>Deferred Income Method (Depr. on ₹ 100L)</th><th>Deferred Grant P&amp;L Credit</th></tr></thead><tbody><tr><td>2021-22</td><td>₹ 12,00,000</td><td>₹ 20,00,000</td><td>₹ 8,00,000</td></tr><tr><td>2022-23</td><td>₹ 12,00,000</td><td>₹ 20,00,000</td><td>₹ 8,00,000</td></tr><tr><td>2023-24</td><td>₹ 12,00,000</td><td>₹ 20,00,000</td><td>₹ 8,00,000</td></tr><tr style="background:#fef2f2;font-weight:bold;"><td>Refund (2024-25)</td><td>Asset BV increased by ₹ 40L</td><td>Deferred Grant ₹ 16L + P&amp;L ₹ 24L</td><td>Refunded to Govt</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(b):\nAs per AS 12 'Accounting for Government Grants':\nMethod 1: Net Book Value on 01.04.2024 is ₹ 60L - (3 * 12L) = ₹ 24L. On refund of ₹ 40L, book value is increased to ₹ 64L. Prospective depreciation for remaining 2 years = ₹ 32L/yr.\nMethod 2: Asset Book value on 01.04.2024 is ₹ 40L. Balance in deferred income account is ₹ 16L. On refund of ₹ 40L, debit Deferred Grant ₹ 16L and balance ₹ 24L charged to P&L."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(b) (AS 12) - Government Grants</h4></div><div class="modal-body"><p>A manufacturing unit received a government grant of ₹ 40 lakhs...</p></div></div></div>`,
      needs_review: null
    }
  ]
};

// -------------------------------------------------------------
// Paper 2: Corporate and Other Laws
// -------------------------------------------------------------
const paper2 = {
  paper: 2,
  subject: "Corporate and Other Laws",
  extracted_at: new Date().toISOString(),
  total: 6,
  questions: [
    {
      paper: 2,
      position: 1,
      original_id: "p2_q1a_sec103",
      source_url: "https://www.castudypartner.com/questions/b5d4c3755a",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "A public company has 4,500 members. At its Annual General Meeting, 28 members are personally present, and 12 proxies are present. Examine whether quorum requirement under Section 103 of the Companies Act, 2013 is satisfied."
        },
        {
          type: "subpart",
          text: "Part (i): Quorum requirement for public companies based on total number of members."
        },
        {
          type: "subpart",
          text: "Part (ii): Status of proxies in determining quorum under Section 103."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Company Type</th><th>Total Members on Date of Meeting</th><th>Quorum (Personally Present)</th></tr></thead><tbody><tr><td rowspan="3">Public Company</td><td>Not more than 1,000</td><td>5 members</td></tr><tr><td>More than 1,000 but up to 5,000</td><td>15 members</td></tr><tr><td>More than 5,000</td><td>30 members</td></tr><tr><td>Private Company</td><td>Any number of members</td><td>2 members</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(a):\nUnder Section 103(1)(a) of Companies Act, 2013, for a public company having between 1,000 and 5,000 members, the quorum is 15 members personally present. Proxies are excluded from quorum count. Since 28 members are personally present (which exceeds 15), valid quorum is present."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(a) - Section 103 Quorum</h4></div><div class="modal-body"><p>A public company has 4,500 members...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 2,
      position: 2,
      original_id: "p2_q1b_sec123",
      source_url: "https://www.castudypartner.com/questions/b5d4c3755a",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Due to inadequacy of profits in FY 2024-25, Bright Ltd. proposes to declare dividend out of accumulated free reserves. Paid-up capital is ₹ 100 lakhs, Free reserves are ₹ 80 lakhs. Average dividend rate for preceding 3 years is 12%. Calculate maximum allowable dividend under Rule 3 of Companies (Declaration and Payment of Dividend) Rules, 2014."
        },
        {
          type: "subpart",
          text: "Condition 1: Rate of dividend test."
        },
        {
          type: "subpart",
          text: "Condition 2: Maximum withdrawal from reserves test (10% of Paid-up Capital + Free Reserves)."
        },
        {
          type: "subpart",
          text: "Condition 3: Balance in reserves test (Not less than 15% of Paid-up Share Capital)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Rule 3 Condition</th><th>Statutory Limit</th><th>Calculated Value (₹)</th></tr></thead><tbody><tr><td>Condition 1: Rate Cap</td><td>Average of last 3 years (12%)</td><td>Max ₹ 12,00,000</td></tr><tr><td>Condition 2: Max Withdrawal</td><td>10% of (100L + 80L)</td><td>Max ₹ 18,00,000</td></tr><tr><td>Condition 3: Min Reserve Remaining</td><td>15% of Paid-up Capital (15% of 100L = 15L)</td><td>Balance remaining ₹ 62L &gt; ₹ 15L (Satisfied)</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="2">Permissible Dividend Quantum</td><td>₹ 12,00,000 (12% of ₹ 100L)</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(b):\nAs per Rule 3 of Companies (Declaration and Payment of Dividend) Rules, 2014, all three conditions must be satisfied simultaneously. The rate cannot exceed 12%, and withdrawal cannot exceed ₹ 18 lakhs. Thus maximum allowable dividend is ₹ 12,00,000."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(b) - Section 123 Dividend Rules</h4></div><div class="modal-body"><p>Due to inadequacy of profits in FY 2024-25...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 2,
      position: 3,
      original_id: "p2_q2a_csr",
      source_url: "https://www.castudypartner.com/questions/b5d4c3755a",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Explain applicability and minimum expenditure obligations for Corporate Social Responsibility under Section 135 of the Companies Act, 2013 for a company having net profits of ₹ 6 crores, ₹ 8 crores, and ₹ 10 crores during the immediately preceding 3 financial years."
        },
        {
          type: "subpart",
          text: "Criteria for Section 135 applicability (Net Worth, Turnover, Net Profit)."
        },
        {
          type: "subpart",
          text: "Formula for mandatory minimum 2% CSR contribution."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Financial Year</th><th>Net Profit under Sec 198 (₹ Crores)</th><th>Average Net Profit (₹ Crores)</th><th>Mandatory 2% CSR Obligation</th></tr></thead><tbody><tr><td>2021-22</td><td>₹ 6.00 Cr</td><td rowspan="3">₹ 8.00 Crores</td><td rowspan="3"><strong>₹ 16 Lakhs</strong> (2% of ₹ 8 Cr)</td></tr><tr><td>2022-23</td><td>₹ 8.00 Cr</td></tr><tr><td>2023-24</td><td>₹ 10.00 Cr</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(a):\nUnder Section 135, every company having net profit of ₹ 5 crore or more during immediately preceding financial year must constitute a CSR Committee and spend at least 2% of average net profits of preceding 3 financial years. Here average profit is ₹ 8 crores; thus CSR spend is ₹ 16 lakhs."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(a) - CSR Section 135</h4></div><div class="modal-body"><p>Explain applicability and minimum expenditure obligations for CSR...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 2,
      position: 4,
      original_id: "p2_q2b_auditor_rotation",
      source_url: "https://www.castudypartner.com/questions/b5d4c3755a",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Analyze statutory auditor rotation requirements under Section 139(2) of the Companies Act, 2013 for individual auditors and audit firms, along with cooling-off period rules."
        },
        {
          type: "subpart",
          text: "Rotation limit for individual auditor (One term of 5 consecutive years)."
        },
        {
          type: "subpart",
          text: "Rotation limit for audit firm (Two terms of 5 consecutive years)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Auditor Category</th><th>Maximum Consecutive Tenure</th><th>Cooling-Off Period</th></tr></thead><tbody><tr><td>Individual Auditor</td><td>1 term of 5 consecutive years</td><td>5 consecutive years</td></tr><tr><td>Audit Firm</td><td>2 terms of 5 consecutive years (10 years)</td><td>5 consecutive years</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(b):\nUnder Section 139(2), listed companies and specified unlisted public/private companies cannot appoint an individual auditor for more than 1 term of 5 consecutive years, and an audit firm for more than 2 terms of 5 consecutive years. Cooling-off period is 5 years."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(b) - Auditor Rotation Sec 139</h4></div><div class="modal-body"><p>Analyze statutory auditor rotation requirements...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 2,
      position: 5,
      original_id: "p2_q3a_fema",
      source_url: "https://www.castudypartner.com/questions/b5d4c3755a",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Mr. Sharma, a resident in India, desires to remit foreign exchange for education of his son in USA and for purchase of immovable property abroad. Classify these transactions under Section 5 & 6 of FEMA, 1999."
        },
        {
          type: "subpart",
          text: "Current Account Transaction vs Capital Account Transaction classification."
        },
        {
          type: "subpart",
          text: "Liberalized Remittance Scheme (LRS) ceiling of USD 250,000 per financial year."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Transaction</th><th>FEMA Classification</th><th>Permissibility / Approval Required</th></tr></thead><tbody><tr><td>Remittance for son's overseas education</td><td>Current Account Transaction (Sec 5)</td><td>Permissible up to USD 250,000 under LRS without RBI approval.</td></tr><tr><td>Acquisition of immovable property abroad</td><td>Capital Account Transaction (Sec 6)</td><td>Permissible under LRS within USD 250,000 annual limit.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(a):\nEducation expenses represent Current Account Transaction under Section 5, freely permissible under LRS up to USD 250,000. Purchase of immovable property alters foreign assets, constituting a Capital Account Transaction under Section 6, permitted under RBI LRS framework."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(a) - FEMA Current vs Capital</h4></div><div class="modal-body"><p>Mr. Sharma, a resident in India...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 2,
      position: 6,
      original_id: "p2_q3b_interpretation",
      source_url: "https://www.castudypartner.com/questions/b5d4c3755a",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Distinguish between the Rule of Literal Construction and the Mischief Rule (Heydon's Case) in interpretation of statutes with suitable legal precedents."
        },
        {
          type: "subpart",
          text: "Core principle of Literal Interpretation (Grammatical construction)."
        },
        {
          type: "subpart",
          text: "Four elements of Heydon's Case (Mischief Rule)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Parameter</th><th>Rule of Literal Construction</th><th>Mischief Rule (Heydon's Case)</th></tr></thead><tbody><tr><td>Application</td><td>When words of statute are plain, clear, and unambiguous.</td><td>When statutory words are capable of two or more meanings.</td></tr><tr><td>Objective</td><td>Give natural and ordinary grammatical meaning.</td><td>Suppress the mischief and advance the remedy intended by Parliament.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(b):\nLiteral construction applies standard ordinary grammar when words are unambiguous. Mischief rule investigates prior law, the mischief not addressed, the parliamentary remedy, and true reason for the remedy to suppress evil and advance justice."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(b) - Interpretation of Statutes</h4></div><div class="modal-body"><p>Distinguish between the Rule of Literal Construction...</p></div></div></div>`,
      needs_review: null
    }
  ]
};

// -------------------------------------------------------------
// Paper 3: Taxation
// -------------------------------------------------------------
const paper3 = {
  paper: 3,
  subject: "Taxation",
  extracted_at: new Date().toISOString(),
  total: 6,
  questions: [
    {
      paper: 3,
      position: 1,
      original_id: "p3_q1a_115bac",
      source_url: "https://www.castudypartner.com/questions/c6e5d4866b",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Mr. Alok (aged 42 years, resident) reports Total Income of ₹ 14,00,000 for Assessment Year 2025-26 (PY 2024-25). Compute his tax liability under the default tax regime under Section 115BAC(1A) of the Income-tax Act, 1961."
        },
        {
          type: "subpart",
          text: "Application of Section 115BAC(1A) revised tax slabs."
        },
        {
          type: "subpart",
          text: "Standard deduction of ₹ 75,000 and 4% Health & Education Cess."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Income Slab under Section 115BAC</th><th>Applicable Tax Rate</th><th>Taxable Amount (₹)</th><th>Tax Payable (₹)</th></tr></thead><tbody><tr><td>Up to ₹ 3,00,000</td><td>Nil</td><td>3,00,000</td><td>Nil</td></tr><tr><td>₹ 3,00,001 - ₹ 7,00,000</td><td>5%</td><td>4,00,000</td><td>20,000</td></tr><tr><td>₹ 7,00,001 - ₹ 10,00,000</td><td>10%</td><td>3,00,000</td><td>30,000</td></tr><tr><td>₹ 10,00,001 - ₹ 12,00,000</td><td>15%</td><td>2,00,000</td><td>30,000</td></tr><tr><td>₹ 12,00,001 - ₹ 14,00,000</td><td>20%</td><td>2,00,000</td><td>40,000</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="3">Total Tax (before Cess)</td><td>₹ 1,20,000</td></tr><tr style="font-weight:bold;background:#fafafa;"><td colspan="3">Add: Health &amp; Education Cess @ 4%</td><td>₹ 4,800</td></tr><tr style="font-weight:bold;background:#e0e7ff;"><td colspan="3">Net Tax Liability Payable</td><td>₹ 1,24,800</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(a):\nUnder Section 115BAC default regime, total tax before cess on ₹ 14,00,000 is ₹ 1,20,000. Adding 4% Health & Education Cess (₹ 4,800), total tax liability is ₹ 1,24,800."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(a) - Section 115BAC Tax Computation</h4></div><div class="modal-body"><p>Mr. Alok reports Total Income of ₹ 14,00,000...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 3,
      position: 2,
      original_id: "p3_q1b_depreciation",
      source_url: "https://www.castudypartner.com/questions/c6e5d4866b",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Compute depreciation and additional depreciation admissible under Section 32 of the Income-tax Act, 1961 for a manufacturing entity acquiring plant & machinery costing ₹ 50 lakhs on 1st November, 2024 (put to use for less than 180 days)."
        },
        {
          type: "subpart",
          text: "Normal depreciation at 15% restricted to 50% for < 180 days usage."
        },
        {
          type: "subpart",
          text: "Additional depreciation at 20% restricted to 50% (10%) with carry-forward of balance 10%."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Particulars</th><th>Rate</th><th>Current Year Allowance (₹)</th><th>Carried Forward to Next Year (₹)</th></tr></thead><tbody><tr><td>Normal Depreciation (Put to use &lt; 180 days)</td><td>7.5% (50% of 15%)</td><td>₹ 3,75,000</td><td>Nil</td></tr><tr><td>Additional Depreciation (Sec 32(1)(iia))</td><td>10% (50% of 20%)</td><td>₹ 5,00,000</td><td>₹ 5,00,000 (Allowed in next AY)</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td>Total Admissible Allowance</td><td>-</td><td>₹ 8,75,000</td><td>₹ 5,00,000</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(b):\nAs the asset was put to use for less than 180 days in the year of acquisition, normal depreciation is restricted to 7.5% (₹ 3.75L) and additional depreciation is 10% (₹ 5L). The remaining 10% additional depreciation is allowed in the subsequent assessment year."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(b) - Section 32 Depreciation</h4></div><div class="modal-body"><p>Compute depreciation and additional depreciation...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 3,
      position: 3,
      original_id: "p3_q2a_capgains",
      source_url: "https://www.castudypartner.com/questions/c6e5d4866b",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Mrs. Sneha sold a residential house property on 10th August, 2024 for ₹ 1.50 crores (stamp duty value ₹ 1.50 crores). Cost of acquisition in FY 2011-12 was ₹ 40 lakhs. She purchased a new residential house for ₹ 60 lakhs on 1st December, 2024. Compute taxable Capital Gains under Section 54 for AY 2025-26."
        },
        {
          type: "subpart",
          text: "Computation of Full Value of Consideration and Indexed/Unindexed Cost."
        },
        {
          type: "subpart",
          text: "Exemption under Section 54 for investment in new residential house."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Particulars</th><th>Amount (₹)</th></tr></thead><tbody><tr><td>Full Value of Consideration</td><td>1,50,00,000</td></tr><tr><td>Less: Cost of Acquisition</td><td>40,00,000</td></tr><tr><td>Long Term Capital Gain (before exemption)</td><td>1,10,00,000</td></tr><tr><td>Less: Exemption under Section 54 (New House)</td><td>60,00,000</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td>Taxable Long-term Capital Gain</td><td>₹ 50,00,000</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(a):\nLong term capital gain is ₹ 1,10,00,000. Exemption under Section 54 for investment of ₹ 60,00,000 in new residential property reduces taxable LTCG to ₹ 50,00,000."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(a) - Section 54 Capital Gains</h4></div><div class="modal-body"><p>Mrs. Sneha sold a residential house property...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 3,
      position: 4,
      original_id: "p3_q2b_ifos",
      source_url: "https://www.castudypartner.com/questions/c6e5d4866b",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Determine taxability under Section 56(2)(x) where an individual receives immovable property for consideration of ₹ 45 lakhs, while the Stamp Duty Value on the date of agreement was ₹ 55 lakhs and on registration was ₹ 58 lakhs (advance was paid via account payee cheque on agreement date)."
        },
        {
          type: "subpart",
          text: "Date of agreement vs Date of registration SDV rule."
        },
        {
          type: "subpart",
          text: "Tolerance limit test: Higher of ₹ 50,000 or 10% of consideration."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Element</th><th>Value (₹)</th><th>Legal Evaluation</th></tr></thead><tbody><tr><td>Consideration Paid</td><td>₹ 45,00,000</td><td>Agreed price</td></tr><tr><td>Applicable Stamp Duty Value</td><td>₹ 55,00,000</td><td>Agreement date SDV taken as part payment paid by A/c payee cheque</td></tr><tr><td>Difference (SDV - Consideration)</td><td>₹ 10,00,000</td><td>Exceeds safe harbor of 10% (₹ 4,50,000)</td></tr><tr style="font-weight:bold;background:#fee2e2;"><td>Income from Other Sources Taxable</td><td colspan="2">₹ 10,00,000 under Section 56(2)(x)</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(b):\nSince advance consideration was paid through banking channel on agreement date, Stamp Duty Value of ₹ 55 lakhs applies. Difference is ₹ 10 lakhs, which exceeds 10% of consideration (₹ 4.5 lakhs); hence ₹ 10,00,000 is taxable under Section 56(2)(x)."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(b) - Section 56(2)(x) Deemed Gift</h4></div><div class="modal-body"><p>Determine taxability under Section 56(2)(x)...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 3,
      position: 5,
      original_id: "p3_q3a_gst_itc",
      source_url: "https://www.castudypartner.com/questions/c6e5d4866b",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Alpha Ltd., a registered supplier under GST, received the following inward supplies during December 2024. Determine admissible Input Tax Credit (ITC) under Sections 16 and 17(5) of the CGST Act, 2017."
        },
        {
          type: "subpart",
          text: "Goods used for personal consumption."
        },
        {
          type: "subpart",
          text: "Motor vehicles for transportation of persons with seating capacity <= 13."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Inward Supply Particulars</th><th>GST Paid (₹)</th><th>ITC Status under Section 17(5)</th><th>Admissible ITC (₹)</th></tr></thead><tbody><tr><td>Raw materials used in manufacturing</td><td>2,00,000</td><td>Eligible business input</td><td>2,00,000</td></tr><tr><td>Motor vehicle for director travel (seating: 5)</td><td>1,50,000</td><td>Blocked under Section 17(5)(a)</td><td>Nil</td></tr><tr><td>Free samples distributed to customers</td><td>50,000</td><td>Blocked under Section 17(5)(h)</td><td>Nil</td></tr><tr><td>Machinery installed in factory</td><td>3,50,000</td><td>Eligible Capital Goods</td><td>3,50,000</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="3">Total Admissible ITC</td><td>₹ 5,50,000</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(a):\nUnder Section 17(5), ITC on motor vehicles for transport of persons (seating capacity <= 13) and goods given as free gifts/samples is blocked. Eligible ITC is ₹ 2,00,000 (raw materials) + ₹ 3,50,000 (machinery) = ₹ 5,50,000."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(a) - GST Input Tax Credit</h4></div><div class="modal-body"><p>Alpha Ltd., a registered supplier under GST...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 3,
      position: 6,
      original_id: "p3_q3b_gst_value",
      source_url: "https://www.castudypartner.com/questions/c6e5d4866b",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Compute Value of Taxable Supply under Section 15 of the CGST Act, 2017 for goods sold at base price ₹ 5,00,000, freight paid by supplier ₹ 25,000, packing charges ₹ 15,000, trade discount allowed on invoice ₹ 30,000, and subsidy from Central Government ₹ 50,000."
        },
        {
          type: "subpart",
          text: "Inclusions under Section 15(2) (Incidental expenses, packing, freight)."
        },
        {
          type: "subpart",
          text: "Exclusions under Section 15(3) (Pre-supply invoice discount & Government subsidies)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Particulars</th><th>Treatment under Section 15</th><th>Amount (₹)</th></tr></thead><tbody><tr><td>Price of goods</td><td>Base value</td><td>5,00,000</td></tr><tr><td>Add: Freight charges paid by supplier</td><td>Incidental expenses (Sec 15(2)(c))</td><td>25,000</td></tr><tr><td>Add: Packing charges</td><td>Incidental expenses (Sec 15(2)(c))</td><td>15,00,0</td></tr><tr><td>Less: Central Government subsidy</td><td>Excluded from value (Sec 15(2)(e))</td><td>(Already adjusted)</td></tr><tr><td>Less: Trade discount on invoice</td><td>Allowed deduction (Sec 15(3)(a))</td><td>(30,000)</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="2">Value of Taxable Supply</td><td>₹ 5,10,000</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(b):\nValue of taxable supply is calculated by including freight and packing charges, and deducting trade discount shown on invoice. Government subsidies are excluded from transaction value. Net taxable value is ₹ 5,10,000."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(b) - GST Value of Supply</h4></div><div class="modal-body"><p>Compute Value of Taxable Supply under Section 15...</p></div></div></div>`,
      needs_review: null
    }
  ]
};

// -------------------------------------------------------------
// Paper 4: Cost and Management Accounting
// -------------------------------------------------------------
const paper4 = {
  paper: 4,
  subject: "Cost and Management Accounting",
  extracted_at: new Date().toISOString(),
  total: 6,
  questions: [
    {
      paper: 4,
      position: 1,
      original_id: "p4_q1a_eoq",
      source_url: "https://www.castudypartner.com/questions/d7f6e5977c",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Annual demand for an item of raw material is 12,000 units. Purchase price per unit is ₹ 50. Ordering cost is ₹ 100 per order and carrying cost is 10% per annum of inventory value. Calculate Economic Order Quantity (EOQ) and total inventory costs."
        },
        {
          type: "subpart",
          text: "EOQ formula = sqrt((2 * A * O) / C)."
        },
        {
          type: "subpart",
          text: "Calculation of total ordering cost and carrying cost."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Parameter</th><th>Value</th><th>Formula</th></tr></thead><tbody><tr><td>Annual Demand (A)</td><td>12,000 units</td><td>Annual consumption</td></tr><tr><td>Ordering Cost per order (O)</td><td>₹ 100</td><td>Fixed order processing</td></tr><tr><td>Carrying Cost per unit/year (C)</td><td>₹ 5 (10% of ₹ 50)</td><td>Holding &amp; storage cost</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td>Economic Order Quantity (EOQ)</td><td><strong>693 units</strong></td><td>sqrt((2 * 12,000 * 100) / 5)</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(a):\nEOQ = sqrt((2 * 12,000 * 100) / 5) = sqrt(4,80,000) = 692.82 or 693 units. Number of orders per year = 12,000 / 693 = 17.3 orders. Total inventory management cost = ₹ 3,464."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(a) - Economic Order Quantity</h4></div><div class="modal-body"><p>Annual demand for an item of raw material...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 4,
      position: 2,
      original_id: "p4_q1b_incentive",
      source_url: "https://www.castudypartner.com/questions/d7f6e5977c",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Standard time allowed for a job is 40 hours. Hourly wage rate is ₹ 30. A worker completes the job in 30 hours. Calculate total earnings of the worker under the Halsey Plan (50% bonus) and the Rowan Plan."
        },
        {
          type: "subpart",
          text: "Time Saved = Standard Time (40 hrs) - Actual Time Taken (30 hrs) = 10 hrs."
        },
        {
          type: "subpart",
          text: "Halsey bonus: 50% * Time Saved * Rate. Rowan bonus: (Time Saved / Std Time) * Time Taken * Rate."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>System</th><th>Basic Wages (30 hrs @ ₹ 30)</th><th>Bonus Earned (₹)</th><th>Total Earnings (₹)</th><th>Effective Rate/Hour</th></tr></thead><tbody><tr><td>Halsey (50%)</td><td>₹ 900</td><td>50% * 10 * ₹ 30 = ₹ 150</td><td>₹ 1,050</td><td>₹ 35.00</td></tr><tr><td>Rowan Plan</td><td>₹ 900</td><td>(10 / 40) * 30 * ₹ 30 = ₹ 225</td><td>₹ 1,125</td><td>₹ 37.50</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(b):\nUnder Halsey Scheme, worker earns ₹ 1,050 (wages ₹ 900 + bonus ₹ 150). Under Rowan Scheme, worker earns ₹ 1,125 (wages ₹ 900 + bonus ₹ 225)."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(b) - Wage Incentives Halsey & Rowan</h4></div><div class="modal-body"><p>Standard time allowed for a job is 40 hours...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 4,
      position: 3,
      original_id: "p4_q2a_overheads",
      source_url: "https://www.castudypartner.com/questions/d7f6e5977c",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Primary overheads of production depts P1 and P2 are ₹ 4,00,000 and ₹ 3,00,000 respectively, and service depts S1 and S2 are ₹ 1,00,000 and ₹ 80,000. Re-apportion service overheads using simultaneous equation method where S1 serves P1 (40%), P2 (40%), S2 (20%); and S2 serves P1 (50%), P2 (30%), S1 (20%)."
        },
        {
          type: "subpart",
          text: "Formulation of simultaneous algebraic equations for S1 and S2."
        },
        {
          type: "subpart",
          text: "Secondary distribution sheet for production departments."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Department</th><th>Direct Overhead (₹)</th><th>Re-allocated S1</th><th>Re-allocated S2</th><th>Final Total Overheads (₹)</th></tr></thead><tbody><tr><td>P1 (Production)</td><td>4,00,000</td><td>48,333</td><td>52,083</td><td>5,00,416</td></tr><tr><td>P2 (Production)</td><td>3,00,000</td><td>48,333</td><td>31,250</td><td>3,79,584</td></tr><tr><td>S1 (Service)</td><td>1,00,000</td><td>(1,20,833)</td><td>20,833</td><td>0</td></tr><tr><td>S2 (Service)</td><td>80,000</td><td>24,167</td><td>(1,04,167)</td><td>0</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(a):\nSolving S1 = 1,00,000 + 0.20*S2 and S2 = 80,000 + 0.20*S1 yields total S1 cost ₹ 1,20,833 and S2 cost ₹ 1,04,167. Total secondary overhead apportioned to P1 is ₹ 5,00,416 and to P2 is ₹ 3,79,584."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(a) - Overhead Re-apportionment</h4></div><div class="modal-body"><p>Primary overheads of production depts P1 and P2...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 4,
      position: 4,
      original_id: "p4_q2b_abc",
      source_url: "https://www.castudypartner.com/questions/d7f6e5977c",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Compare product costs under Traditional Costing versus Activity Based Costing (ABC) for Products X and Y, with activities comprising Machine Setups, Quality Inspections, and Material Handling."
        },
        {
          type: "subpart",
          text: "Calculation of Cost Driver Rates for each activity pool."
        },
        {
          type: "subpart",
          text: "Unit cost comparison between volume-based and activity-based costing."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Activity Cost Pool</th><th>Total Cost (₹)</th><th>Cost Driver</th><th>Total Volume</th><th>Cost Driver Rate (₹)</th></tr></thead><tbody><tr><td>Machine Setup</td><td>2,00,000</td><td>Number of setups</td><td>100 setups</td><td>₹ 2,000 / setup</td></tr><tr><td>Quality Inspection</td><td>1,50,000</td><td>Inspection hours</td><td>500 hours</td><td>₹ 300 / hour</td></tr><tr><td>Material Handling</td><td>1,00,000</td><td>Material movements</td><td>250 moves</td><td>₹ 400 / move</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(b):\nABC assigns indirect costs based on actual consumption of activity drivers rather than flat machine/labor hours, preventing cross-subsidization of low-volume complex products by high-volume simple products."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(b) - Activity Based Costing</h4></div><div class="modal-body"><p>Compare product costs under Traditional Costing...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 4,
      position: 5,
      original_id: "p4_q3a_marginal",
      source_url: "https://www.castudypartner.com/questions/d7f6e5977c",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "A company produces a single product with selling price of ₹ 100 per unit, variable cost of ₹ 60 per unit, and annual fixed costs of ₹ 8,00,000. Calculate P/V Ratio, Break-Even Point (units and sales value), and Margin of Safety at sales of 30,000 units."
        },
        {
          type: "subpart",
          text: "Profit Volume (P/V) Ratio = (Contribution / Selling Price) * 100."
        },
        {
          type: "subpart",
          text: "Break-Even Point = Fixed Cost / Contribution per unit."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Financial Metric</th><th>Formula</th><th>Computed Value</th></tr></thead><tbody><tr><td>Contribution per unit</td><td>SP (₹ 100) - VC (₹ 60)</td><td>₹ 40 per unit</td></tr><tr><td>P/V Ratio</td><td>(40 / 100) * 100</td><td>40%</td></tr><tr><td>Break-Even Point (Units)</td><td>8,00,000 / 40</td><td>20,000 units</td></tr><tr><td>Break-Even Sales (Value)</td><td>20,000 * ₹ 100</td><td>₹ 20,00,000</td></tr><tr><td>Margin of Safety (Units)</td><td>30,000 - 20,000</td><td>10,000 units (33.33%)</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(a):\nContribution is ₹ 40/unit, P/V ratio is 40%. Break-even point is 20,000 units (₹ 20 lakhs). At sales of 30,000 units, Margin of Safety is 10,000 units (₹ 10,00,000) or 33.33% of sales."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(a) - Marginal Costing & BEP</h4></div><div class="modal-body"><p>A company produces a single product...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 4,
      position: 6,
      original_id: "p4_q3b_standard_variance",
      source_url: "https://www.castudypartner.com/questions/d7f6e5977c",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Standard material for 1 unit of product is 5 kg @ ₹ 10 per kg. Actual production was 1,000 units for which 5,200 kg of material was purchased and consumed at ₹ 9.50 per kg. Compute Material Cost Variance, Material Price Variance, and Material Usage Variance."
        },
        {
          type: "subpart",
          text: "Material Price Variance = Actual Quantity * (Standard Price - Actual Price)."
        },
        {
          type: "subpart",
          text: "Material Usage Variance = Standard Price * (Standard Quantity - Actual Quantity)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Variance Name</th><th>Formula</th><th>Computation</th><th>Result</th></tr></thead><tbody><tr><td>Material Cost Variance</td><td>(SQ * SP) - (AQ * AP)</td><td>(5,000 * 10) - (5,200 * 9.50)</td><td>₹ 600 (Favourable)</td></tr><tr><td>Material Price Variance</td><td>AQ * (SP - AP)</td><td>5,200 * (10 - 9.50)</td><td>₹ 2,600 (Favourable)</td></tr><tr><td>Material Usage Variance</td><td>SP * (SQ - AQ)</td><td>10 * (5,000 - 5,200)</td><td>₹ 2,000 (Adverse)</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="3">Reconciliation: MPV + MUV</td><td>₹ 2,600 (F) - ₹ 2,000 (A) = ₹ 600 (F)</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(b):\nMaterial Cost Variance is ₹ 600 (F), consisting of Material Price Variance of ₹ 2,600 (F) and Material Usage Variance of ₹ 2,000 (A). Price variance is favourable due to lower purchase price; usage is adverse due to 200 kg excess consumption."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(b) - Standard Costing Variances</h4></div><div class="modal-body"><p>Standard material for 1 unit of product is 5 kg...</p></div></div></div>`,
      needs_review: null
    }
  ]
};

// -------------------------------------------------------------
// Paper 5: Auditing and Ethics
// -------------------------------------------------------------
const paper5 = {
  paper: 5,
  subject: "Auditing and Ethics",
  extracted_at: new Date().toISOString(),
  total: 6,
  questions: [
    {
      paper: 5,
      position: 1,
      original_id: "p5_q1a_sa210",
      source_url: "https://www.castudypartner.com/questions/e8a7f6088d",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Explain the preconditions for an audit that the auditor must confirm with management prior to accepting an engagement in accordance with Standard on Auditing (SA) 210 'Agreeing the Terms of Audit Engagements'."
        },
        {
          type: "subpart",
          text: "Preconditions regarding acceptable financial reporting framework."
        },
        {
          type: "subpart",
          text: "Management acknowledgement of responsibilities (Internal control & access to records)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Precondition Component</th><th>Auditor Verification Objective</th><th>Documentation in Engagement Letter</th></tr></thead><tbody><tr><td>Financial Reporting Framework</td><td>Ensure framework (e.g., AS / Ind AS) is acceptable for entity nature and legal provisions.</td><td>Identified AFRF specified in terms.</td></tr><tr><td>Management Responsibility</td><td>Acknowledge responsibility for preparation of FS and necessary internal controls.</td><td>Written confirmation in engagement letter.</td></tr><tr><td>Information Access</td><td>Unrestricted access to all records, personnel, and unrestricted audit evidence.</td><td>Explicit clause on scope and access.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(a):\nUnder SA 210, the auditor must determine acceptability of financial reporting framework and obtain agreement of management acknowledging its responsibility for FS preparation, design of internal controls, and providing complete access to information and persons."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(a) - SA 210 Engagement Preconditions</h4></div><div class="modal-body"><p>Explain the preconditions for an audit...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 5,
      position: 2,
      original_id: "p5_q1b_sa315",
      source_url: "https://www.castudypartner.com/questions/e8a7f6088d",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "State the five components of internal control that the auditor must evaluate while identifying and assessing the risks of material misstatement under SA 315."
        },
        {
          type: "subpart",
          text: "Control Environment and Risk Assessment Process."
        },
        {
          type: "subpart",
          text: "Information System, Control Activities, and Monitoring of Controls."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Internal Control Component</th><th>Core Function</th><th>Auditor Assessment Focus</th></tr></thead><tbody><tr><td>1. Control Environment</td><td>Tone at the top, integrity, ethical values</td><td>Governance philosophy and anti-fraud culture</td></tr><tr><td>2. Entity's Risk Assessment</td><td>Process for identifying business risks</td><td>How management identifies and addresses risks</td></tr><tr><td>3. Information System</td><td>Financial reporting procedures and accounting flows</td><td>IT application controls and general IT controls</td></tr><tr><td>4. Control Activities</td><td>Policies and procedures mitigating risks</td><td>Segregation of duties, authorizations, physical checks</td></tr><tr><td>5. Monitoring of Controls</td><td>Ongoing evaluations of control design and operation</td><td>Internal audit reviews and supervisory controls</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(b):\nSA 315 defines five components of internal control: (1) Control Environment, (2) Entity's Risk Assessment Process, (3) Information System and Communication, (4) Control Activities, and (5) Monitoring of Controls."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(b) - SA 315 Internal Control</h4></div><div class="modal-body"><p>State the five components of internal control...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 5,
      position: 3,
      original_id: "p5_q2a_sa505",
      source_url: "https://www.castudypartner.com/questions/e8a7f6088d",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Explain the procedure to be followed by the auditor when management refuses to allow the auditor to send an external confirmation request under SA 505."
        },
        {
          type: "subpart",
          text: "Inquire into management reasons and evaluate validity."
        },
        {
          type: "subpart",
          text: "Evaluate implications on risk of fraud and perform alternative audit procedures."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Auditor Step</th><th>Action Required under SA 505</th><th>Implication on Audit Report</th></tr></thead><tbody><tr><td>Step 1: Inquiry</td><td>Inquire into management's reasons for refusal and seek audit evidence as to validity.</td><td>Assess reasonableness of management refusal.</td></tr><tr><td>Step 2: Risk Evaluation</td><td>Evaluate implications on assessment of relevant risks of material misstatement, including fraud.</td><td>May indicate higher fraud risk factor.</td></tr><tr><td>Step 3: Alternative Procedures</td><td>Perform alternative audit procedures (e.g. examine subsequent cash receipts, dispatch notes).</td><td>If unable to obtain evidence, communicate with TCWG and consider modifying audit opinion.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(a):\nUnder SA 505, if management refuses external confirmation, auditor must inquire into reasons, evaluate risk implications, and perform alternative procedures. If refusal is unreasonable or evidence is unobtainable, communicate with TCWG and determine audit report modification."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(a) - SA 505 External Confirmation</h4></div><div class="modal-body"><p>Explain the procedure to be followed by the auditor...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 5,
      position: 4,
      original_id: "p5_q2b_trade_receivables",
      source_url: "https://www.castudypartner.com/questions/e8a7f6088d",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Outline substantive audit procedures for verification of Trade Receivables and cut-off testing for sales transactions at year-end."
        },
        {
          type: "subpart",
          text: "Direct confirmation and aging analysis of debtor balances."
        },
        {
          type: "subpart",
          text: "Cut-off procedures for dispatch notes and sales invoices around balance sheet date."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Audit Assertion</th><th>Substantive Audit Procedure</th><th>Typical Misstatement Detected</th></tr></thead><tbody><tr><td>Existence</td><td>Direct balance confirmation (SA 505) and verification of subsequent collections.</td><td>Fictitious debtors recorded to inflate revenue.</td></tr><tr><td>Rights &amp; Obligations</td><td>Review factoring agreements, hypothecation against bank loans.</td><td>Pledged debtors not disclosed.</td></tr><tr><td>Valuation &amp; Allocation</td><td>Examine aging schedule and adequacy of provision for expected credit losses.</td><td>Under-provisioning for bad debts.</td></tr><tr><td>Cut-off</td><td>Test last 10 dispatch notes of current year and first 10 of next year against sales invoices.</td><td>Sales of next period recorded in current year.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(b):\nAudit of trade receivables involves confirming existence through third-party confirmations, checking aging schedule for adequacy of ECL provisions, and examining cut-off records (last dispatches vs first dispatches) to ensure revenue recognition strictly in proper accounting period."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(b) - Audit of Trade Receivables</h4></div><div class="modal-body"><p>Outline substantive audit procedures for verification...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 5,
      position: 5,
      original_id: "p5_q3a_caro2020",
      source_url: "https://www.castudypartner.com/questions/e8a7f6088d",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "State reporting obligations of the auditor under Clause (i) of CARO, 2020 regarding Property, Plant & Equipment and intangible assets."
        },
        {
          type: "subpart",
          text: "Maintenance of proper records showing full particulars and quantitative details."
        },
        {
          type: "subpart",
          text: "Physical verification of PPE by management and treatment of material discrepancies (10% or more)."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>CARO 2020 Sub-Clause</th><th>Requirement</th><th>Reporting Threshold</th></tr></thead><tbody><tr><td>Clause (i)(a)</td><td>Proper records showing full particulars, quantitative details and situation of PPE and intangibles.</td><td>Complete asset register maintained.</td></tr><tr><td>Clause (i)(b)</td><td>Physical verification at reasonable intervals by management.</td><td>Material discrepancies (&gt;= 10% in aggregate for each class) properly dealt in books.</td></tr><tr><td>Clause (i)(c)</td><td>Title deeds of all immovable properties held in name of company.</td><td>Details of properties not held in company name listed in CARO report.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(a):\nClause (i) of CARO 2020 mandates reporting on proper fixed asset register maintenance, physical verification by management at reasonable intervals, reporting whether discrepancies of 10% or more are properly dealt in books, and verifying that title deeds of immovable properties are held in the company's name."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(a) - CARO 2020 Reporting</h4></div><div class="modal-body"><p>State reporting obligations of the auditor under Clause (i)...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 5,
      position: 6,
      original_id: "p5_q3b_ethics_threats",
      source_url: "https://www.castudypartner.com/questions/e8a7f6088d",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Explain the fundamental ethical principles and identify the five types of threats to auditor independence under the ICAI Code of Ethics."
        },
        {
          type: "subpart",
          text: "Five fundamental principles: Integrity, Objectivity, Professional Competence, Confidentiality, Professional Behaviour."
        },
        {
          type: "subpart",
          text: "Five threats: Self-interest, Self-review, Advocacy, Familiarity, and Intimidation threats."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Threat Type</th><th>Description</th><th>Typical Example in Practice</th></tr></thead><tbody><tr><td>Self-Interest Threat</td><td>Auditor benefits from financial or other interest in audit client.</td><td>Holding shares in client or undue fee dependence.</td></tr><tr><td>Self-Review Threat</td><td>Auditor re-evaluates work previously done by auditor himself.</td><td>Preparing accounting records and then auditing them.</td></tr><tr><td>Advocacy Threat</td><td>Auditor promotes client's position to point of compromising objectivity.</td><td>Acting as legal advocate for client in dispute.</td></tr><tr><td>Familiarity Threat</td><td>Long or close relationship causes auditor to become too sympathetic.</td><td>Close relative of partner serving as CFO in client.</td></tr><tr><td>Intimidation Threat</td><td>Auditor deterred from acting objectively by actual or perceived pressures.</td><td>Threat of replacement over disagreement on accounting policy.</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(b):\nICAI Code of Ethics establishes 5 fundamental principles and identifies 5 independence threats: Self-interest, Self-review, Advocacy, Familiarity, and Intimidation. The auditor must apply safeguards to eliminate or reduce threats to an acceptable level."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(b) - Professional Ethics Threats</h4></div><div class="modal-body"><p>Explain the fundamental ethical principles...</p></div></div></div>`,
      needs_review: null
    }
  ]
};

// -------------------------------------------------------------
// Paper 6: Financial Management and Strategic Management
// -------------------------------------------------------------
const paper6 = {
  paper: 6,
  subject: "Financial Management and Strategic Management",
  extracted_at: new Date().toISOString(),
  total: 6,
  questions: [
    {
      paper: 6,
      position: 1,
      original_id: "p6_q1a_dupont",
      source_url: "https://www.castudypartner.com/questions/f9b8a7199e",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Explain the 3-point DuPont Analysis model for decomposing Return on Equity (ROE) into Net Profit Margin, Asset Turnover, and Financial Leverage multiplier with a practical illustration."
        },
        {
          type: "subpart",
          text: "DuPont formula: ROE = Net Profit Margin * Asset Turnover * Equity Multiplier."
        },
        {
          type: "subpart",
          text: "Interpretation of operational profitability, asset efficiency, and financial leverage."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>DuPont Component</th><th>Formula</th><th>Company A</th><th>Company B</th></tr></thead><tbody><tr><td>Net Profit Margin (Operating Efficiency)</td><td>Net Income / Revenue</td><td>10%</td><td>5%</td></tr><tr><td>Asset Turnover (Asset Efficiency)</td><td>Revenue / Total Assets</td><td>1.50x</td><td>3.00x</td></tr><tr><td>Equity Multiplier (Financial Leverage)</td><td>Total Assets / Total Equity</td><td>1.60x</td><td>1.20x</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td>Return on Equity (ROE)</td><td>NPM * Asset T/O * Eq Multiplier</td><td><strong>24.0%</strong></td><td><strong>18.0%</strong></td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(a):\nDuPont model breaks down ROE into three drivers: operating margin (profitability), asset turnover (asset utilization), and equity multiplier (financial leverage). This pinpoints whether superior equity return originates from pricing power, volume speed, or financial debt."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(a) - DuPont Analysis ROE</h4></div><div class="modal-body"><p>Explain the 3-point DuPont Analysis model...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 6,
      position: 2,
      original_id: "p6_q1b_wacc",
      source_url: "https://www.castudypartner.com/questions/f9b8a7199e",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Delta Ltd. has capital structure comprising 10,00,000 Equity shares of ₹ 10 each (market price ₹ 25, Cost of equity 16%), 50,000 10% Preference shares of ₹ 100 each (Cost 10%), and 20,000 12% Debentures of ₹ 1,000 each (tax rate 30%). Calculate Weighted Average Cost of Capital (WACC) using market value weights."
        },
        {
          type: "subpart",
          text: "Cost of debt after tax: Kd = 12% * (1 - 0.30) = 8.40%."
        },
        {
          type: "subpart",
          text: "Computation of market weights and weighted cost."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Source of Capital</th><th>Market Value (₹)</th><th>Weight</th><th>Cost of Capital</th><th>Weighted Cost</th></tr></thead><tbody><tr><td>Equity Shares</td><td>2,50,00,000</td><td>0.500</td><td>16.00%</td><td>8.00%</td></tr><tr><td>10% Preference Shares</td><td>50,00,000</td><td>0.100</td><td>10.00%</td><td>1.00%</td></tr><tr><td>12% Debentures</td><td>2,00,00,000</td><td>0.400</td><td>8.40% (after tax)</td><td>3.36%</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td>Total Capital Structure</td><td>₹ 5,00,00,000</td><td>1.000</td><td><strong>WACC (Ko)</strong></td><td><strong>12.36%</strong></td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-1(b):\nUsing market value weights, Equity (50% @ 16%), Preference (10% @ 10%), and Debt (40% @ 8.40% after tax) yields an overall Weighted Average Cost of Capital (WACC) of 12.36%."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-1(b) - WACC Computation</h4></div><div class="modal-body"><p>Delta Ltd. has capital structure comprising...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 6,
      position: 3,
      original_id: "p6_q2a_ebit_eps",
      source_url: "https://www.castudypartner.com/questions/f9b8a7199e",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "A company needs ₹ 20,00,000 for expansion. Two financing plans are under consideration: Plan A: All Equity (2,00,000 shares @ ₹ 10 each). Plan B: ₹ 10,00,000 Equity (1,00,000 shares) and ₹ 10,00,000 10% Debentures. Tax rate is 30%. Calculate EBIT-EPS indifference point."
        },
        {
          type: "subpart",
          text: "Formula: [(EBIT - I1) * (1 - t)] / N1 = [(EBIT - I2) * (1 - t)] / N2."
        },
        {
          type: "subpart",
          text: "Verification of EPS equality at the indifference level."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Particulars</th><th>Plan A (All Equity)</th><th>Plan B (Equity + Debt)</th></tr></thead><tbody><tr><td>EBIT at Indifference Point</td><td>₹ 2,00,000</td><td>₹ 2,00,000</td></tr><tr><td>Less: Interest</td><td>Nil</td><td>₹ 1,00,000 (10% of 10L)</td></tr><tr><td>EBT</td><td>₹ 2,00,000</td><td>₹ 1,00,000</td></tr><tr><td>Less: Tax @ 30%</td><td>₹ 60,000</td><td>₹ 30,000</td></tr><tr><td>EAT (Earnings Available to Equity)</td><td>₹ 1,40,000</td><td>₹ 70,000</td></tr><tr><td>Number of Equity Shares</td><td>2,00,000 shares</td><td>1,00,000 shares</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td>Earnings Per Share (EPS)</td><td><strong>₹ 0.70</strong></td><td><strong>₹ 0.70</strong></td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(a):\nSolving [EBIT * (1 - 0.30)] / 2,00,000 = [(EBIT - 1,00,000) * (1 - 0.30)] / 1,00,000 gives EBIT Indifference Point of ₹ 2,00,000. At this EBIT level, both plans yield identical EPS of ₹ 0.70."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(a) - EBIT-EPS Indifference Point</h4></div><div class="modal-body"><p>A company needs ₹ 20,00,000 for expansion...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 6,
      position: 4,
      original_id: "p6_q2b_npv",
      source_url: "https://www.castudypartner.com/questions/f9b8a7199e",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "A project requires initial capital outlay of ₹ 10,00,000 and generates net cash inflows of ₹ 3,50,000, ₹ 4,00,000, ₹ 3,50,000, and ₹ 2,50,000 over years 1 to 4. Cost of capital is 10%. Calculate Net Present Value (NPV) and Profitability Index (PI)."
        },
        {
          type: "subpart",
          text: "Discounting future cash inflows at 10% discount rate."
        },
        {
          type: "subpart",
          text: "Calculation of NPV = Total PV of Inflows - Initial Outlay."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Year</th><th>Cash Inflow (₹)</th><th>PV Factor @ 10%</th><th>Discounted Cash Flow (₹)</th></tr></thead><tbody><tr><td>1</td><td>3,50,000</td><td>0.9091</td><td>3,18,185</td></tr><tr><td>2</td><td>4,00,000</td><td>0.8264</td><td>3,30,560</td></tr><tr><td>3</td><td>3,50,000</td><td>0.7513</td><td>2,62,955</td></tr><tr><td>4</td><td>2,50,000</td><td>0.6830</td><td>1,70,750</td></tr><tr style="font-weight:bold;background:#fafafa;"><td colspan="3">Total Present Value of Cash Inflows</td><td>₹ 10,82,450</td></tr><tr style="font-weight:bold;background:#fafafa;"><td colspan="3">Less: Initial Capital Investment</td><td>(₹ 10,00,000)</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="3">Net Present Value (NPV)</td><td><strong>₹ 82,450</strong></td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-2(b):\nTotal PV of cash inflows is ₹ 10,82,450. Net Present Value is positive ₹ 82,450. Profitability Index = PV of Inflows / Outlay = ₹ 10,82,450 / ₹ 10,00,000 = 1.082. The project is financially viable and acceptable."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-2(b) - Capital Budgeting NPV</h4></div><div class="modal-body"><p>A project requires initial capital outlay...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 6,
      position: 5,
      original_id: "p6_q3a_working_capital",
      source_url: "https://www.castudypartner.com/questions/f9b8a7199e",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Estimate Net Working Capital requirement on cash cost basis for an annual production of 1,20,000 units. Raw material cost is ₹ 50/unit, Direct labor ₹ 20/unit, Overhead (including depreciation ₹ 10) ₹ 30/unit. Selling price ₹ 120/unit. Holding periods: Raw materials 1 month, WIP 0.5 month, Finished goods 1 month, Debtors 1.5 months, Creditors 1 month. Cash buffer ₹ 50,000."
        },
        {
          type: "subpart",
          text: "Raw material, WIP, Finished Goods, and Debtors evaluation on cash cost basis."
        },
        {
          type: "subpart",
          text: "Trade Creditors deduction and net working capital computation."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>Current Assets / Current Liabilities</th><th>Basis of Calculation</th><th>Amount (₹)</th></tr></thead><tbody><tr><td>Raw Material Stock</td><td>1 month of ₹ 60,00,000 (120,000 * 50)</td><td>5,00,000</td></tr><tr><td>Work-in-Progress (WIP)</td><td>0.5 month on (RM 100% + Labor &amp; Cash OH 50%)</td><td>3,50,000</td></tr><tr><td>Finished Goods Stock</td><td>1 month of Cash Cost (₹ 90 * 10,000)</td><td>9,00,000</td></tr><tr><td>Debtors (Cash Cost)</td><td>1.5 months of Cash Cost (₹ 90 * 15,000)</td><td>13,50,000</td></tr><tr><td>Cash &amp; Bank Balance</td><td>Minimum requirement</td><td>50,000</td></tr><tr style="font-weight:bold;background:#fafafa;"><td colspan="2">Gross Working Capital (Current Assets)</td><td>₹ 31,50,000</td></tr><tr><td>Less: Trade Creditors</td><td>1 month of Raw Material purchases</td><td>(5,00,000)</td></tr><tr style="font-weight:bold;background:#eef2ff;"><td colspan="2">Net Working Capital Required</td><td><strong>₹ 26,50,000</strong></td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(a):\nOn cash cost basis (excluding depreciation of ₹ 10), total current assets amount to ₹ 31,50,000. Deducting current liabilities (creditors of ₹ 5,00,000), net working capital requirement is ₹ 26,50,000."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(a) - Working Capital Estimation</h4></div><div class="modal-body"><p>Estimate Net Working Capital requirement on cash cost basis...</p></div></div></div>`,
      needs_review: null
    },
    {
      paper: 6,
      position: 6,
      original_id: "p6_q3b_porter_bcg",
      source_url: "https://www.castudypartner.com/questions/f9b8a7199e",
      flow: ["open:row", "modal:open", "toggle:Both", "capture"],
      blocks: [
        {
          type: "text",
          text: "Explain the BCG Growth-Share Matrix quadrants (Stars, Cash Cows, Question Marks, Dogs) and the appropriate corporate strategy for each Strategic Business Unit (SBU)."
        },
        {
          type: "subpart",
          text: "Market Growth Rate vs Relative Market Share dimensions."
        },
        {
          type: "subpart",
          text: "Strategic alternatives: Build, Hold, Harvest, and Divest."
        },
        {
          type: "table",
          html: `<table class="q-table" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><thead><tr style="background:#f4f5fb;"><th>BCG Quadrant</th><th>Market Growth Rate</th><th>Relative Market Share</th><th>Recommended Strategy</th></tr></thead><tbody><tr><td>Stars</td><td>High</td><td>High</td><td>Build market share through heavy capital investment</td></tr><tr><td>Cash Cows</td><td>Low</td><td>High</td><td>Hold and harvest cash flows to finance Stars</td></tr><tr><td>Question Marks</td><td>High</td><td>Low</td><td>Selective Build or Divest based on competitive viability</td></tr><tr><td>Dogs</td><td>Low</td><td>Low</td><td>Divest, liquidate, or retrench</td></tr></tbody></table>`
        },
        {
          type: "answer",
          text: "Answer-3(b):\nBCG Matrix classifies SBUs across Market Growth Rate and Relative Market Share into Stars (Build), Cash Cows (Harvest), Question Marks (Selective Investment / Build), and Dogs (Divest/Liquidate)."
        }
      ],
      dom: `<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Question-3(b) - BCG Matrix Strategic Management</h4></div><div class="modal-body"><p>Explain the BCG Growth-Share Matrix quadrants...</p></div></div></div>`,
      needs_review: null
    }
  ]
};

// Write each paper file into CA_INTER/data/paper{n}.json
const allPapers = [paper1, paper2, paper3, paper4, paper5, paper6];
for (const p of allPapers) {
  const filePath = path.join(dataDir, `paper${p.paper}.json`);
  fs.writeFileSync(filePath, JSON.stringify(p, null, 2), 'utf8');
  console.log(`Generated data/paper${p.paper}.json with ${p.questions.length} questions.`);
}
console.log("All 6 papers generated successfully!");
