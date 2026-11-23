const fs = require('fs');

// Build Paper 1 Advanced Accounting with EXACT MTP-01 questions matching user screenshots
const p1Questions = [
  {
    id: "P1-SUBJ-001",
    sn: 1,
    category: "Subjective",
    type: "Subjective",
    topic: "AS 4",
    subTopic: "Contingencies and Events occuring after the Balance Sheet Date",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "1(a)",
    marks: "7",
    question: `<p class="mb-3">The financial statements of Mehta Ltd. for the year 2024-25 approved by the Board of Directors on 15th July, 2025. The following information was provided:</p>
<p class="mb-2 pl-3"><strong>(i)</strong> A suit against the company's advertisement was filed by a party on 20th April, 2025, claiming damages of ₹ 25 lakhs.</p>
<p class="mb-2 pl-3"><strong>(ii)</strong> Theft of cash of ₹ 5 lakhs by the cashier on 31st March, 2025 but was detected on 16th July, 2025.</p>
<p class="mb-2 pl-3"><strong>(iii)</strong> Company sent a proposal to sell an immovable property for ₹ 40 lakhs in March, 2025. The book value of the property was ₹ 30 lakhs on 31st March, 2025. However, the deed was registered on 15th April, 2025.</p>
<p class="mb-2 pl-3"><strong>(iv)</strong> A major fire has damaged the assets in a factory on 5th April, 2025. However, the assets are fully insured.</p>
<p class="mt-3">With reference to AS-4 "Contingencies and events occurring after the balance sheet date", state whether the above mentioned events will be treated as contingencies, adjusting events or non-adjusting events occurring after the balance sheet date.</p>`,
    answer: `<p class="mb-3"><strong>(i)</strong> Suit filed against the company is a contingent liability but it was not existing as on balance sheet date as the suit was filed on 20th April after the balance Sheet date. As per AS 4, 'Contingencies' used in the Standard is restricted to conditions or situations at the balance sheet date, the financial effect of which is to be determined by future events which may or may not occur. Hence, it will have no effect on financial statements and will be a non-adjusting event.</p>
<p class="mb-3"><strong>(ii)</strong> Only those significant events which occur between the balance sheet date and the date on which the financial statements are approved, may indicate the need for adjustment to assets and liabilities existing on the balance sheet date or may require disclosure. In the given case, theft of cash was detected on 16th July, 2025 after approval of financial statements by the Board of Directors, hence no treatment is required.</p>
<p class="mb-3"><strong>(iii)</strong> Adjustments to assets and liabilities are not appropriate for events occurring after the balance sheet date, if such events do not relate to conditions existing at the balance sheet date. In the given case, sale of immovable property was under proposal stage (negotiations also not started) on the balance sheet date. Therefore, no adjustment to assets for sale of immovable property is required in the financial statements for the year ended 31st March, 2025.</p>
<p class="mb-3"><strong>(iv)</strong> The condition of fire occurrence was not existing on the balance sheet date. Only the disclosure regarding event of fire and loss being completely insured may be given in the report of approving authority.</p>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-002",
    sn: 2,
    category: "Subjective",
    type: "Subjective",
    topic: "AS 21",
    subTopic: "Consolidated Financial Statements",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "1(b)",
    marks: "7",
    question: `<p class="mb-3">A Ltd. acquired 75% equity shares of B Ltd. on 1st July, 2024. The balance sheets of both companies as at 31st March, 2025 show Share Capital of B Ltd. as ₹ 10,00,000 (Shares of ₹ 10 each). The General Reserve of B Ltd. on 1st April, 2024 stood at ₹ 3,00,000 and Profit & Loss Account on 1st April, 2024 stood at ₹ 1,50,000. Profit earned by B Ltd. during the year 2024-25 was ₹ 2,40,000 accrued evenly throughout the year.</p>
<p class="mt-2">Cost of acquisition to A Ltd. was ₹ 14,50,000. You are required to calculate:</p>
<ol class="list-decimal pl-6 mt-1 space-y-1">
  <li>Capital Profit (Pre-acquisition profit)</li>
  <li>Revenue Profit (Post-acquisition profit)</li>
  <li>Non-Controlling Interest (Minority Interest)</li>
  <li>Cost of Control (Goodwill or Capital Reserve)</li>
</ol>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">1. Apportionment of Profits of B Ltd.:</h4>
<div class="overflow-x-auto my-3"><table class="w-full text-xs border border-slate-300 border-collapse"><thead class="bg-slate-100 font-bold"><tr><th class="p-2 border border-slate-300">Particulars</th><th class="p-2 border border-slate-300 text-right">Pre-Acq. (3 months)</th><th class="p-2 border border-slate-300 text-right">Post-Acq. (9 months)</th></tr></thead>
<tbody>
<tr><td class="p-2 border border-slate-300">General Reserve on 01.04.2024</td><td class="p-2 border border-slate-300 text-right">₹ 3,00,000</td><td class="p-2 border border-slate-300 text-right">-</td></tr>
<tr><td class="p-2 border border-slate-300">P&L Balance on 01.04.2024</td><td class="p-2 border border-slate-300 text-right">₹ 1,50,000</td><td class="p-2 border border-slate-300 text-right">-</td></tr>
<tr><td class="p-2 border border-slate-300">Profit for 2024-25 (₹ 2,40,000)</td><td class="p-2 border border-slate-300 text-right">₹ 60,000</td><td class="p-2 border border-slate-300 text-right">₹ 1,80,000</td></tr>
<tr class="font-bold bg-slate-50"><td class="p-2 border border-slate-300">Total Profit</td><td class="p-2 border border-slate-300 text-right">₹ 5,10,000</td><td class="p-2 border border-slate-300 text-right">₹ 1,80,000</td></tr>
</tbody></table></div>
<h4 class="font-bold text-[#14183a] mt-4 mb-2 underline">2. Calculation of Minority Interest (25%):</h4>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li>Paid up Share Capital (25% of ₹ 10,00,000) = ₹ 2,50,000</li>
  <li>Share in Pre-acquisition Profit (25% of ₹ 5,10,000) = ₹ 1,27,500</li>
  <li>Share in Post-acquisition Profit (25% of ₹ 1,80,000) = ₹ 45,000</li>
  <li><strong>Total Minority Interest = ₹ 4,22,500</strong></li>
</ul>
<h4 class="font-bold text-[#14183a] mt-4 mb-2 underline">3. Calculation of Cost of Control (Goodwill):</h4>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li>Cost of Investment by A Ltd. = ₹ 14,50,000</li>
  <li>Less: Face value of Shares (75% of ₹ 10,00,000) = (₹ 7,50,000)</li>
  <li>Less: Share in Pre-acquisition Profit (75% of ₹ 5,10,000) = (₹ 3,82,500)</li>
  <li><strong>Goodwill on Consolidation = ₹ 3,17,500</strong></li>
</ul>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-003",
    sn: 3,
    category: "Subjective",
    type: "Subjective",
    topic: "AS 13",
    subTopic: "Accounting for Investments",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "2(a)",
    marks: "10",
    question: `<p class="mb-3">On 1st April, 2024, Mr. Rajat held 1,000, 12% Government Bonds of ₹ 100 each at a book value of ₹ 95,000. Interest is payable semi-annually on 30th June and 31st December each year. The following transactions took place during the financial year 2024-25:</p>
<ul class="list-disc pl-6 space-y-1.5 my-2 text-xs">
  <li><strong>01.05.2024:</strong> Purchased 500 bonds at ₹ 98 cum-interest. Brokerage 1%.</li>
  <li><strong>01.09.2024:</strong> Sold 600 bonds at ₹ 97 ex-interest. Brokerage 1%.</li>
  <li><strong>01.11.2024:</strong> Purchased 400 bonds at ₹ 96 ex-interest. Brokerage 1%.</li>
  <li><strong>01.02.2025:</strong> Sold 700 bonds at ₹ 99 cum-interest. Brokerage 1%.</li>
</ul>
<p class="mt-3">Prepare the 12% Government Bonds Investment Account in the books of Mr. Rajat for the year ended 31st March, 2025, applying average cost method.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2">In the Books of Mr. Rajat<br>12% Government Bonds Account (for the year ended 31.03.2025)</h4>
<div class="overflow-x-auto my-3"><table class="w-full text-xs border border-slate-300 border-collapse"><thead class="bg-indigo-50 font-bold"><tr><th class="p-1 border">Date</th><th class="p-1 border">Particulars</th><th class="p-1 border text-right">Nominal (₹)</th><th class="p-1 border text-right">Interest (₹)</th><th class="p-1 border text-right">Cost (₹)</th></tr></thead>
<tbody>
<tr><td class="p-1 border">01.04.24</td><td class="p-1 border">To Balance b/d</td><td class="p-1 border text-right">1,00,000</td><td class="p-1 border text-right">3,000</td><td class="p-1 border text-right">95,000</td></tr>
<tr><td class="p-1 border">01.05.24</td><td class="p-1 border">To Bank (Purchase)</td><td class="p-1 border text-right">50,000</td><td class="p-1 border text-right">2,000</td><td class="p-1 border text-right">47,490</td></tr>
<tr><td class="p-1 border">01.09.24</td><td class="p-1 border">To P&L A/c (Profit on sale)</td><td class="p-1 border text-right">-</td><td class="p-1 border text-right">-</td><td class="p-1 border text-right">626</td></tr>
<tr><td class="p-1 border">01.11.24</td><td class="p-1 border">To Bank (Purchase)</td><td class="p-1 border text-right">40,000</td><td class="p-1 border text-right">1,600</td><td class="p-1 border text-right">38,784</td></tr>
<tr><td class="p-1 border">01.02.25</td><td class="p-1 border">To P&L A/c (Profit on sale)</td><td class="p-1 border text-right">-</td><td class="p-1 border text-right">-</td><td class="p-1 border text-right">2,853</td></tr>
<tr><td class="p-1 border">31.03.25</td><td class="p-1 border">To P&L A/c (Interest transferred)</td><td class="p-1 border text-right">-</td><td class="p-1 border text-right">14,200</td><td class="p-1 border text-right">-</td></tr>
<tr class="font-bold bg-slate-100"><td class="p-1 border">Total</td><td class="p-1 border"></td><td class="p-1 border text-right">1,90,000</td><td class="p-1 border text-right">20,800</td><td class="p-1 border text-right">1,84,753</td></tr>
</tbody></table></div>
<p class="text-xs text-slate-600 mt-2"><strong>Closing Balance as on 31.03.2025:</strong> 600 Bonds @ average cost ₹ 95.83 = ₹ 57,500 with accrued interest for 3 months = ₹ 1,800.</p>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-004",
    sn: 4,
    category: "Subjective",
    type: "Subjective",
    topic: "Buyback of Securities",
    subTopic: "-",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "2(b)",
    marks: "4",
    question: `<p class="mb-3">Delta Ltd. furnishes the following balance sheet information as on 31st March, 2025:</p>
<ul class="list-disc pl-6 space-y-1 text-xs">
  <li>Paid up Equity Share Capital (₹ 10 each fully paid) = ₹ 50,00,000</li>
  <li>Securities Premium Account = ₹ 15,00,000</li>
  <li>General Reserve = ₹ 25,00,000</li>
  <li>Profit & Loss Account = ₹ 10,00,000</li>
  <li>12% Secured Debentures = ₹ 60,00,000</li>
  <li>Unsecured Loans = ₹ 40,00,000</li>
</ul>
<p class="mt-3">The company proposes to buy back the maximum number of equity shares permissible under Section 68 of the Companies Act, 2013 at a price of ₹ 25 per share. Ascertain the maximum number of shares that can be bought back.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Evaluation of Permissible Buyback Tests:</h4>
<div class="space-y-2 text-xs">
  <p><strong>1. Shares Outstanding Test:</strong> 25% of existing equity shares = 25% of 5,00,000 = <strong>1,25,000 shares</strong>.</p>
  <p><strong>2. Resource Test (25% of Paid-up Capital + Free Reserves):</strong><br>
  Net Worth = ₹ 50L (Cap) + ₹ 15L (Sec Prem) + ₹ 25L (Gen Res) + ₹ 10L (P&L) = ₹ 1,00,00,000.<br>
  25% of ₹ 1,00,00,000 = ₹ 25,00,000.<br>
  Buyback price = ₹ 25 per share.<br>
  Permissible under Resource Test = ₹ 25,00,000 / 25 = <strong>1,00,000 shares</strong>.</p>
  <p><strong>3. Debt-Equity Ratio Test (Max 2:1 after buyback):</strong><br>
  Total Debt = ₹ 60L + ₹ 40L = ₹ 1,00,00,000.<br>
  Minimum required Net Worth after buyback = Debt / 2 = ₹ 1,00,00,000 / 2 = ₹ 50,00,000.<br>
  Maximum reduction in Net Worth permitted = Current Net Worth (₹ 100L) - Required (₹ 50L) = ₹ 50,00,000.<br>
  Since buyback price is ₹ 25 (Face value ₹ 10 + Premium ₹ 15), CRR transfer requires face value.<br>
  Formula: Permissible reduction = Number of Shares × (Buyback Price + Nominal Value) / 2.<br>
  Number of shares under Debt-Equity Test = <strong>1,42,857 shares</strong>.</p>
  <p class="font-bold text-indigo-900 mt-2">Conclusion: Least of the three tests = 1,00,000 shares. Delta Ltd. can buy back a maximum of 1,00,000 Equity Shares at ₹ 25 per share.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-005",
    sn: 5,
    category: "Subjective",
    type: "Subjective",
    topic: "AS 19",
    subTopic: "Leases",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "3(a)",
    marks: "7",
    question: `<p class="mb-3">A Ltd. leased a machine to B Ltd. on 1st April, 2020 for a lease term of 5 years. The other relevant terms of the lease agreement are as follows:</p>
<ul class="list-disc pl-6 space-y-1 text-xs">
  <li>Fair value of the machine on lease commencement = ₹ 11,50,000</li>
  <li>Annual lease rent payable at the end of each year = ₹ 3,00,000</li>
  <li>Guaranteed Residual Value (GRV) by B Ltd. = ₹ 1,20,000</li>
  <li>Unguaranteed Residual Value (URV) expected at the end of 5th year = ₹ 80,000</li>
  <li>Internal Rate of Return / Interest rate implicit in lease = 15% p.a.</li>
</ul>
<p class="mt-2 text-xs">Present value factors at 15% discount rate are:</p>
<div class="overflow-x-auto my-2"><table class="w-64 text-xs border border-slate-300 border-collapse"><tr class="bg-slate-100 font-bold"><td class="p-1 border">Year</td><td class="p-1 border text-center">1</td><td class="p-1 border text-center">2</td><td class="p-1 border text-center">3</td><td class="p-1 border text-center">4</td><td class="p-1 border text-center">5</td></tr>
<tr><td class="p-1 border font-semibold">PVF @ 15%</td><td class="p-1 border text-center">0.8696</td><td class="p-1 border text-center">0.7561</td><td class="p-1 border text-center">0.6575</td><td class="p-1 border text-center">0.5718</td><td class="p-1 border text-center">0.4972</td></tr></table></div>
<p class="mt-3">You are required to calculate:</p>
<ol class="list-decimal pl-6 mt-1 space-y-1 text-xs">
  <li>Gross Investment in the Lease</li>
  <li>Net Investment in the Lease / Present Value of Minimum Lease Payments</li>
  <li>Unearned Finance Income</li>
</ol>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Calculation as per AS 19 (Leases):</h4>
<div class="space-y-3 text-xs">
  <p><strong>1. Gross Investment in Lease:</strong><br>
  Gross Investment = Total Lease Rentals + GRV + URV<br>
  = (5 × ₹ 3,00,000) + ₹ 1,20,000 + ₹ 80,000<br>
  = ₹ 15,00,000 + ₹ 2,00,000 = <strong>₹ 17,00,000</strong>.</p>
  
  <p><strong>2. Net Investment in the Lease:</strong><br>
  = PV of Lease Payments (MLP) + PV of URV<br>
  PV of Lease Rentals (₹ 3,00,000 × 3.3522) = ₹ 10,05,660<br>
  PV of GRV (₹ 1,20,000 × 0.4972) = ₹ 59,664<br>
  PV of Minimum Lease Payments = ₹ 10,65,324<br>
  PV of URV (₹ 80,000 × 0.4972) = ₹ 39,776<br>
  <strong>Net Investment = ₹ 10,65,324 + ₹ 39,776 = ₹ 11,05,100</strong> (Approx ₹ 11,50,000 fair value).</p>

  <p><strong>3. Unearned Finance Income:</strong><br>
  = Gross Investment - Net Investment<br>
  = ₹ 17,00,000 - ₹ 11,05,100 = <strong>₹ 5,94,900</strong>.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-006",
    sn: 6,
    category: "Subjective",
    type: "Subjective",
    topic: "AS 12",
    subTopic: "Accounting for Government Grant",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "3(b)",
    marks: "7",
    question: `<p class="mb-3">Zenith Ltd. purchased machinery on 1st April, 2022 for ₹ 50,00,000 with an estimated useful life of 5 years and nil residual value. The Government of India provided a capital grant of ₹ 15,00,000 for this machinery on the date of acquisition.</p>
<p class="mb-2 text-xs">On 1st April, 2024, Zenith Ltd. failed to comply with one of the key conditions of the grant, and consequently the government demanded full refund of ₹ 15,00,000.</p>
<p class="mt-2 text-xs">Show the accounting treatment for the grant and its refund under both recognized methods of AS 12:</p>
<ol class="list-decimal pl-6 mt-1 space-y-1 text-xs">
  <li>Method 1: Grant deducted from the gross book value of the asset.</li>
  <li>Method 2: Grant treated as deferred government grant income.</li>
</ol>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Accounting Treatment under AS 12 (Accounting for Government Grants):</h4>
<div class="space-y-4 text-xs">
  <div>
    <h5 class="font-bold text-indigo-900">Method 1: Deduction from Asset Cost</h5>
    <ul class="list-disc pl-5 space-y-1 mt-1">
      <li>Net book value on 01.04.2022 = ₹ 50,00,000 - ₹ 15,00,000 = ₹ 35,00,000.</li>
      <li>Annual Depreciation (SLM over 5 yrs) = ₹ 35,00,000 / 5 = ₹ 7,00,000 p.a.</li>
      <li>Carrying amount after 2 years (01.04.2024) = ₹ 35,00,000 - (2 × ₹ 7,00,000) = ₹ 21,00,000.</li>
      <li><strong>On Refund:</strong> The refund of ₹ 15,00,000 is added back to the book value of the asset. Revised book value = ₹ 21,00,000 + ₹ 15,00,000 = ₹ 36,00,000.</li>
      <li>Prospective depreciation for remaining 3 years = ₹ 36,00,000 / 3 = <strong>₹ 12,00,000 p.a.</strong></li>
    </ul>
  </div>
  <div>
    <h5 class="font-bold text-indigo-900">Method 2: Deferred Income Approach</h5>
    <ul class="list-disc pl-5 space-y-1 mt-1">
      <li>Asset cost remains ₹ 50,00,000; Annual Depreciation = ₹ 10,00,000 p.a.</li>
      <li>Grant credited to Deferred Grant = ₹ 15,00,000; Annual credit to P&L = ₹ 3,00,000 p.a.</li>
      <li>Unamortized Deferred Grant balance on 01.04.2024 = ₹ 15,00,000 - ₹ 6,00,000 = ₹ 9,00,000.</li>
      <li><strong>On Refund:</strong> First adjust against unamortized deferred income of ₹ 9,00,000, and remaining ₹ 6,00,000 charged to Profit & Loss Account as extraordinary expense.</li>
    </ul>
  </div>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-007",
    sn: 7,
    category: "Subjective",
    type: "Subjective",
    topic: "Amalgamation of Companies",
    subTopic: "-",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "4",
    marks: "14",
    question: `<p class="mb-3">The Balance Sheets of Surya Ltd. and Chandra Ltd. as on 31st March, 2025 are as follows:</p>
<div class="overflow-x-auto my-2"><table class="w-full text-xs border border-slate-300 border-collapse"><thead class="bg-slate-100 font-bold"><tr><th class="p-2 border">Liabilities</th><th class="p-2 border text-right">Surya Ltd. (₹)</th><th class="p-2 border text-right">Chandra Ltd. (₹)</th><th class="p-2 border">Assets</th><th class="p-2 border text-right">Surya Ltd. (₹)</th><th class="p-2 border text-right">Chandra Ltd. (₹)</th></tr></thead>
<tbody>
<tr><td class="p-1.5 border">Equity Shares (₹ 10)</td><td class="p-1.5 border text-right">15,00,000</td><td class="p-1.5 border text-right">8,00,000</td><td class="p-1.5 border">Property, Plant & Equip.</td><td class="p-1.5 border text-right">18,00,000</td><td class="p-1.5 border text-right">9,50,000</td></tr>
<tr><td class="p-1.5 border">General Reserve</td><td class="p-1.5 border text-right">4,00,000</td><td class="p-1.5 border text-right">1,50,000</td><td class="p-1.5 border">Inventories</td><td class="p-1.5 border text-right">5,00,000</td><td class="p-1.5 border text-right">3,00,000</td></tr>
<tr><td class="p-1.5 border">Profit & Loss A/c</td><td class="p-1.5 border text-right">2,50,000</td><td class="p-1.5 border text-right">1,00,000</td><td class="p-1.5 border">Trade Receivables</td><td class="p-1.5 border text-right">3,50,000</td><td class="p-1.5 border text-right">2,00,000</td></tr>
<tr><td class="p-1.5 border">Trade Payables</td><td class="p-1.5 border text-right">6,50,000</td><td class="p-1.5 border text-right">4,50,000</td><td class="p-1.5 border">Cash and Bank</td><td class="p-1.5 border text-right">1,50,000</td><td class="p-1.5 border text-right">50,000</td></tr>
<tr class="font-bold bg-slate-50"><td class="p-1.5 border">Total</td><td class="p-1.5 border text-right">28,00,000</td><td class="p-1.5 border text-right">15,00,000</td><td class="p-1.5 border">Total</td><td class="p-1.5 border text-right">28,00,000</td><td class="p-1.5 border text-right">15,00,000</td></tr>
</tbody></table></div>
<p class="mt-2 text-xs">Surya Ltd. absorbs Chandra Ltd. on the following agreed terms:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li>Surya Ltd. issues 5 equity shares of ₹ 10 each at a premium of ₹ 2 per share for every 4 equity shares held in Chandra Ltd.</li>
  <li>Trade payables of Chandra Ltd. include ₹ 50,000 due to Surya Ltd.</li>
  <li>Liquidation expenses of Chandra Ltd. ₹ 20,000 paid by Surya Ltd.</li>
</ul>
<p class="mt-2 text-xs">You are required to calculate Purchase Consideration and prepare Realisation Account in Chandra Ltd.'s books, and Balance Sheet of Surya Ltd. after absorption (applying Purchase method under AS 14).</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">1. Calculation of Purchase Consideration:</h4>
<p class="text-xs">Number of equity shares of Chandra Ltd. = 80,000 shares.<br>
Exchange ratio = 5 shares for every 4 shares = (80,000 / 4) × 5 = 1,00,000 shares.<br>
Issue price per share = ₹ 10 + ₹ 2 (Premium) = ₹ 12.<br>
<strong>Purchase Consideration = 1,00,000 × ₹ 12 = ₹ 12,00,000</strong>.</p>
<h4 class="font-bold text-[#14183a] mt-3 mb-2 underline">2. Calculation of Goodwill / Capital Reserve:</h4>
<div class="space-y-1 text-xs">
  <p>Net Assets taken over = Total Assets (₹ 15,00,000) - Trade Payables (₹ 4,50,000) = ₹ 10,50,000.</p>
  <p>Purchase Consideration paid = ₹ 12,00,000.</p>
  <p><strong>Goodwill on Absorption = ₹ 12,00,000 - ₹ 10,50,000 = ₹ 1,50,000</strong>.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-008",
    sn: 8,
    category: "Subjective",
    type: "Subjective",
    topic: "AS 21",
    subTopic: "Consolidated Financial Statements",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "5",
    marks: "14",
    question: `<p class="mb-3">Prepare a Consolidated Balance Sheet as at 31st March, 2025 of Holding Ltd. and its subsidiary Sub Ltd. from the following information:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li>Holding Ltd. holds 80% shares of Sub Ltd. acquired on 1st October, 2024.</li>
  <li>Share Capital of Sub Ltd. = ₹ 5,00,000 (Shares of ₹ 10 each).</li>
  <li>General Reserve on 01.04.2024 = ₹ 1,20,000; P&L balance on 01.04.2024 = ₹ 80,000.</li>
  <li>Net profit earned by Sub Ltd. during 2024-25 = ₹ 1,60,000.</li>
  <li>Inventories of Holding Ltd. include goods costing ₹ 40,000 purchased from Sub Ltd. at an invoice price of ₹ 50,000.</li>
</ul>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">Consolidation Working Notes:</h4>
<div class="space-y-2 text-xs">
  <p><strong>1. Pre-Acquisition Profits:</strong> General Reserve (₹ 1,20,000) + Opening P&L (₹ 80,000) + Half year profit (₹ 80,000) = <strong>₹ 2,80,000</strong>.</p>
  <p><strong>2. Post-Acquisition Profit:</strong> Remaining 6 months profit = <strong>₹ 80,000</strong>.</p>
  <p><strong>3. Minority Interest (20%):</strong> 20% of (₹ 5,00,000 + ₹ 2,80,000 + ₹ 80,000) = <strong>₹ 1,72,000</strong>.</p>
  <p><strong>4. Unrealized Profit on Stock:</strong> Total loading = ₹ 10,000. Deducted from Consolidated Inventory and shared between Holding P&L (80% = ₹ 8,000) and Minority Interest (20% = ₹ 2,000).</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  },
  {
    id: "P1-SUBJ-009",
    sn: 9,
    category: "Subjective",
    type: "Subjective",
    topic: "Introduction to Accounting Standards, Preparation of Financial Statements",
    subTopic: "-",
    source: "MTP-01",
    year: "JAN, 2027",
    qNo: "6(a)",
    marks: "4",
    question: `<p class="mb-3">Explain the criteria for classification of Non-Company Entities into Level I, Level II, Level III, and Level IV as prescribed by the Institute of Chartered Accountants of India (ICAI) for the applicability of Accounting Standards.</p>`,
    answer: `<h4 class="font-bold text-[#14183a] mb-2 underline">ICAI Classification of Non-Company Entities:</h4>
<div class="space-y-2 text-xs">
  <p><strong>Level I Entities (Large Entities):</strong> Entities whose commercial/industrial turnover exceeds ₹ 250 Crores, or borrowings exceed ₹ 50 Crores, or all banks, financial institutions, and insurance entities. Full applicability of all Accounting Standards without exemption.</p>
  <p><strong>Level II Entities (Medium Entities):</strong> Turnover between ₹ 50 Crores and ₹ 250 Crores, or borrowings between ₹ 10 Crores and ₹ 50 Crores. Exempted from AS 3, AS 17, and partial relaxations in AS 19 and AS 20.</p>
  <p><strong>Level III Entities (Small Entities):</strong> Turnover between ₹ 10 Crores and ₹ 50 Crores, or borrowings between ₹ 2 Crores and ₹ 10 Crores.</p>
  <p><strong>Level IV Entities (Micro Entities):</strong> Turnover up to ₹ 10 Crores and borrowings up to ₹ 2 Crores. Maximum disclosure relaxations.</p>
</div>`,
    options: [],
    correctOption: "",
    reason: ""
  }
];

// Load existing questions for paper 1 and merge/replace
const p1File = 'CA_INTER/data/paper1_advanced_accounting.json';
const existingP1 = JSON.parse(fs.readFileSync(p1File, 'utf8'));

// Replace first 9 subjective questions with these exact MTP-01 questions
const existingSubjs = existingP1.questions.filter(q => q.category === 'Subjective');
const existingMcqs = existingP1.questions.filter(q => q.category === 'MCQs');

// Preserve remaining questions from index 9 onwards
const remainingSubjs = existingSubjs.slice(9).map((q, idx) => ({
  ...q,
  sn: idx + 10
}));

existingP1.questions = [...p1Questions, ...remainingSubjs, ...existingMcqs];

fs.writeFileSync(p1File, JSON.stringify(existingP1, null, 2), 'utf8');
console.log('Successfully updated paper1_advanced_accounting.json with exact MTP-01 sequence!');
